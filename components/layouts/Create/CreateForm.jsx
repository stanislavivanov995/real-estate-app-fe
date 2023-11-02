"use client";

import Image from "next/image.js";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useState } from "react";
import Dropzone from "../DragAndDrop/Dropzone";

export default function CreateForm() {
  const [files, setFiles] = useState([]);

  const initialValues = {
    propertyName: "",
    roomsCount: 1,
    propertyType: "",
    location: "",
    price: 0,
    images: [],
  };

  const validationSchema = Yup.object().shape({});

  function handleFunction(data) {
    console.log(Object.values(data));
  }

  function onFilesChange(changedFiles) {
    setFiles(changedFiles);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFunction}
      validationSchema={validationSchema}
    >
      <Form className="flex mt-[25px] flex-col items-center">
        <div className="flex flex-wrap w-6/12 justify-center gap-4">
          <div className="w-[350px] sm:w-[450px] mb-4 h-12 bg-indigo-400 bg-opacity-10 rounded-[6px] border-2 border-indigo-400 flex justify-start text-lg items-center pl-2 gap-2.5">
            <Image
              src={"/house-icon.png"}
              alt="house-icon"
              width={20}
              height={20}
            />
            <Field
              placeholder="Type of property"
              name="property-type"
              id="email"
              className="bg-transparent outline-none text-[15px]"
            />
          </div>

          <div className="w-[350px] sm:w-[450px] mb-4 h-12 bg-indigo-400 bg-opacity-10 rounded-[6px] border-2 border-indigo-400 flex justify-start text-lg items-center pl-2 gap-2.5">
            <Image
              src={"/dollar-price.png"}
              alt="dollar-price-icon"
              width={20}
              height={20}
            />
            <Field
              placeholder="Price"
              name="email"
              id="email"
              className="bg-transparent outline-none text-[15px]"
            />
            <div className="ml-auto m-2 ">
              <select
                name="price"
                id="price"
                className="bg-transparent outline-none"
              >
                <option value="EUR">EUR</option>
                <option value="BGN">BGN</option>
                <option value="CRN">CRN</option>
              </select>
            </div>
          </div>

          <div className="w-[350px] sm:w-[450px] mb-4 h-12 bg-indigo-400 bg-opacity-10 rounded-[6px] border-2 border-indigo-400 flex justify-start text-lg items-center pl-2 gap-2.5">
            <Image
              src={"/house-icon.png"}
              alt="house-icon"
              width={20}
              height={20}
            />
            <Field
              placeholder="Rooms Count"
              name="email"
              id="email"
              className="bg-transparent outline-none text-[15px]"
            />
          </div>

          <div className="w-[350px] sm:w-[450px] mb-4 h-12 bg-indigo-400 bg-opacity-10 rounded-[6px] border-2 border-indigo-400 flex justify-start text-lg items-center pl-2 gap-2.5">
            <Image
              src={"/location-icon.png"}
              alt="Location"
              width={20}
              height={20}
            />
            <Field
              placeholder="Location"
              name="email"
              id="email"
              className="bg-transparent outline-none text-[15px]"
            />
          </div>
          <div className="w-[95%] sm:max-w-full flex-shrink mb-4 h-12 bg-indigo-400 bg-opacity-10 rounded-[6px] border-2 border-indigo-400 flex justify-start text-lg items-center pl-2 gap-2.5">
            <Image
              src={"/house-icon.png"}
              alt="house-icon"
              width={20}
              height={20}
            />
            <Field
              placeholder="Property Name"
              name="email"
              id="email"
              className="bg-transparent outline-none text-[15px]"
            />
          </div>
        </div>

        <Dropzone
          className="p-14 border-[6px] border-neutral-300 border-dotted mt-[2em]"
          onFilesChange={onFilesChange}
        />
        <button
          type="submit"
          className="sm:w-[150px] w-[340px] mt-[25px] 2 p-2.5 bg-[#2D57FF] sm:rouned-[25px] rounded-[25px] text-white text-[15px] font-bold mb-[10px]"
        >
          Post Residence
        </button>
      </Form>
    </Formik>
  );
}
