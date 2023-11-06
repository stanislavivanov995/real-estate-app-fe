"use client";

import * as Yup from "yup";
import { useState } from "react";

export default function CreateForm() {
  const [selectedCurrency, setSelectedCurrency] = useState("lv");

  return (
    <form action="post" className="">
      <div className="flex sm:flex-row  flex-col justify-between sm:w-[90em] w-[22em] sm:items-start items-center">
        <div className="sm:w-[50em] w-[22em]">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Property Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Property location"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <div className="flex bg-gray-50 border border-gray-300 rounded-lg focus:bg-red-500">
              <div className="relative w-full">
                <span className="absolute top-0 left-0 px-2.5 py-2 font-bold text-gray-900 text-md dark:text-white">
                  {selectedCurrency}
                </span>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 pl-8 outline-none text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full block p-[0.8em] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="0.00"
                />
              </div>
              <div className="m-2 mr-[1em]">
                <select
                  defaultValue={"lv"}
                  name="price-type"
                  id="price-type"
                  className="bg-transparent outline-none"
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                >
                  <option value="lv">BGN</option>
                  <option value="€">EUR</option>
                  <option value="$">USD</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              defaultValue={""}
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option selected disabled value="Select category">
                Select category
              </option>
              <option value="TV">TV/Monitors</option>
              <option value="PC">PC</option>
              <option value="GA">Gaming/Console</option>
              <option value="PH">Phones</option>
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor="rooms"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rooms count
            </label>
            <input
              type="number"
              name="rooms"
              id="rooms"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="2"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="8"
              className="block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your description here"
            ></textarea>
          </div>
        </div>
        <div className="sm:col-span-2 sm:w-[35em] w-[22em]">
          <label
            htmlFor="dropzone-file"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choose images
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mx-3">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="items-center sm:ml-2 ml-0 w-[25em] sm:w-[10em] px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover-bg-primary-800"
      >
        Post
      </button>
    </form>
  );
}
