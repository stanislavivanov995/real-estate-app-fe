'use client';
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function PublicNavLinks() {
    const pathname = usePathname();

    const publicNavLinks = [
        {href: '/', name: 'Home'},
        {href: '/public/faq', name: 'FAQ'},
        {href: '/public/about', name: 'About'},
        {href: '/public/contacts', name: 'Contacts'},
    ];

    return (
        <nav className={"flex items-center gap-10"}>
            {
                publicNavLinks.map(link =>

                    <Link key={link.href}
                          className={`${pathname === link.href ? 'text-blue-800 underline' : ''} 
                                    text-[15px] font-medium text-blue-950 hover:text-blue-800 hover:underline`}
                          href={link.href}
                    >
                        {link.name}
                    </Link>
                )
            }
        </nav>
    );
};