import PublicLayout from "@/components/layouts/PublicLayout";

export default function Register() {
  // TODO: Register form must have the following inputs + validations:
  //  1. First & Last names
  //  2. Email
  //  3. Password
  //  4. Re-password
  //  5. Checkbox for accepting terms
  return (
    <PublicLayout>
      <div className="smaller-screen flex justify-evenly">
        <div className="flex flex-col align-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-[#09090B] text-4xl">
              Create your account
            </h1>
            <p className="text-[#71717A] font-normal">Unlock all Features</p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex gap-2 border-2 border-[#8098F980] p-2 rounded-lg">
              <span>
                <i className="fa-solid fa-user text-2xl text-[#8098F9]"></i>
              </span>
              <input
                className="indent-2 outline-0"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="flex gap-2 border-2 border-[#8098F980] p-2 rounded-lg">
              <span>
                <i className="fa-solid fa-user text-2xl text-[#8098F9]"></i>
              </span>
              <input
                className="indent-2 outline-0"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-2 border-2 border-[#8098F980] p-2 rounded-lg">
              <span>
                <i class="fa-solid fa-envelope text-2xl text-[#8098F9]"></i>
              </span>
              <input
                className="indent-1.5 outline-0"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex gap-2 border-2 border-[#8098F980] p-2 rounded-lg">
              <span>
                <i class="fa-solid fa-phone text-2xl text-[#8098F9]"></i>
              </span>
              <input
                className="indent-2 outline-0"
                type="text"
                placeholder="Phone ( Optional )"
              />
            </div>
            <div className="flex gap-2 border-2 border-[#8098F980] p-2 rounded-lg">
              <span>
                <i class="fa-solid fa-shield text-2xl text-[#8098F9]"></i>
              </span>
              <input
                className="indent-2 outline-0"
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="flex gap-2 border-2 border-[#8098F980] p-2 rounded-lg">
              <span>
                <i class="fa-solid fa-shield text-2xl text-[#8098F9]"></i>
              </span>
              <input
                className="indent-2 outline-0"
                type="text"
                placeholder="Confirm Password"
              />
            </div>

            <button>Post Residence</button>
          </form>
        </div>
        <div className="flex flex-col justify-center align-center bg-[#343859]">
          <div className="">
            <img src="/public/register.png" alt="Tech image" />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
