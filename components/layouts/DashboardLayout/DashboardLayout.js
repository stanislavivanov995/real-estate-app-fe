import Sidebar from "@/components/dashboard components/Sidebar/Sidebar";
import Navbar from "@/components/dashboard components/Header/Header";
import Footer from "@/components/dashboard components/Footer/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-screen h-full">
        <Navbar />
        <div className="overflow-y-auto m-auto custom-scrollbar">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
