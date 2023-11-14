import PublicNavLinks from "@/components/layouts/PublicLayout/PublicNavLinks";
import Link from "next/link";

export default function PublicLayout({children}) {



    return (
        <>
            <header className={"flex items-center justify-between border-b border-slate-300 px-12 py-3 shadow"}>

                <div className={'flex gap-20'}>

                    {/* LOGO */}
                    <div>SITE LOGO</div>

                    {/* Nav Links */}
                    <PublicNavLinks />

                </div>

                {/* Login Register Buttons */}
                <div className={'flex items-center gap-4'}>
                    <Link href={'/register'} className={'rounded-lg bg-blue-500 px-4 py-3 text-[15px] font-semibold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:shadow-lg'}>Sign up</Link>
                    <Link href={'/login'} className={'rounded-lg bg-gray-200 px-4 py-3 text-[15px] font-semibold text-blue-950 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-lg'}>Log in</Link>
                </div>

            </header>
            {children}
        </>
    );
}
