import { Inter } from "next/font/google";
import "./globals.css";

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
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOQd7UoVJHt28wLiHMD0ZY0S_AiONShyo&libraries=places"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
