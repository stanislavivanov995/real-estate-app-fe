import PublicNavLinks from "@/components/layouts/PublicLayout/PublicNavLinks";

export default function PublicLayout({children}) {



    return (
        <>
            <header className={"flex items-center justify-between px-12 py-3 shadow border-b border-slate-300"}>

                <div className={'flex gap-20'}>

                    {/* LOGO */}
                    <div>SITE LOGO</div>

                    {/* Nav Links */}
                    <PublicNavLinks />

                </div>

                {/* Login Register Buttons */}
                <div className={'flex items-center gap-4'}>
                    <button className={'rounded-lg bg-blue-500 py-3 px-4 text-[15px] font-semibold text-white hover:bg-blue-600 hover:shadow-lg transition ease-in-out hover:scale-105 duration-300'}>Sign up</button>
                    <button className={'rounded-lg bg-gray-200 py-3 px-4 text-[15px] font-semibold text-blue-950 hover:bg-gray-100 hover:shadow-lg transition ease-in-out hover:scale-105 duration-300'}>Login in</button>
                </div>

            </header>
            {children}
        </>
    );
}
