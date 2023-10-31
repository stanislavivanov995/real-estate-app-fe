"use client";

import PublicLayout from "@/components/layouts/PublicLayout";
import CreateForm from "@/components/layouts/Create/CreateForm";

export default function Create() {
  return (
    <PublicLayout>
      <div className="flex flex-col items-center mt-[3em] rounded-[3em] rounded-[3em]">
        <div className="flex flex-col">
          <h1 className="font-bold text-[#09090B] text-3xl">Create</h1>
          <p className="text-[#71717A] font-normal mb-6">
            Hi there! What are are you offering to sell?
          </p>
        </div>
        <CreateForm />
      </div>
    </PublicLayout>
  );
}
