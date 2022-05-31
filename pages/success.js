import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function success() {
   return (
      <>
         <Head>
            <title>Success Page</title>
         </Head>
         <div className="flex min-h-screen items-center">
            <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-y-5 rounded-2xl border py-5 px-10 text-center shadow-lg">
               <div className="flex flex-col items-center">
                  <div className="rounded-full text-[9rem] text-blue-600">
                     <AiOutlineCheckCircle />
                  </div>
                  <h2 className="font-barlow text-3xl font-medium text-blue-600">Payment Successfull</h2>
               </div>
               <div className="flex flex-col gap-y-2 font-barlow text-slate-600/95">
                  <h3>Terimakasih Sudah Memesan dan Melakukan Pembayaran Layanan Kami</h3>
                  <h5>Pesanan Kamu Sudah Masuk ke Laporan, Mau Lihat?</h5>
               </div>
               <div className="flex justify-center gap-x-4">
                  <Link
                     href={{
                        pathname: "/order",
                        query: "login=true",
                     }}
                  >
                     <a className="rounded-lg bg-emerald-500 py-2 px-5 font-barlow text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-500">Lihat Order Kamu</a>
                  </Link>
                  <Link
                     href={{
                        pathname: "/",
                        query: "login=true",
                     }}
                  >
                     <a className="rounded-lg bg-indigo-500 py-2 px-5 font-barlow text-sm text-white hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500">Kembali ke Home</a>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
}
