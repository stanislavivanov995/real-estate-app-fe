"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation.js";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

export default function CreateForm({ categoryData }) {
  const [selectedCurrency, setSelectedCurrency] = useState("BGN");
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [categories, setCategories] = useState([]);

  const [arriveHour, setArriveHour] = useState("10:00");
  const [leaveHour, setLeaveHour] = useState("10:00");

  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const [showTooltip, setShowTooltip] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileStatus, setFileStatus] = useState(
    "Click to upload or drag and drop"
  );

  const router = useRouter();

  const getCategoryData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/list-categories");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error.message);
      return [];
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategoryData();
        setCategories(fetchedCategories);
      } catch (error) {
        // error
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    setAddress(value);
    console.log(ll);
    setCoordinates(ll);
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedFiles.length > 15) {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
      return;
    }
    setSelectedFiles([...selectedFiles, ...files]);
    setFileStatus("Files selected");
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    if (selectedFiles.length === 15) {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
      return;
    }
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles([...selectedFiles, ...files]);
    setFileStatus("Files dropped");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setFileStatus("Drop here");
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
    setFileStatus("File removed");
  };

  const initialValues = {
    name: "",
    location: "",
    price: 0,
    category: "",
    currency: "BGN",
    rooms: 1,
    description: "",
    images: [],
  };

  const validationSchema = Yup.object().shape({
    // name: Yup.string().required("Property Name is required"),
    // location: Yup.string().required("Location is required"),
    // price: Yup.number()
    //   .required("Price is required")
    //   .positive("Price must be positive"),
    // category: Yup.string().required("Category is required"),
    // currency: Yup.string(),
    // rooms: Yup.number()
    //   .required("Rooms count is required")
    //   .positive("Rooms count must be positive"),
    // description: Yup.string().required("Description is required"),
    // images: Yup.array().min(1, "At least one image is required"),
  });

  async function handleFunction(data, { resetForm }) {
    const formData = {
      ...data,
      userId: "2",
      location: address,
      arriveHour: arriveHour,
      leaveHour: leaveHour,
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      category: selectedCategory,
      currency: selectedCurrency,
      images: selectedFiles.map((file) => URL.createObjectURL(file)),
    };

    try {
      await fetch("http://localhost:8000/api/real-estates/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "X-Requested-With": "XMLHttpRequest",
        },
        withCredentials: true,
        body: JSON.stringify(formData),
        // body: JSON.stringify(formData, null, 2),
      });
      resetForm();
      router.push("/");
      console.log("estate posted");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFunction}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-[40em] max-md:w-[26em] max-sm:w-[18em]">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Property Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type property name"
              />
              <ErrorMessage
                name="name"
                component="span"
                className=" text-red-600"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="location"
                className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <Field
                      key="location"
                      type="text"
                      name="location"
                      id="location"
                      {...getInputProps({
                        placeholder: "Search Places ...",
                        className: "location-search-input",
                      })}
                      className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Property location"
                    />
                    <ErrorMessage
                      name="location"
                      component="span"
                      className=" text-red-600"
                    />

                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        const style = suggestion.active
                          ? {
                              display: "flex",
                              cursor: "pointer",
                            }
                          : {
                              display: "flex",
                              cursor: "pointer",
                            };
                        return (
                          <div
                            key={suggestion.placeId}
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span className="p-5">
                              {suggestion.description}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
            {/* ArriveHour and LeaveHour */}
            <div className="flex flex-col gap-5 my-10">
              <div>
                <label
                  htmlFor="arriveHour"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Arrive Hour
                </label>
                <div>
                  <TimePicker
                    onChange={(newValue) => setArriveHour(newValue)}
                    value={arriveHour}
                    className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="leaveHour"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Leave Hour
                </label>
                <div>
                  <TimePicker
                    onChange={(newValue) => setLeaveHour(newValue)}
                    value={leaveHour}
                    className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="price"
                className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg focus:bg-red-500">
                <div className="relative w-full p-2">
                  <span className="absolute top-2 left-2 px-2.5 py-[0.58em] font-bold text-gray-900 text-md dark:text-white">
                    {selectedCurrency}
                  </span>
                  <Field
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 pl-14 outline-none text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full block p-[0.8em] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="0.00"
                  />
                  <ErrorMessage
                    name="price"
                    component="span"
                    className=" text-red-600"
                  />
                </div>
                <div className="m-2 mr-[1em]">
                  <Field
                    as="select"
                    name="currency"
                    id="currency"
                    value={selectedCurrency}
                    className="rounded-lg bg-transparent h-10"
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                  >
                    <option
                      value="BGN"
                      className={
                        selectedCurrency === "BGN"
                          ? "bg-indigo-300"
                          : "bg-gray-200"
                      }
                    >
                      BGN
                    </option>
                    <option
                      value="€"
                      className={
                        selectedCurrency === "EUR"
                          ? "bg-indigo-300"
                          : "bg-gray-200"
                      }
                    >
                      EUR
                    </option>
                    <option
                      value="$"
                      className={
                        selectedCurrency === "USD"
                          ? "bg-indigo-300"
                          : "bg-gray-200"
                      }
                    >
                      USD
                    </option>
                  </Field>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <Field
                as="select"
                name="category"
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Field>
            </div>
            <div className="w-full">
              <label
                htmlFor="rooms"
                className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rooms count
              </label>
              <Field
                type="text"
                name="rooms"
                id="rooms"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="2"
              />
              <ErrorMessage
                name="rooms"
                component="span"
                className=" text-red-600"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <Field
                as="textarea"
                name="description"
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              />
              <ErrorMessage
                name="description"
                component="span"
                className=" text-red-600"
              />
            </div>
          </div>

          {showTooltip && (
            <div
              id="tooltip-click"
              role="tooltip"
              className="text-center z-10 bg-red-500 block px-3 py-1.5 text-sm font-medium text-white rounded-lg shadow-sm"
            >
              Maximum images are 15!
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          )}

          <div className="w-full">
            <label
              htmlFor="images"
              className="flex flex-col items-center max-md:max-w-[18em] justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover-bg-gray-100 dark:border-gray-600 dark:hover-border-gray-500 dark:hover-bg-gray-600"
              onDrop={handleFileDrop}
              onDragOver={handleDragOver}
            >
              <div className="flex flex-col items-center justify-center h-64">
                {selectedFiles.length > 0 ? (
                  <div className="flex gap-5 max-w-[30em] flex-wrap items-center justify-center">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Image ${index}`}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleRemoveFile(index);
                          }}
                          className="absolute top-0.5 right-0.5 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover-bg-red-600 cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    ></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">{fileStatus}</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mx-3">
                      SVG, PNG, JPG, or GIF (MAX. 800x400px)
                    </p>
                  </>
                )}
              </div>
              <Field
                type="file"
                name="images"
                id="images"
                className="hidden"
                multiple
                onChange={handleFileInputChange}
                disabled={selectedFiles.length === 15}
              />
            </label>
          </div>
          <ErrorMessage
            name="images"
            component="span"
            className=" text-red-600"
          />
          <button
            type="submit"
            className="w-full h-12 bg-blue-600 rounded-[10px] text-white text-lg font-bold mt-2"
          >
            POST
          </button>
        </div>
      </Form>
    </Formik>
  );
}
