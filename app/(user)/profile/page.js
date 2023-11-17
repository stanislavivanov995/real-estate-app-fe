import DashboardLayout from "@/components/layouts/DashboardLayout";

export default function ProfilePage() {
  const person = {
    name: "Ivan Petrov",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad perferendis assumenda vel aut fuga laudantium exercitationem nihil, nesciunt, doloribus dolor laboriosam aperiam eum debitis maxime architecto repellendus, et quo aspernatur.",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-5 h-full w-full">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-full py-[7em] relative">
          <img
            src={person.img}
            alt="user"
            className="rounded-full border-4 border-indigo-500 w-[13em] absolute bottom-0 right-[60%] mb-[-4em]"
          />
        </div>
        <div className="flex justify-around gap-24 mt-[5em]">
          <div className="flex flex-col gap-3 text-center">
            <div className="font-bold text-3xl">{person.name}</div>
            <div className="max-w-[20em]">{person.description}</div>
          </div>
          <div className="border-l border-indigo-500">
            <h1 className="text-xl font-medium">What you offer</h1>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
