/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import Navbar from "../components/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import Input from "../components/Input";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Order() {
   const [order, SetOrder] = useState(false);
   const router = useRouter();
   let data = router.query.login;

   useEffect(() => {
      if (data) {
         let akhir = data.toLowerCase() === "true" ? true : false;
         if (akhir === true) {
            SetOrder(true);
         } else if (akhir === false) {
            SetOrder(false);
         }
      }
   }, [data]);

   return (
      <>
         <Head>
            <title>Cek Order Page</title>
         </Head>
         {order ? <NavbarLogin /> : <Navbar />}

         <div className="container">
            <section className="mt-8 mb-20">
               <div className="flex w-full flex-nowrap gap-x-20">
                  <div className="w-1/3">
                     <div className="mx-auto max-w-xs text-center">
                        <h1 className="font-quando font-semibold text-slate-800">Masukkan alamat email dan order ID di form untuk cek pesanan</h1>

                        <div className="mt-5 flex w-full flex-col gap-y-9 rounded-lg bg-neutral-200 py-10 px-6">
                           <Input type="text" id="secondName" className="capitalize" placeholder="Alamat email" />
                           <Input type="text" id="secondName" className="capitalize" placeholder="Order ID" />
                           <button className="mt-6 flex items-center justify-center gap-x-1 rounded-full bg-emerald-500 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-emerald-700">
                              <BiSearch className="text-xl" />
                              Cari Penerbangan
                           </button>
                        </div>
                     </div>
                  </div>
                  {order ? (
                     <div className="w-2/3 border-4 px-5">
                        <div className="kotak-kiri-atas relative mx-auto mt-12 w-11/12 rounded-b-md rounded-t-lg border-2 border-t-[12px] border-slate-300 border-t-cyan-400 py-5 px-10 before:-mt-8 before:-ml-0.5 before:rounded-t before:bg-cyan-400 before:font-quando before:text-sm before:font-normal before:content-['Flight']">
                           <h2 className="font-quando font-semibold">
                              Jakarta, Indonesia <span className="font-normal">to</span> Surabaya, Indonesia
                           </h2>
                           <div className="mt-8 grid grid-cols-3">
                              <div className="flex flex-col gap-y-4 font-quando font-semibold">
                                 <h5>Passenger</h5>
                                 <h5>Gate</h5>
                                 <h5>Boarding Time</h5>
                              </div>
                              <div className="flex flex-col gap-y-4 font-quando text-slate-700/80">
                                 <h5>Mr. Febrian</h5>
                                 <h5>03</h5>
                                 <h5>13:30</h5>
                              </div>
                              <div>
                                 <img src="Partners/Garuda.jpg" className="-mt-3 h-36 w-[85%]" alt="Garuda Indonesia" />
                              </div>
                           </div>
                           <div>
                              <Link href="/eTicket">
                                 <a className="font-semibold text-cyan-400 hover:text-slate-400">More</a>
                              </Link>
                           </div>
                        </div>
                     </div>
                  ) : (
                     <div className="flex w-2/3 flex-col gap-y-10 border-4 py-40">
                        <img src="notfound.jpg" className="mx-auto w-1/3" alt="Not Found" />
                        <div>
                           <h2 className="text-center font-quando text-xl font-semibold">Belum Ada Pesanan Masuk</h2>
                           <p className="mt-2 text-center font-quando font-medium">Log in agar dapat mengakses dengan mudah pesanan anda di sini</p>
                        </div>
                     </div>
                  )}
               </div>
            </section>
         </div>

         <Footer />
      </>
   );
}
