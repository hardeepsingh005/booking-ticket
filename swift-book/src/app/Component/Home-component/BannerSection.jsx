'use client';

import React, { useState } from 'react';
import { IoIosClose } from "react-icons/io";

export default function BannerSection() {

  let { modal, setModal } = useState(false);

  const enqForm = () => {
    alert('Open modal page');
  };

  return (

<>
   
{/* <!-- Modal Overlay --> */}
<div id="modal"
    className="fixed inset-0 z-50 ${} flex items-center justify-center bg-black/50 p-4">

    {/* <!-- Modal --> */}
    <div className="w-full max-w-lg rounded-xl bg-white shadow-2xl">

        {/* <!-- Header --> */}
        <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
                Contact Form
            </h2>

            <button
                className="text-2xl text-gray-500 hover:text-red-500 transition cursor-pointer">
                <IoIosClose />
            </button>
        </div>

        {/* <!-- Form --> */}
        <form action="/action_page.php" className="p-6 space-y-5">

            {/* <!-- First Name --> */}
            <div>
                <label htmlFor="fname" className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter first name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200" />
            </div>

            {/* <!-- Email --> */}
            <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200" />
            </div>

            {/* <!-- Phone --> */}
            <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200" />
            </div>

            {/* <!-- Subject --> */}
            <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200" />
            </div>

            {/* <!-- Message --> */}
            <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"></textarea>
            </div>

            {/* <!-- Buttons --> */}
            <div className="flex justify-end gap-3 pt-2">

                <button
                    type="button"
                    className="rounded-lg border border-gray-300 px-5 py-2.5 text-gray-700 transition hover:bg-gray-100">
                    Cancel
                </button>

                <button
                    type="submit"
                    className="rounded-lg bg-teal-600 px-6 py-2.5 font-medium text-white transition hover:bg-teal-700">
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