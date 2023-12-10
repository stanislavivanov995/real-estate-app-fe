"use client";

import { useEffect, useState } from 'react';
import PublicNavLinks from "@/components/layouts/PublicLayout/PublicNavLinks";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import api from '@/app/api/api';
import { useAuth } from '@/app/contexts/AuthContext';
import AvatarMenu from '../UserLayout/AvatarMenu';

export default function PublicLayout({ children }) {

  const [ user, setUser ] = useState();

  useEffect(() => {
    api.get('user')
      .then(response => {
        if (response.status === 200) {
          setUser(prevUser => ({ ...prevUser, ...response.data }));
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          setUser(null);
        } else {
          console.error('Error fetching user data:', error.message);
        }
      });
  }, []);


  return (
    <>
      <header className={"flex items-center justify-between border-b border-slate-300 px-12 py-3 shadow"}>
        <div className={'flex gap-20'}>
          <div>SITE LOGO</div>
          {/* PublicNavLinks елементът трябва да бъде добавен тук, ако е необходимо */}
        </div>
        <div className={'flex items-center gap-4'}>
        {user ? (
          <AvatarMenu />
        ) : (
          <>
            <Link href={'/register'} className={'rounded-lg bg-blue-500 px-4 py-3 text-[15px] font-semibold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:shadow-lg'}>
              Sign up
            </Link>
            <Link href={'/login'} className={'rounded-lg bg-gray-200 px-4 py-3 text-[15px] font-semibold text-blue-950 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-lg'}>
              Log in
            </Link>
          </>
        )}
        </div>
      </header>
      {children}
      <Footer />
    </>
  );
}
