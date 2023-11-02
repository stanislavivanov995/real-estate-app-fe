import AdminNavbar from "../../dashboard components/AdminNavbar/AdminNavbar.js";
import Sidebar from "../../dashboard components/Sidebar/Siderbar.js";
import HeaderStats from "../../dashboard components/HeaderStats/HeaderStats.js";
import FooterAdmin from "../../dashboard components/FooterAdmin/FooterAdmin.js";

export default function Dashboard({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blue-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
