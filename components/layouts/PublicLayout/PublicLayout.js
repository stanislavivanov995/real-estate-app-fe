import Link from "next/link";

export default function PublicLayout({ children }) {
  return (
    <>
      <header className={"shadow py-4"}>
        <nav className={"flex-center gap-4"}>
          <Link
            className={
              "px-4 py-1 border shadow rounded-md hover:bg-light-500 hover:text-light-100"
            }
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={
              "px-4 py-1 border shadow rounded-md hover:bg-light-500 hover:text-light-100"
            }
            href={"/about"}
          >
            About
          </Link>
          <Link
            className={
              "px-4 py-1 border shadow rounded-md hover:bg-light-500 hover:text-light-100"
            }
            href={"/faq"}
          >
            FAQ
          </Link>
          <Link
            className={
              "px-4 py-1 border shadow rounded-md hover:bg-light-500 hover:text-light-100"
            }
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className={
              "px-4 py-1 border shadow rounded-md hover:bg-light-500 hover:text-light-100"
            }
            href={"/register"}
          >
            Register
          </Link>
          <Link
            className={
              "px-4 py-1 border shadow rounded-md hover:bg-light-500 hover:text-light-100"
            }
            href={"/create"}
          >
            Create
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
}
