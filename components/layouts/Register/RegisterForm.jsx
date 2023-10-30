"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  toggle: false,
};

const phoneRegExp = /08[789]\d{7}/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required!")
    .min(2, "Minimum characters are 2!")
    .max(15, "Maximum characters are 15!"),
  lastName: Yup.string()
    .required("Last Name is required!")
    .min(2, "Minimum characters are 2!")
    .max(15, "Maximum characters are 15!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Email must be valid"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  password: Yup.string().required("Password is required!"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required!")
    .oneOf([Yup.ref("password")], "Passwords do not match!"),
  toggle: Yup.boolean().oneOf([true], "Terms are required!"),
});

function handleFunction(data) {
  console.log(Object.values(data));
}

export default function RegisterForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFunction}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-[10px] items-center">
        <div className="flex gap-2 border-2 items-center h-10 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
          <span>
            <Image src="/person.png" alt="person" width={23} height={23} />
          </span>
          <Field
            className="indent-2 outline-0 bg-transparent"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <ErrorMessage
          name="firstName"
          component="span"
          className=" text-red-600 text-[14px]"
        />
        <div className="flex gap-2 border-2 items-center h-10 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
          <span>
            <Image src="/person.png" alt="person" width={23} height={23} />
          </span>
          <Field
            className="indent-2 outline-0 bg-transparent"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        <ErrorMessage
          name="lastName"
          component="span"
          className=" text-red-600 text-[14px]"
        />
        <div className="flex gap-2 border-2 items-center h-10 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
          <span>
            <Image src="/envelope.png" alt="envelope" width={23} height={23} />
          </span>
          <Field
            className="indent-2 outline-0 bg-transparent"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <ErrorMessage
          name="email"
          component="span"
          className="text-red-600 text-[14px]"
        />
        <div className="flex gap-2 border-2 items-center h-10 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
          <span>
            <Image src="/call.png" alt="call" width={23} height={23} />
          </span>
          <Field
            className="indent-2 outline-0 bg-transparent"
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone ( Optional )"
          />
        </div>
        <ErrorMessage
          name="phone"
          component="span"
          className="text-red-600 text-[14px]"
        />
        <div className="flex gap-2 border-2 items-center h-10 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
          <span>
            <Image
              src="/shield-slash.png"
              alt="shield"
              width={23}
              height={23}
            />
          </span>
          <Field
            className="indent-2 outline-0 bg-transparent"
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <ErrorMessage
          name="password"
          component="span"
          className=" text-red-600 text-[14px]"
        />
        <div className="flex gap-2 border-2 items-center h-10 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
          <span>
            <Image
              src="/shield-slash.png"
              alt="shield"
              width={23}
              height={23}
            />
          </span>
          <Field
            className="indent-2 outline-0 bg-transparent"
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <ErrorMessage
          name="confirmPassword"
          component="span"
          className="text-red-600 text-[14px]"
        />
        <div className="flex gap-3 mt-2 mr-12">
          <Field type="checkbox" name="toggle" />
          <label className="text-zinc-500 font-normal">
            Accept
            <span className="text-[#8098F9]"> terms and conditions</span>
          </label>
        </div>
        <ErrorMessage
          name="toggle"
          component="span"
          className=" text-red-600 text-[14px]"
        />
        <button className="w-[300px] h-16 bg-blue-600 rounded-[10px] text-white text-xl font-bold mt-2">
          Register
        </button>
        <p>
          You have account?
          <Link
            href="/login"
            className="text-[#2D57FF] font-bold cursor-pointer"
          >
            {" "}
            Login now
          </Link>
        </p>
      </Form>
    </Formik>
  );
}
