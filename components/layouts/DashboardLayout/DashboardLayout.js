import Sidebar from "@/components/dashboard components/Sidebar/Sidebar";
import Navbar from "@/components/dashboard components/Header/Header";
import Footer from "@/components/dashboard components/Footer/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex justify-center">
      <Sidebar />
      <div className="flex flex-col items-center w-screen h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
