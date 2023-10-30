"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image.js";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
  toggle: false,
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Email must be valid"),
  password: Yup.string().required("Password is required!"),
});

function handleFunction(data) {
  console.log(Object.values(data));
}

export default function LoginForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFunction}
      validationSchema={validationSchema}
    >
      <Form className=" mt-[25px] items-center flex flex-col gap-[10px] w-[450px]">
        <div className="w-[350px] sm:w-[450px] mb-4 h-12 bg-indigo-400 bg-opacity-10 rounded-[10px] border-2 border-indigo-400 flex justify-start text-lg items-center pl-2 gap-2.5">
          <Image src={"/email.png"} alt="password" width={25} height={25} />
          <Field
            placeholder="Email"
            name="email"
            id="email"
            className="bg-transparent outline-none w- p-1"
          />
        </div>
        <ErrorMessage
          name="email"
          component="span"
          className=" text-red-600 mb-3"
        />
        <div className="w-[350px] sm:w-[450px] mb-4 h-12 bg-indigo-400 bg-opacity-10 rounded-[10px] border-2 border-indigo-400 flex justify-between text-lg items-center pl-2 gap-2.5">
          <div className=" flex gap-2">
            <Image
              src={"/shield-slash.png"}
              alt="password"
              width={25}
              height={25}
            />
            <Field
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              className="bg-transparent outline-none w-full"
            />
          </div>
          <div className="mr-[10px] opacity-20">
            <i className="fa-solid fa-eye-slash"></i>
          </div>
        </div>
        <ErrorMessage
          name="password"
          component="span"
          className=" text-red-600 mb-3"
        />
        <div className=" flex sm:flex-row flex-col sm:gap-[11em] gap-3 mb-[25px] mt-[1em]">
          <div className="flex items-center gap-2">
            <Field
              type="checkbox"
              name="toggle"
              className="border border-indigo-400 w-[16px]"
            />
            <label className="text-zinc-500 font-normal text-[15px]">
              Remember me
            </label>
          </div>
          <a href="#" className="text-indigo-400 mr-2 text-[15px]">
            Forgot Passowrd?
          </a>
        </div>
        <button
          type="submit"
          className="sm:w-[353px] w-[340px] h-12 p-2.5 bg-blue-600 rounded-[10px] text-white text-xl font-bold mb-[20px]"
        >
          LOG IN
        </button>
      </Form>
    </Formik>
  );
}