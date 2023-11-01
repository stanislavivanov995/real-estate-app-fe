import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/shared/Topnav/TopNav.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Property Rental Platform",
  description:
    "Welcome to the frontend repository of our Property Rental Platform project. This platform allows users to easily list, search, and book rental properties, as well as provide feedback and ratings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/ff1e263a7b.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
