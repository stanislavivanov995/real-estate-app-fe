"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useState } from "react";
import Dropzone from "../DragAndDrop/Dropzone";

export default function CreateForm() {
  const [files, setFiles] = useState([]);

  const initialValues = {
    category: "",
    address: "",
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
      <Form className="flex flex-col mt-[25px] items-center w-[450px]">
        <Field
          placeholder="Email"
          name="email"
          id="email"
          className="bg-transparent outline-none text-[15px]"
        />
        <Field
          placeholder="Email"
          name="email"
          id="email"
          className="bg-transparent outline-none text-[15px]"
        />
        <Field
          placeholder="Email"
          name="email"
          id="email"
          className="bg-transparent outline-none text-[15px]"
        />
        <Field
          placeholder="Email"
          name="email"
          id="email"
          className="bg-transparent outline-none text-[15px]"
        />
        <Field
          placeholder="Email"
          name="email"
          id="email"
          className="bg-transparent outline-none text-[15px]"
        />

        <Dropzone
          className="p-14 border-[6px] border-neutral-300 border-dotted mt-[2em]"
          onFilesChange={onFilesChange}
        />
        <button
          type="submit"
          className="sm:w-[353px] w-[340px] mt-[25px] h-10 p-2.5 bg-[#2D57FF] rounded-[10px] text-white text-[15px] font-bold mb-[10px]"
        >
          Post
        </button>
      </Form>
    </Formik>
  );
}
