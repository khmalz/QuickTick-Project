/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import { BiSearch } from "react-icons/bi";
import Footer from "../components/Footer";

export default function hotel() {
   return (
      <>
         <Head>
            <title>Hotel Page</title>
         </Head>
         <Navbar />

         <div className="container">
            {/* Form */}
            <section>
               <div className="mb-10 mt-16 w-full rounded-lg border p-5 font-poppins shadow-lg">
                  <div className="mb-5">
                     <div>
                        <h3 className="text-3xl font-bold">Mau Booking Hotel ?</h3>
                     </div>
                  </div>
                  <div className="mb-8 flex flex-nowrap gap-10">
                     <div className="w-1/3">
                        <label className="font-semibold" htmlFor="">
                           Tempat
                        </label>
                        <input className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring focus:ring-sky-200" type="text" />
                     </div>
                     <div className="w-1/3">
                        <label className="font-semibold" htmlFor="">
                           Check In
                        </label>
                        <input className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring focus:ring-sky-200 " type="text" />
                     </div>
                     <div className="w-1/3">
                        <label className="font-semibold" htmlFor="">
                           Check Out
                        </label>
                        <input className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring focus:ring-sky-200 " type="text" />
                     </div>
                  </div>
                  <div className="mb-5 flex flex-wrap">
                     <div className="w-[59%]">
                        <label className="font-semibold" htmlFor="">
                           Kamar &amp; Tamu
                        </label>
                        <input className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring  focus:ring-sky-200" type="text" />
                     </div>
                     <div className="flex w-[41%] flex-wrap justify-end place-self-end">
                        <button className="flex items-center gap-x-2 rounded-xl bg-emerald-500 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-emerald-700">
                           <BiSearch className="text-xl" />
                           Cari Hotel
                        </button>
                     </div>
                  </div>
               </div>
            </section>

            <section className="mx-auto w-full">
               <div>
                  <h2 className="text-center font-quando text-2xl">Pilihan Destinasi Seru</h2>
               </div>

               <div className="mb-10 mt-5 flex flex-col gap-y-6">
                  <div className="mx-auto mt-5 flex place-content-center gap-x-24">
                     <a
                        href="#"
                        className="relative before:absolute before:bottom-14 before:left-0 before:py-1.5 before:px-4 before:font-quando before:text-xl before:font-medium before:text-white before:content-['Bandung'] after:absolute after:bottom-7 after:left-0 after:py-1.5 after:px-4 after:font-quando after:text-base after:font-medium after:text-white after:content-['1000\+_Property']"
                     >
                        <img className="h-80 w-64 rounded-xl" src="HotelBandung.jpeg" alt="" />
                     </a>
                     <a
                        href="#"
                        className="relative before:absolute before:bottom-14 before:left-0 before:py-1.5 before:px-4 before:font-quando before:text-xl before:font-medium before:text-white before:content-['Jakarta'] after:absolute after:bottom-7 after:left-0 after:py-1.5 after:px-4 after:font-quando after:text-base after:font-medium after:text-white after:content-['3000\+_Property']"
                     >
                        <img className="h-80 w-64 rounded-xl" src="HotelJakarta.jpeg" alt="" />
                     </a>
                     <a
                        href="#"
                        className="relative before:absolute before:bottom-14 before:left-0 before:py-1.5 before:px-4 before:font-quando before:text-xl before:font-medium before:text-white before:content-['Yogyakarta'] after:absolute after:bottom-7 after:left-0 after:py-1.5 after:px-4 after:font-quando after:text-base after:font-medium after:text-white after:content-['1000\+_Property']"
                     >
                        <img className="h-80 w-64 rounded-xl" src="HotelYogyakarta.jpeg" alt="" />
                     </a>
                  </div>
                  <div className="mx-auto mt-5 flex place-content-center gap-x-24">
                     <a
                        href="#"
                        className="relative before:absolute before:bottom-14 before:left-0 before:py-1.5 before:px-4 before:font-quando before:text-xl before:font-medium before:text-white before:content-['Makassar'] after:absolute after:bottom-7 after:left-0 after:py-1.5 after:px-4 after:font-quando after:text-base after:font-medium after:text-white after:content-['500\+_Property']"
                     >
                        <img className="h-80 w-64 rounded-xl" src="HotelMakassar.jpeg" alt="" />
                     </a>
                     <a
                        href="#"
                        className="relative before:absolute before:bottom-14 before:left-0 before:py-1.5 before:px-4 before:font-quando before:text-xl before:font-medium before:text-white before:content-['Malang'] after:absolute after:bottom-7 after:left-0 after:py-1.5 after:px-4 after:font-quando after:text-base after:font-medium after:text-white after:content-['2000\+_Property']"
                     >
                        <img className="h-80 w-64 rounded-xl" src="HotelMalang.jpeg" alt="" />
                     </a>
                     <a
                        href="#"
                        className="relative before:absolute before:bottom-14 before:left-0 before:py-1.5 before:px-4 before:font-quando before:text-xl before:font-medium before:text-white before:content-['Lombok'] after:absolute after:bottom-7 after:left-0 after:py-1.5 after:px-4 after:font-quando after:text-base after:font-medium after:text-white after:content-['800\+_Property']"
                     >
                        <img className="h-80 w-64 rounded-xl" src="HotelLombok.jpeg" alt="" />
                     </a>
                  </div>
               </div>
            </section>
         </div>
         <Footer />
      </>
   );
}
