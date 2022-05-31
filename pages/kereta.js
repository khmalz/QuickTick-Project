/* eslint-disable @next/next/no-img-element */
import { BiSearch } from "react-icons/bi";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";

export default function kereta() {
   return (
      <>
         <Head>
            <title>Kereta Page</title>
         </Head>
         <Navbar />

         <div className="container">
            {/* Form */}
            <section>
               <div className="mb-10 mt-16 w-full rounded-lg border p-5 font-poppins shadow-lg">
                  <div className="mb-5">
                     <div>
                        <h3 className="text-3xl font-bold">Mau Pergi Kemana ?</h3>
                     </div>
                  </div>
                  <div className="mb-8 flex flex-nowrap gap-10">
                     <div className="w-1/3">
                        <label className="font-semibold" htmlFor="">
                           From
                        </label>
                        <input className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring focus:ring-sky-200" type="text" />
                     </div>
                     <div className="w-1/3">
                        <label className="font-semibold" htmlFor="">
                           To
                        </label>
                        <input className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring focus:ring-sky-200 " type="text" />
                     </div>
                     <div className="w-1/5">
                        <label className="font-semibold" htmlFor="">
                           Pergi
                        </label>
                        <input className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring focus:ring-sky-200 " type="text" />
                     </div>
                     <div className="w-1/5">
                        <label className="font-semibold" htmlFor="">
                           Pulang
                        </label>
                        <input className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring focus:ring-sky-200 " type="text" />
                     </div>
                  </div>
                  <div className="mb-5 flex flex-wrap">
                     <div className="w-[55%]">
                        <label className="font-semibold" htmlFor="">
                           Penumpang
                        </label>
                        <input className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring  focus:ring-sky-200" type="text" />
                     </div>
                     <div className="flex w-[45%] flex-wrap justify-end place-self-end">
                        <button className="flex items-center gap-x-2 rounded-xl bg-emerald-500 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-emerald-700">
                           <BiSearch className="text-xl" />
                           Cari Kereta Api
                        </button>
                     </div>
                  </div>
               </div>
            </section>

            <section className="mt-10">
               <h2 className="text-center font-quando text-3xl font-semibold">Partner</h2>

               <div className="container">
                  <div className="w-full">
                     <div className="mt-14 flex w-full justify-center ">
                        <img className="w-36" src="Partners/KeretaApi.jpg" alt="" />
                        <img className="w-28" src="Partners/Railink.jpg" alt="" />
                     </div>
                  </div>
               </div>
            </section>

            <section className="my-16 w-full ">
               <h2 className="text-center font-quando text-3xl font-semibold">Popular City</h2>

               <div className="mb-10 mt-5 flex flex-col gap-y-6">
                  <div className="mx-auto mt-5 flex place-content-center gap-x-24">
                     <a
                        href="#"
                        className="relative before:absolute before:top-0 before:left-0 before:w-64 before:py-1.5 before:px-4 before:font-quando before:text-xl before:font-medium before:text-white before:content-['Tiket_Kereta_Api_ke_Bandung'] "
                     >
                        <img className="h-72 w-96 rounded-xl" src="KeretaBandung.png" alt="" />
                     </a>
                     <a
                        href="#"
                        className="relative before:absolute before:top-0 before:left-0 before:w-64 before:py-1.5 before:px-4 before:font-quando before:text-xl before:font-medium before:text-white before:content-['Tiket_Kereta_Api_ke_Jakarta'] "
                     >
                        <img className="h-72 w-96 rounded-xl" src="KeretaJakarta.jpg" alt="" />
                     </a>
                  </div>
                  <div className="mx-auto mt-5 flex place-content-center gap-x-24">
                     <a
                        href="#"
                        className="relative before:absolute before:top-0 before:left-0 before:w-64 before:py-1.5 before:px-4 before:font-quando before:text-xl before:font-medium before:text-white before:content-['Tiket_Kereta_Api_ke_Semarang'] "
                     >
                        <img className="h-72 w-96 rounded-xl" src="KeretaSemarang.png" alt="" />
                     </a>
                     <a
                        href="#"
                        className="relative before:absolute before:top-0 before:left-0 before:w-64 before:py-1.5 before:px-4 before:font-quando before:text-xl before:font-medium before:text-white before:content-['Tiket_Kereta_Api_ke_Surabaya'] "
                     >
                        <img className="h-72 w-96 rounded-xl" src="KeretaSurabaya.webp" alt="" />
                     </a>
                  </div>
               </div>
            </section>
         </div>
         <Footer />
      </>
   );
}
