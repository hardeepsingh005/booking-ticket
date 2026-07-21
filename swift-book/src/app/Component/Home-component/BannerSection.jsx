'use client';

import React from 'react';
import { IoIosClose } from "react-icons/io";

export default function BannerSection() {
  const enqForm = () => {
    alert('Open modal page');
  };

  return (

<>
   
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