import DashboardLayout from "@/components/layouts/DashboardLayout/DashboardLayout.js";
import MyEstatesTable from "@/components/layouts/MyEstates/MyEstatesTable.jsx";
import Pagination from "@/components/layouts/MyEstates/Pagination.jsx";
import { Suspense } from "react";
import Loading from "./loading.js";

let estatesData = [
  {
    id: 1,
    propertyName: "Hotel Lavaza",
    location: "Burgas, Bulgaria",
    category: "Hotel",
    currency: "$",
    price: 899,
  },
  {
    id: 2,
    propertyName: "HillHouse Plovdiv",
    location: "Plovdiv, Bulgaria",
    category: "House",
    currency: "€",
    price: 500,
  },
  {
    id: 3,
    propertyName: "Виктория Хотел",
    location: "Varna, Bulgaria",
    category: "Hotel",
    currency: "lv",
    price: 71,
  },
  {
    id: 4,
    propertyName: "Хотел Заара",
    location: "Sunny Beach, Bulgaria",
    category: "Hotel",
    currency: "lv",
    price: 300,
  },
  {
    id: 5,
    propertyName: "Къща за гости Кооп Рожен",
    location: "Pamporovo, Bulgaria",
    category: "House",
    currency: "$",
    price: 600,
  },
  {
    id: 6,
    propertyName: "Къща за гости Кооп Рожен",
    location: "Pamporovo, Bulgaria",
    category: "House",
    currency: "$",
    price: 600,
  },
  {
    id: 7,
    propertyName: "Лион Хотел",
    location: "Borovec, Bulgaria",
    category: "Hotel",
    currency: "lv",
    price: 131,
  },
  {
    id: 8,
    propertyName: "Хотел Самоков",
    location: "Borovec, Bulgaria",
    category: "Hotel",
    currency: "lv",
    price: 224,
  },
  {
    id: 9,
    propertyName: "Mardi Gras Hotel & Casino",
    location: "Las Vegas, USA",
    category: "Hotel",
    currency: "$",
    price: 350,
  },
  {
    id: 10,
    propertyName: "Sol Arona Tenerife",
    location: "Los Cristianos, Spain",
    category: "Hotel",
    currency: "lv",
    price: 1500,
  },
  {
    id: 11,
    propertyName: "Apartamentos Costamar",
    location: "Los Cristianos, Spain",
    category: "Hotel",
    currency: "$",
    price: 140,
  },
  {
    id: 12,
    propertyName: "Apartamentos Costamar",
    location: "Los Cristianos, Spain",
    category: "Hotel",
    currency: "$",
    price: 140,
  },
  {
    id: 13,
    propertyName: "Venera Costamar",
    location: "Los Cristianos, Spain",
    category: "Hotel",
    currency: "$",
    price: 140,
  },
];

export default function MyEstates({ searchParams }) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = estatesData.slice(start, end);

  return (
    <DashboardLayout>
      <section className=" mt-[2em] gap-[8em] flex flex-col items-center justify-center h-full">
        <Suspense fallback={<Loading />}>
          <MyEstatesTable entries={entries} />
        </Suspense>
        <Pagination
          hasNextPage={end < estatesData.length}
          hasPrevPage={start > 0}
        />
      </section>
    </DashboardLayout>
  );
}
