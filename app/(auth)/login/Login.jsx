import LoginForm from "@/components/layouts/Login/LoginForm.jsx";
import PublicLayout from "@/components/layouts/PublicLayout";
import Image from "next/image.js";

export default function Login() {
  return (
    <PublicLayout>
      <div className="flex justify-center mt-[5em]">
        <div className="w-[620px] sm:h-[800px] h-[840px] bg-slate-50 flex-col justify-start items-center inline-flex shadow-2xl rounded-tl-[3em] rounded-bl-[3em]">
          <div className="flex flex-col justify-center gap-5 my-[100px]">
            <div className="flex flex-col align-middle justify-center text-center sm:text-left">
              <h1 className="sm:text-[35px] text-[25px] font-bold leading-normal">
                Login to your Account
              </h1>
              <h3 className=" text-zinc-500 text-[18px] sm:text-[16px] font-normal">
                Welcome back! Select method to log in:
              </h3>
            </div>
            <div className="sm:flex-row flex-col items-center flex sm:justify-between align-middle gap-[40px]">
              <div className="flex align-middle justify-center gap-2">
                <button className=" flex justify-center items-center sm:w-[180px] w-[215px] h-[50px] gap-5 border-2 border-indigo-400 text-[18px] font-medium text-zinc-950 border-opacity-50 rounded-[10px]">
                  <Image
                    src="/logos/Google.png"
                    alt="google logo"
                    width={20}
                    height={20}
                  />
                  Google
                </button>
              </div>
              <div>
                <button className=" flex justify-center items-center sm:w-[180px] w-[215px] h-[50px] gap-5 border-2 border-indigo-400 text-[18px] font-medium text-zinc-950 border-opacity-50 rounded-[10px]">
                  <Image
                    src="/logos/Facebook.png"
                    alt="facebook logo"
                    width={25}
                    height={25}
                  />
                  Facebook
                </button>
              </div>
            </div>
            <div className="w-[453px] h-[25px] justify-center items-center inline-flex">
              <div className="w-[120px] h-[0px] border border-zinc-500"></div>
              <div className="sm:w-[213px] w-[100px] h-[25px] text-center text-zinc-500 sm:text-[15px] text-[12px] font-medium font-['Montserrat'] leading-normal">
                or continue with email
              </div>
              <div className="w-[120px] h-[0px] border border-zinc-500"></div>
            </div>
            <LoginForm />
            <p className="text-zinc-500 font-normal text-center sm:mb-1 mb-4">
              Don't have account?{" "}
              <a href="#" className="text-blue-600 font-bold">
                Create an account
              </a>
            </p>
          </div>
        </div>
        <div className="bg-slate-700  w-[620px] h-[800px] shadow-2xl rounded-tr-[3em] rounded-br-[3em] hidden sm:block">
          <div className=" flex flex-col items-center gap-[3em] justify-center mt-[100px]">
            <Image
              className="flex"
              src="/login image.png"
              alt="register"
              width={500}
              height={200}
            />
            <div className="text-center">
              <h3 className="text-indigo-100 text-xl font-bold">
                Connect with any device.
              </h3>
              <p className="text-indigo-100 opacity-75 font-medium">
                Everything you need is an internet connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
