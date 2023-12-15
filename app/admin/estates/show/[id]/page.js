"use client";
import DashboardLayout from "@/components/layouts/DashboardLayout/DashboardLayout.js";
import Image from "next/image";

export default function Show({ params }) {
  let building = {
    name: "Beautiful 2 floor house",
    location: "England",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quod quisquam voluptatem illo esse delectus corrupti autem molestiae,culpa iste eaque, recusandae maiores dolores fugit blanditiis? Saepead ipsa voluptas.",
    price: 12313,
    category: "house",
    currency: "$",
    rooms: 6,
    arrive: "8:30",
    leave: "10:00",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      "https://housing.com/news/wp-content/uploads/2022/11/shutterstock_1715891752-1200x700-compressed.jpg",
      "https://i.pinimg.com/originals/88/e6/e4/88e6e4fc5d4528c0c622247ad33b7a7c.jpg",
      "https://i.pinimg.com/736x/2c/74/66/2c7466a04d741047a690203d78a6fa1e.jpg",
      "https://lovehomedesigns.com/wp-content/uploads/2022/12/Spectacular-Prairie-Home-Plan-with-Lower-Level-Rec-Room-325005226-1.jpg",
    ],
  };

  return (
    <DashboardLayout>
      <div className="flex items-center mx-auto gap-10 py-8 max-w-[85%] lg:py-16 max-xl:flex-col">
        <div>
          <Image
            src={building.images[0]}
            width={2000}
            height={2000}
            alt="current building image"
          />

          <div className="flex justify-center flex-wrap gap-4 mt-10">
            {building.images
              .slice(1, building.images.length)
              .map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={400}
                  height={400}
                  alt="other building image"
                  className="mb-2 w-1/2 lg:w-1/3 cursor-pointer hover:translate-y-[-0.8em] hover:translate-x-[0.8em] border-[6px] hover:border-indigo-500"
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-bold text-5xl">{building.name}</h1>
            <p className="font-medium opacity-70 text-2xl mt-2">
              Located at {building.location}
            </p>
          </div>
          <p className="text-[1.5em] font-medium">{building.description}</p>
          <p className="flex justify-between font-bold text-2xl">
            Price:{" "}
            <span className="mr-5">
              {building.price} {building.currency}
            </span>
          </p>
          <p className="flex justify-between font-bold text-2xl">
            Category: <span className="mr-5">{building.category}</span>
          </p>
          <p className="flex justify-between font-bold text-2xl">
            Rooms: <span className="mr-5">{building.rooms}</span>
          </p>
          <p className="flex justify-between font-bold text-2xl">
            Arrive at: <span className="mr-5">{building.arrive} AM</span>
          </p>
          <p className="flex justify-between font-bold text-2xl">
            Leave at: <span className="mr-5">{building.leave} PM</span>
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
