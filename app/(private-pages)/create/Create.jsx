import PublicLayout from "@/components/layouts/PublicLayout";

export default function Create() {
  return (
    <PublicLayout>
      <div className="flex justify-center m-auto mt-[3em] rounded-[3em] w-7/12 rounded-[3em] max-xl:w-4/12">
        <div className="flex flex-col">
          <h1 className="font-bold text-[#09090B] text-3xl">Create</h1>
          <p className="text-[#71717A] font-normal mb-6">
            Hi there! What are are you offering to sell?
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}
