/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";

export default function eTicket() {
   return (
      <>
         <Head>
            <title>E-Ticket</title>
         </Head>
         <div className="flex min-h-screen items-center justify-center bg-slate-900">
            <div className="w-full max-w-4xl rounded-lg border bg-white px-5 pt-4 pb-7 shadow">
               <div>
                  <h1 className="font-barlow text-2xl font-bold">E-Ticket</h1>
               </div>

               <div className="mt-10 flex h-52 justify-between">
                  <div>
                     <img src="Partners/Garuda.jpg" className="h-[105px] w-40" alt="" />
                     <h5 className="font-bold text-slate-800/90">GA-381</h5>
                     <h5 className="font-bold text-slate-800/90">Subclass Economy</h5>
                  </div>
                  <div>
                     <h3 className="font-barlow text-2xl font-semibold">Saturday, 12 March 2022</h3>
                     <h4 className="mt-3 flex items-center gap-x-10 font-barlow">
                        <span className="text-2xl font-bold">13:30</span>
                        <span className="text-lg font-bold text-slate-800/90">Jakarta, Indonesia</span>
                     </h4>
                     <h4 className="mt-3 flex items-center gap-x-10 font-barlow">
                        <span className="text-2xl font-bold">15:10</span>
                        <span className="text-lg font-bold text-slate-800/90">Surabaya, Indonesia</span>
                     </h4>
                  </div>
                  <div>
                     <img src="qr-code.png" className="w-40" alt="" />
                  </div>
               </div>

               <div>
                  <div className="mt-6 grid grid-cols-4 place-items-center gap-x-3 font-bold">
                     <h3>No.</h3>
                     <h3>Passenger</h3>
                     <h3>Route</h3>
                     <h3>Flight Facilities</h3>
                  </div>
                  <div className="mt-1 grid grid-cols-4 place-items-center gap-x-3 font-bold text-slate-800/90">
                     <h3>1</h3>
                     <h3>Febrian Pratama (Dewasa)</h3>
                     <h3>JKT - SBY</h3>
                     <h3>18 Kg</h3>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
