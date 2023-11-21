import Link from "next/link.js";
export default function MyEstatesTable({ entries }) {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Property Name
            </th>
            <th scope="col" class="px-6 py-3">
              Location
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-12 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((estate) => (
            <tr
              key={estate.id}
              class="odd:bg-white h-[5em] text-lg odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {estate.propertyName}
              </th>
              <td class="px-6 py-4">{estate.location}</td>
              <td class="px-6 py-4">{estate.category}</td>
              <td class="px-6 py-4">
                {estate.price}
                {estate.currency}
              </td>
              <td class="px-6 py-4">
                <div className="flex items-center gap-5">
                  <button
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <Link href={""}>
                    <button
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <i class="fa-solid fa-eye"></i>
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
