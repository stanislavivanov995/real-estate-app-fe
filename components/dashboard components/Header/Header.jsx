"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar fluid rounded className="shadow-lg w-full p-7">
      <div className="font-bold ml-5 max-lg:hidden">DASHBOARD</div>
      <div className="hidden max-lg:block font-bold text-3xl text-gray-700 ml-10">
        Reservio
      </div>
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
          <Dropdown.Item>
            <Link href={"/profile"}>Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}
