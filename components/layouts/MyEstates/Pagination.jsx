"use client";

import { useRouter, useSearchParams } from "next/navigation.js";
import { useEffect } from "react";

export default function Pagination({ hasNextPage, hasPrevPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const per_page = Number(searchParams.get("per_page")) || 6;

  const totalItems = 100; 
  const availablePages = Math.ceil(totalItems / Number(per_page));

  // Check and redirect if user change page url manually
  useEffect(() => {
    if (Number(page) < 1 || Number(page) > availablePages) {
      router.push(`/admin/estates/my-estates?page=${page}&per_page=${per_page}`);
    }
  }, [page]);

  // Check and redirect if user change per_page url manually
  useEffect(() => {
    if (Number(per_page) > 6 || Number(per_page) < 6) {
      router.push(`/admin/estates/my-estates/?page=1&per_page=6`);
    }
  }, [per_page]);

  return (
    <nav
      aria-label="Page navigation example"
      className="flex justify-center align-middle my-5"
    >
      <ul className="flex items-center -space-x-px h-10 text-base">
        <button
          className="flex items-center justify-center px-4 h-10 ms-0 leading-tight disabled:cursor-not-allowed text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(
              `/admin/estates/my-estates/?page=${
                Number(page) - 1
              }&per_page=${per_page}`
            );
          }}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-3 h-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
        {/* <li>
            <span class="sr-only">Previous</span>
            <svg
              class="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            1
          </a>
        </li>

        <li>
          <a
            href="#"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            // class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            4
          </a>
        </li> */}
        <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          {page} / {Math.ceil(10 / Number(per_page))}
        </li>
        <li>
          <button
            className="flex items-center justify-center px-4 h-10 leading-tight disabled:cursor-not-allowed text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={!hasNextPage}
            onClick={() => {
              router.push(
                `/admin/estates/my-estates/?page=${
                  Number(page) + 1
                }&per_page=${per_page}`
              );
            }}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
