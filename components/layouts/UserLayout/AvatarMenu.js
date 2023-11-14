'use client';
import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";

export default function AvatarMenu() {
    const [showMenu, setShowMenu] = useState(false);

    const dropdownRef = useRef();

    useEffect(() => {
        if (showMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showMenu]);


    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    const userInfo = {firstName: 'Mehmed', lastName: 'Syuleyman', avatar: ''};

    return (
        <div ref={dropdownRef}
             className={`relative ring-2 ${showMenu ? 'ring-blue-300' : 'ring-transparent'} 
            hover:ring-blue-300 rounded-full bg-blue-50 shadow`}>
            <button onClick={() => setShowMenu(!showMenu)}
                    className={'relative w-[38px] h-[38px] '}>
                {userInfo.avatar
                    ?
                    <Image
                        className={'cursor-pointer rounded-full object-contain'}
                        src={'/assets/images/someavatar.png'}
                        alt={'Avatar'}
                        width={38}
                        height={38}
                    />
                    : <div
                        className={'text-slate-500'}>{userInfo.firstName.charAt(0) + userInfo.lastName.charAt(0)}</div>
                }
            </button>

                {showMenu && <div className={'absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'}>

                    <Link className={'hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'} href={'/dashboard'}>
                        Dashboard</Link>
                    <Link className={'hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'} href={'/profile'}>
                        Profile</Link>
                    <Link className={'hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'} href={'/logout'}>
                        Sign out</Link>
                </div>}

        </div>
    );
};