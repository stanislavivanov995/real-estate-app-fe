import DashboardLayout from "@/components/layouts/DashboardLayout/DashboardLayout.js";
import MyEstatesTable from "@/components/layouts/MyEstates/MyEstatesTable.jsx";
import Pagination from "@/components/layouts/MyEstates/Pagination.jsx";

export default function MyEstates() {
  return (
    <DashboardLayout>
      <section className=" mt-[5em] gap-[8em] flex flex-col items-center justify-between h-[70vh]">
        <MyEstatesTable />
        <Pagination />
      </section>
    </DashboardLayout>
  );
}
