import DashboardLayout from "@/components/layouts/DashboardLayout";
import CreateForm from "@/components/layouts/Create/CreateForm";

export default function Create() {
  return (
    <DashboardLayout>
      <section className="dark:bg-gray-900 overflow-auto mx-5 sm:mx-0 ">
        <div className="py-8 px-4 max-w-2xl lg:py-16">
          <h2 className="mb-4 sm:ml-0 ml-0 text-xl font-bold text-gray-900 dark:text-white">
            Add a new property
          </h2>
          <CreateForm />
        </div>
      </section>
    </DashboardLayout>
  );
}
