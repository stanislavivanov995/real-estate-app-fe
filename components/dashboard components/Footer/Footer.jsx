export default function Footer() {
  return (
    <footer className="mt-auto z-20 text-center w-full p-4 bg-white border-t border-gray-200 shadow-md p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023
        <a href="/home" className="ml-1 hover:underline">
          Reservio
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
