import DashboardLayout from "@/components/layouts/DashboardLayout";
import CreateForm from "@/components/layouts/Create/CreateForm";

export default function Create() {
  return (
    <DashboardLayout>
      <section class="dark:bg-gray-900 w-7/12">
        <div class="py-8 px-4 max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <CreateForm />
        </div>
      </section>
    </DashboardLayout>
  );
}
