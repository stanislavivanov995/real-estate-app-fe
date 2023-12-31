import DashboardLayout from "@/components/layouts/DashboardLayout";
import CreateForm from "@/components/layouts/Create/CreateForm";

export default function Create() {
  return (
    <DashboardLayout>
      <section className="dark:bg-gray-900">
        <div className="py-8 max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new property
          </h2>
          <CreateForm />
        </div>
      </section>
    </DashboardLayout>
  );
}
