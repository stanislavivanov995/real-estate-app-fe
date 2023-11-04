"use client";

import Image from "next/image.js";
import Link from "next/link";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded className="shadow-lg w-full p-7">
      <Navbar.Brand href="https://flowbite-react.com">
        <Image
          src="/website-logo.png"
          className="mr-3 h-6 sm:h-9 max-sm:ml-10"
          alt="Flowbite React Logo"
          width={150}
          height={150}
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link href={"/dashboard"}>Dashboard</Link>
          </Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}
