import DashboardLayout from "@/components/layouts/DashboardLayout/DashboardLayout.js";
import MyEstatesTable from "@/components/layouts/MyEstates/MyEstatesTable.jsx";
import Pagination from "@/components/layouts/MyEstates/Pagination.jsx";
import { Suspense } from "react";
import Loading from "./loading.js";

let estatesData = [
  {
    propertyName: "Hotel Lavaza",
    location: "Burgas, Bulgaria",
    category: "Hotel",
    currency: "$",
    price: 899,
  },
  {
    propertyName: "HillHouse Plovdiv	",
    location: "Plovdiv, Bulgaria",
    category: "House",
    currency: "€",
    price: 500,
  },
  {
    propertyName: "Виктория Хотел",
    location: "Varna, Bulgaria",
    category: "Hotel",
    currency: "lv",
    price: 71,
  },
];

export default function MyEstates() {
  return (
    <DashboardLayout>
      <section className=" mt-[5em] gap-[8em] flex flex-col items-center justify-between h-[70vh]">
        <Suspense fallback={<Loading />}>
          <MyEstatesTable estatesData={estatesData} />
        </Suspense>
        <Pagination />
      </section>
    </DashboardLayout>
  );
}
