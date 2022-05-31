/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Navbar from "../components/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import { BiSearch } from "react-icons/bi";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

export default function Home() {
   const kota = ["Jakarta, Indonesia", "Bandung. Indonesia", "Bali, Indonesia", "Yogyakarta, Indonesia", "Medan, Indonesia", "Surabaya, Indonesia"];
   const gambar = ["iklan1.png", "iklan5.png", "iklan3.png", "iklan4.png", "iklan2.png", "iklan6.png", "iklan7.png"];

   const [login, setLogin] = useState(false);
   const [input, setInput] = useState({ from: "Jakarta, Indonesia", to: "Surabaya, Indonesia", penumpang: "2 Dewasa" });
   const router = useRouter();
   let data = router.query.login;

   const fromForm = (e) => {
      setInput({ ...input, from: e.target.value });
   };
   const toForm = (e) => {
      setInput({ ...input, to: e.target.value });
   };
   const penumForm = (e) => {
      setInput({ ...input, penumpang: e.target.value });
   };

   useEffect(() => {
      if (data) {
         let akhir = data.toLowerCase() === "true" ? true : false;
         if (akhir === true) {
            setLogin(true);
         }
      }
   }, [data, gambar]);

   return (
      <>
         <Head>
            <title>QuickTick</title>
         </Head>
         {login ? <NavbarLogin /> : <Navbar />}
         <div className="container mt-5">
            {/* Iklan Sec */}
            <section>
               <div className="mb-12 flex justify-between gap-10">
                  <Swiper slidesPerView={3} modules={[Navigation, Autoplay]} autoplay={{ delay: 2000 }} spaceBetween={50}>
                     {gambar.map((gmbr, index) => (
                        <SwiperSlide key={index}>
                           <a href="#">
                              <img className="h-60 w-full rounded" src={gmbr} alt="Iklan" />
                           </a>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </section>

            {/* Form */}
            <section>
               <div className="mb-10 w-full rounded-lg border p-5 font-poppins shadow-lg">
                  <div className="mb-5 flex items-center justify-between">
                     <div>
                        <h3 className="text-3xl font-bold">Mau Pesen Apa ?</h3>
                     </div>
                     <div className="flex gap-7">
                        <Link href="/pesawat">
                           <a className="border border-sky-300 p-4 hover:border-sky-300">
                              <img src="iPesawat.jpg" width="25" className="scale-150" alt="" />
                           </a>
                        </Link>
                        <Link href="/hotel">
                           <a className="border p-4 hover:border-sky-300">
                              <img src="iHotel.jpg" width="25" className="scale-150" alt="" />
                           </a>
                        </Link>
                        <Link href="/kereta">
                           <a className="border p-4 hover:border-sky-300">
                              <img src="iKereta.jpg" width="25" className="scale-150" alt="" />
                           </a>
                        </Link>
                        <Link href="/bus">
                           <a className="border p-4 hover:border-sky-300">
                              <img src="iBus.jpg" width="25" className="scale-150" alt="" />
                           </a>
                        </Link>
                        <Link href="/pulsainternet">
                           <a className="border p-4 hover:border-sky-300">
                              <img src="iPaket.jpg" width="25" className="scale-150" alt="" />
                           </a>
                        </Link>
                     </div>
                  </div>

                  <div className="mb-8 flex flex-nowrap gap-10">
                     <div className="w-1/3">
                        <label className="font-semibold" htmlFor="">
                           From
                        </label>
                        <input list="kotaF" className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring focus:ring-sky-200" value={input.from} onChange={fromForm} autoComplete="off" type="text" />
                        <datalist id="kotaF">
                           {kota.map((item, key) => (
                              <option key={key} value={item}></option>
                           ))}
                        </datalist>
                     </div>
                     <div className="w-1/3">
                        <label className="font-semibold" htmlFor="">
                           To
                        </label>
                        <input list="kotaF" className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring focus:ring-sky-200" value={input.to} onChange={toForm} type="text" />
                        <datalist id="kotaF">
                           {kota.map((item, key) => (
                              <option key={key} value={item}></option>
                           ))}
                        </datalist>
                     </div>
                     <div className="w-1/5">
                        <label className="font-semibold" htmlFor="">
                           Berangkat
                        </label>
                        <input className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring focus:ring-sky-200" type="date" />
                     </div>
                     <div className="w-1/5">
                        <label className="font-semibold" htmlFor="">
                           Pulang
                        </label>
                        <input className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring focus:ring-sky-200" type="date" />
                     </div>
                  </div>
                  <div className="mb-5 flex flex-wrap">
                     <div className="w-[55%]">
                        <label className="font-semibold" htmlFor="">
                           Penumpang
                        </label>
                        <input list="penumpang" className="mt-1.5 block w-full rounded-md focus:border-sky-400 focus:outline-none focus:ring  focus:ring-sky-200" value={input.penumpang} onChange={penumForm} type="text" />
                        <datalist id="penumpang">
                           <option value="1 Dewasa" />
                           <option value="2 Dewasa" />
                           <option value="1 Dewasa, 1 Anak" />
                           <option value="1 Dewasa, 1 Bayi" />
                           <option value="1 Dewasa, 1 Anak, 1 Bayi" />
                           <option value="2 Dewasa, 2 Anak, 1 Bayi" />
                           <option value="1 Dewasa, 2 Anak, 1 Bayi" />
                           <option value="1 Dewasa, 2 Anak, 2 Bayi" />
                           <option value="2 Dewasa, 2 Anak, 2 Bayi" />
                        </datalist>
                     </div>
                     <div className="flex w-[45%] flex-wrap justify-end place-self-end">
                        <a href={login ? "/searchPenerbangan?login=true" : "/searchPenerbangan"}>
                           <button className="flex items-center gap-x-2 rounded-xl bg-emerald-500 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-emerald-700">
                              <BiSearch className="text-xl" />
                              Cari Penerbangan
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
            </section>

            {/* Card Promo */}
            <section>
               <div className="mb-10">
                  <div className="mb-5 flex justify-evenly">
                     <div className="max-w-xs rounded-lg bg-white text-center">
                        <img className="h-1/2 w-full rounded-t-lg" src="dompet.jpg" alt="" />
                        <div className="-mb-3 p-6 py-5">
                           <h5 className="mb-2 text-xl font-bold text-gray-900">Harga Lebih Murah</h5>
                           <p className="mt-3 font-poppins text-base text-gray-600">Dengan harga yang jangkau, kamu mendapat hotel yang kamu inginkan.</p>
                        </div>
                     </div>
                     <div className="max-w-xs rounded-lg bg-white text-center">
                        <img className="h-1/2 w-full rounded-t-lg" src="card.jpg" alt="" />
                        <div className="-mb-3 p-6 py-5">
                           <h5 className="mb-2 text-xl font-bold text-gray-900">Pembayaran Simple</h5>
                           <p className="mt-3 font-poppins text-base text-gray-600">
                              Ada banyak cara untuk membayar sesuai yang kamu inginkan. Ada pilihan pembayaran via bank transfer, ATM transfer, Virtual Account (VA), kartu debit online, maupun kartu kredit.{" "}
                           </p>
                        </div>
                     </div>
                     <div className="max-w-xs rounded-lg bg-white text-center">
                        <img className="h-1/2 w-full rounded-t-lg" src="support.jpg" alt="" />
                        <div className="-mb-3 p-6 py-5">
                           <h5 className="mb-2 text-xl font-bold text-gray-900">Support Terbaik</h5>
                           <p className="mt-3 font-poppins text-base text-gray-600">Melalui pelayanan 24/7 Customer Care, kami akan selalu ada buat kamu. Dapatkan bantuan untuk pemesanan hotel dan tiketmu dengan pelayanan 24/7 Customer Care</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-evenly">
                     <div className="max-w-xs rounded-lg bg-white text-center">
                        <img className="h-1/2 w-full rounded-t-lg" src="diskon.jpg" alt="" />
                        <div className="-mb-3 p-6 py-5">
                           <h5 className="mb-2 text-xl font-bold text-gray-900">Banyak Promo Spesial</h5>
                           <p className="mt-3 font-poppins text-base text-gray-600">Banyak promo untuk tiket & hotel kesayanganmu. Dapatkan diskon harga terbaik agar budget liburan kamu semakin hemat.</p>
                        </div>
                     </div>
                     <div className="max-w-xs rounded-lg bg-white text-center">
                        <img className="h-1/2 w-full rounded-t-lg" src="ticket.jpg" alt="" />
                        <div className="-mb-3 p-6 py-5">
                           <h5 className="mb-2 text-xl font-bold text-gray-900">Mudah Pesan Tiket</h5>
                           <p className="mt-3 font-poppins text-base text-gray-600">
                              Pesan tiket sekaligus hotel dengan mudah dan cepat. Tidak perlu risau, hanya dengan satu sentuhan jari, tiket dan hotel yang kamu butuhkan bisa didapatkan dengan mudah.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <div className="my-10 border-2 bg-black"></div>

            {/* Kota */}
            <section>
               <div className="mx-auto mb-10 w-full">
                  <div>
                     <h2 className="mb-4 text-3xl font-bold">Kota Populer</h2>
                  </div>
                  <div className="mb-7 flex justify-between">
                     <a href="#" className="kotak-kiri-atas relative before:content-['Bali']">
                        <img className="h-64" src="HBali.png" alt="" />
                     </a>
                     <a href="#" className="kotak-kiri-atas relative before:content-['Jakarta']">
                        <img className="h-64" src="HJakarta.png" alt="" />
                     </a>
                     <a href="#" className="kotak-kiri-atas relative before:content-['Yogyakarta']">
                        <img className="h-64" src="HYogyakarta.png" alt="" />
                     </a>
                  </div>
                  <div className="flex justify-between">
                     <a href="#" className="kotak-kiri-atas relative before:content-['Banjarmasin']">
                        <img className="h-64" src="HBanjarmasin.png" alt="" />
                     </a>
                     <a href="#" className="kotak-kiri-atas relative before:content-['Aceh']">
                        <img className="h-64" src="HAceh.png" alt="" />
                     </a>
                     <a href="#" className="kotak-kiri-atas relative before:content-['Papua']">
                        <img className="h-64" src="HPapua.png" alt="" />
                     </a>
                  </div>
               </div>
            </section>
         </div>

         <section>
            <Footer />
         </section>
      </>
   );
}
