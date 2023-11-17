import DashboardLayout from "@/components/layouts/DashboardLayout";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center gap-5 mt-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user"
            className="rounded-full w-[11em]"
          />
        </div>
        <div className="font-bold text-xl">Ivan Petrov</div>
      </div>
    </DashboardLayout>
  );
}
