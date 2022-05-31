/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import { BiSearch } from "react-icons/bi";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/router";

export default function SearchPenerbangan() {
   const [isOpen, setIsOpen] = useState(false);
   const [login, setLogin] = useState(false);
   const router = useRouter();
   let data = router.query.login;

   function closeModal() {
      setIsOpen(false);
   }

   function openModal() {
      setIsOpen(true);
   }

   useEffect(() => {
      if (data) {
         let akhir = data.toLowerCase() === "true" ? true : false;
         if (akhir === true) {
            setLogin(true);
         }
      }
   }, [data]);

   return (
      <>
         <Head>
            <title>Cari Tiket</title>
         </Head>
         {login ? <NavbarLogin /> : <Navbar />}

         <div className="container !font-sans">
            <div className="mt-10 flex w-full justify-between rounded-md bg-slate-200/50 p-5">
               <div>
                  <h2 className="font-barlow text-2xl font-bold tracking-tight">Jakarta (Indonesia) - Surabaya (Indonesia)</h2>
                  <h3 className="text-slate-800">Minggu, 29 Mei 2022 | 2 Dewasa, 0 Anak, 0 Bayi</h3>
               </div>
               <div>
                  <button className="flex items-center gap-x-2 rounded-xl bg-emerald-500 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-emerald-700">
                     <BiSearch className="text-xl" />
                     Ganti Penerbangan
                  </button>
               </div>
            </div>

            <div className="mt-4 flex flex-col gap-y-3">
               <div className="flex justify-between rounded-lg border px-4 py-2 shadow-md">
                  <div className="flex w-full items-center justify-between gap-x-7">
                     <div>
                        <img src="Partners/Garuda.jpg" className="h-24 w-28" alt="" />
                     </div>
                     <div className="flex gap-x-3">
                        <div className="flex flex-col items-center gap-y-1">
                           <h3 className="font-barlow text-2xl">Jakarta, Indonesia</h3>
                           <h3 className="text-xl text-slate-800/90">13:30</h3>
                        </div>
                        <HiOutlineArrowNarrowRight className="text-4xl text-slate-800/90" />
                        <div className="flex flex-col items-center gap-y-1">
                           <h3 className="font-barlow text-2xl">Surabaya, Indonesia</h3>
                           <h3 className="text-xl text-slate-800/90">15:00</h3>
                        </div>
                     </div>
                     <div className="flex flex-col items-center gap-y-2">
                        <div className="text-xl font-medium">
                           <span className="text-yellow-500">IDR 1.085.380</span>
                           <span className="text-slate-700">/org</span>
                        </div>
                        <div>
                           <button className="rounded-xl bg-yellow-500 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-yellow-600" onClick={openModal} type="button">
                              Pilih Penerbangan
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex justify-between rounded-lg border px-4 py-2 shadow-md">
                  <div className="flex w-full items-center justify-between gap-x-7">
                     <div>
                        <img src="Partners/AirAsia.jpg" className="h-24 w-28" alt="" />
                     </div>
                     <div className="flex gap-x-3">
                        <div className="flex flex-col items-center gap-y-1">
                           <h3 className="font-barlow text-2xl">Jakarta, Indonesia</h3>
                           <h3 className="text-xl text-slate-800/90">12:30</h3>
                        </div>
                        <HiOutlineArrowNarrowRight className="text-4xl text-slate-800/90" />
                        <div className="flex flex-col items-center gap-y-1">
                           <h3 className="font-barlow text-2xl">Surabaya, Indonesia</h3>
                           <h3 className="text-xl text-slate-800/90">14:00</h3>
                        </div>
                     </div>
                     <div className="flex flex-col items-center gap-y-2">
                        <div className="text-xl font-medium">
                           <span className="text-yellow-500">IDR 1.085.380</span>
                           <span className="text-slate-700">/org</span>
                        </div>
                        <div>
                           <button className="rounded-xl bg-yellow-500 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-yellow-600" onClick={openModal} type="button">
                              Pilih Penerbangan
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex justify-between rounded-lg border px-4 py-2 shadow-md">
                  <div className="flex w-full items-center justify-between gap-x-7">
                     <div>
                        <img src="Partners/LionAir.jpg" className="h-24 w-28" alt="" />
                     </div>
                     <div className="flex gap-x-3">
                        <div className="flex flex-col items-center gap-y-1">
                           <h3 className="font-barlow text-2xl">Jakarta, Indonesia</h3>
                           <h3 className="text-xl text-slate-800/90">13:00</h3>
                        </div>
                        <HiOutlineArrowNarrowRight className="text-4xl text-slate-800/90" />
                        <div className="flex flex-col items-center gap-y-1">
                           <h3 className="font-barlow text-2xl">Surabaya, Indonesia</h3>
                           <h3 className="text-xl text-slate-800/90">14:30</h3>
                        </div>
                     </div>
                     <div className="flex flex-col items-center gap-y-2">
                        <div className="text-xl font-medium">
                           <span className="text-yellow-500">IDR 1.085.380</span>
                           <span className="text-slate-700">/org</span>
                        </div>
                        <div>
                           <button className="rounded-xl bg-yellow-500 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-yellow-600" onClick={openModal} type="button">
                              Pilih Penerbangan
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               {login ? (
                  <Transition appear show={isOpen} as={Fragment}>
                     <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                           <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                           <div className="flex min-h-full items-center justify-center p-4 text-center">
                              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                 <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-gray-900">
                                       Billing Details
                                    </Dialog.Title>
                                    <div className="mt-4">
                                       <div className="w-full">
                                          <h4 className="font-bold text-slate-800">Nama</h4>
                                          <h3 className="font-bold text-slate-600/80">Febrian</h3>
                                       </div>
                                       <div className="mt-3 w-full">
                                          <h4 className="font-bold text-slate-800">Email</h4>
                                          <h3 className="font-bold text-slate-600/80">febrian@gmail.com</h3>
                                       </div>
                                       <div className="mt-3 w-full">
                                          <h4 className="font-bold text-slate-800">No Telepon</h4>
                                          <h3 className="font-bold text-slate-600/80">0816218212</h3>
                                       </div>
                                    </div>

                                    <Dialog.Title as="h3" className="mt-7 text-xl font-semibold leading-6 text-gray-900">
                                       Billing Items
                                    </Dialog.Title>
                                    <div className="mt-3 w-full">
                                       <h4 className="font-bold text-slate-800">1x Ticket Pesawat Jakarta - Bandung</h4>
                                    </div>
                                    <div className="mt-3 w-full text-right">
                                       <button className="rounded-xl bg-emerald-500 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-emerald-600">
                                          <a href="/success">Confirm</a>
                                       </button>
                                    </div>
                                 </Dialog.Panel>
                              </Transition.Child>
                           </div>
                        </div>
                     </Dialog>
                  </Transition>
               ) : (
                  <Transition appear show={isOpen} as={Fragment}>
                     <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                           <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                           <div className="flex min-h-full items-center justify-center p-4 text-center">
                              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                 <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                       as="h3"
                                       className="text-center text-xl font-semibold
                                     leading-6 text-gray-900"
                                    >
                                       Pastikan Kamu Login Dahulu Untuk Melanjuti Pembayaran Ini
                                    </Dialog.Title>
                                 </Dialog.Panel>
                              </Transition.Child>
                           </div>
                        </div>
                     </Dialog>
                  </Transition>
               )}
            </div>
         </div>
      </>
   );
}
