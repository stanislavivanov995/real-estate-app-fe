import Sidebar from "@/components/dashboard components/Sidebar/Sidebar";
import Header from "@/components/dashboard components/Header/Header";
import Footer from "@/components/dashboard components/Footer/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex flex-col items-center justify-center w-screen min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
