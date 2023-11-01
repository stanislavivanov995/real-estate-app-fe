'use client'

import Image from "next/image.js";
import Link from "next/link";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function TopNav() {

    return (
        <Navbar fluid rounded className=" shadow-lg">
            <Navbar.Brand href="https://flowbite-react.com">
                <Image src="/logos/website-logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" width={150} height={150} />
                {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>

                <Navbar.Link active>
                    <Link href={"/"}>Home</Link>
                </Navbar.Link>


                <Navbar.Link>
                    <Link href={"/about"}>About</Link>
                </Navbar.Link>


                <Navbar.Link>
                    <Link href={"/create"}>Create</Link>
                </Navbar.Link>


                <Navbar.Link >
                    <Link href={"/login"}>Login</Link>
                </Navbar.Link>

                <Navbar.Link >
                    <Link href={"/register"}>Register</Link>
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>
    );
};