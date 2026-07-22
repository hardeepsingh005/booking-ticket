'use client';

import { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function BannerSection() {

  const [modal, setModal] = useState(false);

  const enqForm = () => {
    alert('Open modal page');
  };

  return (
   
<>
   
{/* <!-- Modal Overlay --> */}
{/* Open Button */}
      <button
        onClick={() => setModal(true)}
        className="rounded-lg bg-teal-600 px-5 py-3 text-white w-50 absolute top-50"
      >
        Open Modal
      </button>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          modal
            ? "visible bg-black/50 opacity-100"
            : "invisible bg-black/0 opacity-0"
        }`}
      >
        {/* Modal Box */}
        <div
          className={`w-full max-w-lg rounded-xl bg-white shadow-2xl transition-all duration-300 ${
            modal
              ? "translate-y-0 scale-100"
              : "translate-y-10 scale-95"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Contact Form
            </h2>

            <button
              onClick={() => setModal(false)}
              className="cursor-pointer text-3xl text-gray-500 transition hover:text-red-500"
            >
              <IoIosClose />
            </button>
          </div>

          {/* Form */}
          <form className="space-y-5 p-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
              />
            </div>

              <div>
              <label className="mb-2 block text-sm font-medium">
                Phone / Whatsapp
              </label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
              />
            </div>
                <div>
              <label className="mb-2 block text-sm font-medium">
               City
              </label>
              <input
                type="text"
                placeholder="Enter City Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setModal(false)}
                className="rounded-lg border px-5 py-2 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-teal-600 px-5 py-2 text-white hover:bg-teal-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>



    <section
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1781699488999-9b801a0de031?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="flex h-full flex-col items-center justify-center bg-black/40">
        <h1 className="text-center text-6xl font-bold text-white md:text-9xl">
          BURNING
        </h1>

        <button
          onClick={enqForm}
          className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
        >
          Click
        </button>
      </div>
    </section>


    </>
  );
}