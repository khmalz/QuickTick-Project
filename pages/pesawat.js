/* eslint-disable @next/next/no-img-element */
import { BiSearch } from "react-icons/bi";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";

export default function pesawat() {
   return (
      <>
         <Head>
            <title>Pesawat Page</title>
         </Head>
         <Navbar />

         <div className="container">
            {/* Form */}
            <section>
               <div className="mb-10 mt-16 w-full rounded-lg border p-5 font-poppins shadow-lg">
                  <div className="mb-5">
                     <div>
                        <h3 className="text-3xl font-bold">Mau Pesen Apa ?</h3>
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
                           Berangkat
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
                           Cari Penerbangan
                        </button>
                     </div>
                  </div>
               </div>
            </section>

            <section className="mt-10">
               <h2 className="text-center font-quando text-3xl font-semibold">Partner Maskapai</h2>

               <div className="container">
                  <div className="flex w-full flex-wrap">
                     <div className="mt-14 flex w-full justify-center gap-x-24">
                        <img className="w-24" src="Partners/Citilink.jpg" alt="" />
                        <img className="w-24" src="Partners/RoyalBrunei.jpg" alt="" />
                        <img className="w-24" src="Partners/NamAir.jpg" alt="" />
                        <img className="w-24" src="Partners/AirAsia.jpg" alt="" />
                        <img className="w-24" src="Partners/AirAstana.jpg" alt="" />
                        <img className="w-24" src="Partners/AF.jpg" alt="" />
                        <img className="w-24" src="Partners/Garuda.jpg" alt="" />
                     </div>
                     <div className="mt-8 flex w-full justify-center gap-x-24">
                        <img className="w-24" src="Partners/BritishAirways.jpg" alt="" />
                        <img className="w-24" src="Partners/SriwijayaAir.jpg" alt="" />
                        <img className="w-24" src="Partners/ANA.jpg" alt="" />
                        <img className="w-24" src="Partners/ThaiLionAir.jpg" alt="" />
                        <img className="w-24" src="Partners/SwissInternational.jpg" alt="" />
                        <img className="w-24" src="Partners/FireFly.jpg" alt="" />
                        <img className="w-24" src="Partners/AirCanada.jpg" alt="" />
                     </div>
                  </div>
               </div>
            </section>

            <section className="mt-16 mb-24 w-full ">
               <h2 className="text-center font-quando text-3xl font-semibold">Popular Destination</h2>

               <div className="mx-auto mt-12 grid grid-cols-3 place-items-center">
                  <div className="flex flex-col gap-y-3">
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Bali
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Jakarta
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Medan
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Yogyakarta
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Lombok
                     </a>
                  </div>
                  <div className="flex flex-col gap-y-3">
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Balikpapan
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Semarang
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Padang
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Solo
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Banjarmasin
                     </a>
                  </div>
                  <div className="flex flex-col gap-y-3">
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Pekanbaru
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Papua
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Makassar
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Batam
                     </a>
                     <a href="#" className="text-lg font-semibold text-slate-800/60 hover:text-slate-800/90">
                        Tiket Ke Palembang
                     </a>
                  </div>
               </div>
            </section>
         </div>
         <Footer />
      </>
   );
}
