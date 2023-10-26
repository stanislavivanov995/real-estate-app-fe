"use client";
import PublicLayout from "@/components/layouts/PublicLayout";
import Image from "next/image";
import Link from "next/link";
import { Formik, Field, Form, ErrorMessage } from "formik";

export default function Register() {
  // TODO: Register form must have the following inputs + validations:
  //  1. First & Last names
  //  2. Email
  //  3. Password
  //  4. Re-password
  //  5. Checkbox for accepting terms
  return (
    <PublicLayout>
      <Formik>
        <div className="flex justify-between max-2xl:pl-[2em]">
          <div className="flex flex-col justify-center items-center w-6/12 gap-16 max-2xl:pr-[2em] max-md:w-full mt-8">
            <div className="flex flex-col">
              <h1 className="font-bold text-[#09090B] text-3xl">
                Create your account d
              </h1>
              <p className="text-[#71717A] font-normal">Unlock all Features</p>
            </div>
            <Form className="flex flex-col gap-4 items-center">
              <div className="flex gap-2 border-2 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
                <span>
                  <Image width={30} height={30} src="/person.png"></Image>
                </span>
                <Field
                  className="indent-2 outline-0 bg-transparent"
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First Name"
                />
              </div>
              <div className="flex gap-2 border-2 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
                <span>
                  <Image width={30} height={30} src="/person.png"></Image>
                </span>
                <Field
                  className="indent-2 outline-0 bg-transparent"
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-2 border-2 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
                <span>
                  <Image width={30} height={30} src="/envelope.png"></Image>
                </span>
                <Field
                  className="indent-2 outline-0 bg-transparent"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex gap-2 border-2 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
                <span>
                  <Image width={30} height={30} src="/call.png"></Image>
                </span>
                <Field
                  className="indent-2 outline-0 bg-transparent"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone ( Optional )"
                />
              </div>
              <div className="flex gap-2 border-2 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
                <span>
                  <Image width={30} height={30} src="/shield-slash.png"></Image>
                </span>
                <Field
                  className="indent-2 outline-0 bg-transparent"
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex gap-2  border-2 bg-indigo-400 bg-opacity-10 border-[#8098F980] p-2 rounded-lg w-[300px]">
                <span>
                  <Image width={30} height={30} src="/shield-slash.png"></Image>
                </span>
                <Field
                  className="indent-2 outline-0 bg-transparent"
                  type="text"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="flex gap-3 mt-2 mr-12">
                <Field type="checkbox" name="toggler" />
                <label className="text-zinc-500 font-normal">
                  Accept
                  <span className="text-[#8098F9]"> terms and conditions</span>
                </label>
              </div>
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
          </div>
          <div className="md:flex hidden flex-col w-[1000px] h-[824px] justify-center items-center bg-[#343859] gap-4">
            <Image
              className="ml-5 max-xl:w-[380px]"
              src="/register.png"
              alt="register"
              width={590}
              height={220}
            />
            <div className="text-center px-3">
              <h3 className="text-[#E0EAFF] font-bold text-2xl">Join us!</h3>
              <p className="text-[#E0EAFF] opacity-60 font-medium text-1xl">
                Just go through the boring process of creating an account.
              </p>
            </div>
          </div>
        </div>
      </Formik>
    </PublicLayout>
  );
}
