'use client';
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function UserNavLinks() {
    const pathname = usePathname();

    const publicNavLinks = [
        {href: '/', name: 'Home'},
        {href: '/profile', name: 'Profile'},
        {href: '/edit-profile', name: 'Edit Profile'},
        {href: '/bookings', name: 'My Bookings'},
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