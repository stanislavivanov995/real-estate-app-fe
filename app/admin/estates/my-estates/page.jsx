"use client";
import DashboardLayout from "@/components/layouts/DashboardLayout/DashboardLayout.js";
import MyEstatesTable from "@/components/layouts/MyEstates/MyEstatesTable.jsx";
import Pagination from "@/components/layouts/MyEstates/Pagination.jsx";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading.js";

export default function MyEstates({ searchParams }) {
  let user = {
    name: "adada",
    email: "asda@abv.bg",
    id: "4",
  };

  const [estates, setEstates] = useState([]);

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  useEffect(() => {
    const fetchEstates = async () => {
      try {
        const fetchedEstates = await getEsatesData();
        console.log(fetchedEstates);
        setEstates(fetchedEstates.slice(start, end));
      } catch (error) {
        // error
      }
    };

    fetchEstates();
  }, []);

  const getEsatesData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/estates?user=5");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error.message);
      return [];
    }
  };

  return (
    <DashboardLayout>
      <section className="mt-[2em] gap-[8em] flex flex-col items-center justify-center h-full">
        <Suspense fallback={<Loading />}>
          <MyEstatesTable entries={estates} />
        </Suspense>
        <Pagination
          hasNextPage={end < estates.length}
          hasPrevPage={start > 0}
        />
      </section>
    </DashboardLayout>
  );
}
