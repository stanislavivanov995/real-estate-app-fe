"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("First Name is required!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Email must be valid"),
    password: Yup.string()
    .required("Password is required!")
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password must not exceed 50 characters"),
  password_confirmation: Yup.string()
    .required("Confirm Password is required!")
    .oneOf([Yup.ref("password")], "Passwords do not match!"),
  // toggle: Yup.boolean().oneOf([true], "Terms are required!"),
});

function handleFunction(data) {
  const formData = {};
  Object.keys(data).forEach((fieldName) => {
    formData[fieldName] = data[fieldName];
  });

  sendPostRequest(formData);
}

const sendPostRequest = async (data) => {
  const { email, name, password } = data;

  try {
    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    console.log(response.status);
    if (response.status === 200) {
      window.location.href = '/login';
    } else {
      const responseData = await response.json(); // Parse response JSON

      if (responseData.errors) {
        console.log('Validation errors:', responseData.errors);
      } else {
        console.log('Registration failed. Status:', response.status);
      }
    }

  } catch (errors) {
    console.log(errors);
  }
};


export default function RegisterForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFunction}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-[10px] items-center">
        <div className="flex gap-2 border-2 items-center h-10 bg-indigo-300  border-[#8098F980] p-2 rounded-lg w-[300px]">
          <span>
            <Image src="/person.png" alt="person" width={23} height={23} />
          </span>
          <Field
            className="border-0 focus:border-0 focus:ring-0 bg-transparent"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <ErrorMessage
          name="name"
          component="span"
          className=" text-red-600 text-[14px]"
        />
        <div className="flex gap-2 border-2 items-center h-10 bg-indigo-300 border-[#8098F980] p-2 rounded-lg w-[300px]">
          <span>
            <Image src="/envelope.png" alt="envelope" width={23} height={23} />
          </span>
          <Field
            className="border-0 focus:border-0 focus:ring-0 bg-transparent"
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
        <div className="flex gap-2 border-2 items-center h-10 bg-indigo-300  border-[#8098F980] p-2 rounded-lg w-[300px]">
          <span>
            <Image
              src="/shield-slash.png"
              alt="shield"
              width={23}
              height={23}
            />
          </span>
          <Field
            className="border-0 focus:border-0 focus:ring-0 bg-transparent"
            type="password"
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
        <div className="flex gap-2 border-2 items-center h-10 bg-indigo-300 border-[#8098F980] p-2 rounded-lg w-[300px]">
          <span>
            <Image
              src="/shield-slash.png"
              alt="shield"
              width={23}
              height={23}
            />
          </span>
          <Field
            className="border-0 focus:border-0 focus:ring-0 bg-transparent"
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Confirm Password"
          />
        </div>
        <ErrorMessage
          name="password_confirmation"
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
