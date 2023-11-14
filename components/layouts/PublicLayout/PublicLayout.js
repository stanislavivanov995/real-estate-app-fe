import Link from "next/link";

export default function PublicLayout({children}) {

    const publicNavLinks = [
        {href: '/', name: 'Home'},
        {href: '/public/faq', name: 'FAQ'},
        {href: '/public/about', name: 'About'},
        {href: '/public/contacts', name: 'Contacts'},
    ];

    return (
        <>
            <header className={"flex items-center justify-between px-12 py-3 shadow border-b border-slate-300"}>

                <div className={'flex gap-20'}>

                    {/* LOGO */}
                    <div>SITE LOGO</div>

                    {/* Nav Links */}
                    <nav className={"flex items-center gap-10"}>
                        {
                            publicNavLinks.map(link =>

                                <Link key={link.href}
                                    className={'text-[15px] font-medium text-blue-950 hover:text-blue-800 hover:underline'}
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            )
                        }
                    </nav>

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
