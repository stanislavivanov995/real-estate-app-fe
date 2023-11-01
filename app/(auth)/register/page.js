import RegisterForm from "@/components/layouts/Register/RegisterForm";
import Image from "next/image";

export default function Register() {
    return (
        <div className="flex justify-center m-auto mt-[3em] mb-[3em] rounded-[3em] w-7/12 rounded-[3em] max-xl:w-4/12">
            <div className="flex flex-col max-sm:ml-[1em] max-lg:rounded-[3em] justify-center w-[650px] h-[800px] shadow-2xl items-center pl-[2em] pr-[2em] rounded-tl-[3em] rounded-bl-[3em]">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[#09090B] text-3xl">
                        Create your account
                    </h1>
                    <p className="text-[#71717A] font-normal mb-6">
                        Unlock all Features
                    </p>
                </div>
                <RegisterForm />
            </div>

            <div className="hidden w-[650px] h-[800px] bg-[#343859] rounded-tr-[3em] rounded-br-[3em] xl:flex">
                <div className="flex flex-col items-center justify-center gap-[2em] mx-auto pl-[2em] p-[2em]">
                    <Image
                        src="/register.png"
                        alt="register"
                        width={490}
                        height={200}
                        className="ml-7"
                    />

                    <div className="text-center px-3">
                        <h3 className="text-[#E0EAFF] font-bold text-2xl">Join us!</h3>
                        <p className="text-[#E0EAFF] opacity-60 font-medium text-1xl">
                            Just go through the boring process of creating an account.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
