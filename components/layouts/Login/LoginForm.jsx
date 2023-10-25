"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image.js";

const initialValues = {
  email: "",
  password: "",
  toggle: false,
};

function handleFunction(data) {
  console.log(Object.values(data));
}

export default function LoginForm() {
  return (
    <Formik initialValues={initialValues} onSubmit={handleFunction}>
      <Form className=" mt-[25px] items-center flex flex-col gap-[15px] w-[450px]">
        <div className="w-[350px] sm:w-[450px] h-16 bg-indigo-400 bg-opacity-10 rounded-[10px] border-2 border-indigo-400 flex justify-start text-lg items-center pl-2 gap-2.5">
          <Image src={"/email.png"} alt="password" width={30} height={30} />
          <Field
            placeholder="Email"
            name="email"
            id="email"
            className="bg-transparent outline-none w- p-1"
          />
        </div>
        <div className="w-[350px] sm:w-[450px] h-16 bg-indigo-400 bg-opacity-10 rounded-[10px] border-2 border-indigo-400 flex justify-between text-lg items-center pl-2 gap-2.5">
          <div className=" flex gap-2">
            <Image
              src={"/shield-slash.png"}
              alt="password"
              width={30}
              height={30}
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
        <div className=" flex sm:flex-row flex-col sm:gap-[10em] gap-3 mb-[25px]">
          <div className="flex gap-2">
            <Field
              type="checkbox"
              name="toggle"
              className="border border-indigo-400 w-[20px]"
            />
            <label className="text-zinc-500 font-normal">Remember me</label>
          </div>
          <a href="#" className="text-indigo-400 mr-2">
            Forgot Passowrd?
          </a>
        </div>
        <button
          type="submit"
          className="sm:w-[453px] w-[340px] h-16 p-2.5 bg-blue-600 rounded-[10px] text-white text-xl font-bold mb-[20px]"
        >
          LOG IN
        </button>
      </Form>
    </Formik>
  );
}
