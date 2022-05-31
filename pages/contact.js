/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useState, useEffect } from "react";
import NavbarSimple from "../components/NavbarSimple";
import { HiOutlineMail } from "react-icons/hi";
import Label from "../components/Label";
import Input from "../components/Input";

export default function Contact() {
   const [text, setText] = useState("");

   const munculKotak1 = () => {
      setText("gmail");
      const buttonGmail = document.getElementById("button-gmail");
      buttonGmail.classList.remove("gmail-awal");
      buttonGmail.classList.add("gmail-akhir");
      const footer2 = document.getElementById("footer2");
      footer2.classList.add("mt-36");
      footer2.classList.remove("absolute");
      footer2.classList.remove("top-full");
   };

   const munculKotak2 = () => {
      setText("pesan");
      const buttonPesan = document.getElementById("button-pesan");
      buttonPesan.classList.remove("pesan-awal");
      buttonPesan.classList.add("pesan-akhir");
      const footer2 = document.getElementById("footer2");
      footer2.classList.add("mt-36");
      footer2.classList.remove("absolute");
      footer2.classList.remove("top-full");
   };

   useEffect(() => {
      if (text !== "gmail" && text !== "") {
         const buttonGmail = document.getElementById("button-gmail");

         buttonGmail.classList.remove("gmail-akhir");
         buttonGmail.classList.add("gmail-awal");
      } else if (text !== "pesan" && text !== "") {
         const buttonPesan = document.getElementById("button-pesan");

         buttonPesan.classList.remove("pesan-akhir");
         buttonPesan.classList.add("pesan-awal");
      }
   }, [text]);

   return (
      <>
         <Head>
            <title>Contact Us</title>
         </Head>

         <NavbarSimple />

         <section className="mt-10 w-full text-center">
            <div className="flex flex-col justify-center gap-y-5">
               <h1 className="font-quando text-4xl font-bold">Contact Us</h1>
               <div className="flex flex-col gap-y-3 font-quando text-base text-slate-700">
                  <p>Have any question ?</p>
                  <p>Don&lsquo;t be shy, just ask. We&apos;d love to hear from you</p>
               </div>
            </div>
         </section>

         <section>
            <div className="container mt-10">
               <div className="flex w-full items-center justify-evenly">
                  <div className="group flex w-full max-w-sm flex-col items-center gap-y-2 rounded-b-md rounded-t-lg border-t-8 border-slate-200 border-t-rose-600 bg-slate-50 px-16 pt-5 pb-7 shadow-md transition duration-300">
                     <HiOutlineMail className="text-8xl" />
                     <div>
                        <h2 className="my-3 text-slate-600">Lets Email US</h2>
                     </div>
                     <button id="button-gmail" onClick={munculKotak1} className="gmail-awal rounded-full border border-rose-600 px-20 py-2 text-sm font-semibold transition duration-300 focus:outline-none">
                        Submit a Text
                     </button>
                  </div>

                  <div className="group flex w-full max-w-sm flex-col items-center gap-y-2 rounded-b-md rounded-t-lg border-t-8 border-slate-200 border-t-teal-500 bg-slate-50 px-16 pt-5 pb-7 shadow-md transition duration-300">
                     <img width={96} src="text.jpg" alt="" />
                     <div>
                        <h2 className="my-3 text-slate-600">Lets Email US</h2>
                     </div>
                     <button id="button-pesan" onClick={munculKotak2} className="pesan-awal rounded-full border border-teal-400 px-20 py-2 text-sm font-semibold  transition duration-300 focus:outline-none">
                        Submit a Text
                     </button>
                  </div>
               </div>
            </div>
         </section>

         {text === "gmail" ? (
            <>
               <section>
                  <div className="container mb-20">
                     <div className="mt-12 w-full overflow-hidden rounded-lg border-2 p-5 shadow-xl">
                        <form>
                           <div className="w-full">
                              <Label htmlFor="firstName">Username</Label>
                              <div className="mt-2 flex gap-x-10">
                                 <Input type="text" id="firstName" className="capitalize" placeholder="First Name" />
                                 <Input type="text" id="secondName" className="capitalize" placeholder="Last Name" />
                              </div>
                           </div>
                           <div className="mt-5 w-full">
                              <Label htmlFor="email">Email</Label>
                              <Input type="email" id="email" className="mt-2 capitalize" placeholder="What's Your Email?" />
                           </div>
                           <div className="mt-5 w-full">
                              <Label htmlFor="text">Subject</Label>
                              <Input type="text" id="text" className="mt-2 capitalize" placeholder="The Title" />
                           </div>
                           <div className="mt-5 w-full">
                              <Label htmlFor="message">Message</Label>
                              <textarea
                                 name="message"
                                 className="mt-2 w-full resize-y rounded-lg border border-slate-400 font-quando text-sm capitalize placeholder:font-quando placeholder:text-sm placeholder:opacity-75 focus:border-slate-500 focus:outline-none focus:ring focus:ring-slate-300"
                                 id="message"
                                 cols="30"
                                 rows="10"
                                 placeholder="Your message..."
                              />
                           </div>

                           <button className="float-right mt-2 rounded bg-rose-600 px-6 py-0.5 font-poppins text-lg font-medium text-white hover:bg-red-700">Send</button>
                        </form>
                     </div>
                  </div>
               </section>{" "}
            </>
         ) : null}

         {text === "pesan" ? (
            <>
               <section>
                  <div className="container mb-20">
                     <div className="mt-12 w-full overflow-hidden rounded-lg border-2 p-5 shadow-xl">
                        <form>
                           <div className="w-full">
                              <Label htmlFor="name">Username</Label>
                              <Input type="text" id="name" className="mt-2 capitalize" placeholder="Your Name" />
                           </div>
                           <div className="mt-5 w-full">
                              <Label htmlFor="email">Email</Label>
                              <Input type="email" id="email" className="mt-2 capitalize" placeholder="What's Your Email?" />
                           </div>
                           <div className="mt-5 w-full">
                              <Label htmlFor="text">Subject</Label>
                              <Input type="text" id="text" className="mt-2 capitalize" placeholder="The Title" />
                           </div>
                           <div className="mt-5 w-full">
                              <Label htmlFor="message">Message</Label>
                              <textarea
                                 name="message"
                                 className="mt-2 w-full resize-y rounded-lg border border-slate-400 font-quando text-sm capitalize placeholder:font-quando placeholder:text-sm placeholder:opacity-75 focus:border-slate-500 focus:outline-none focus:ring focus:ring-slate-300"
                                 id="message"
                                 cols="30"
                                 rows="10"
                                 placeholder="Your message..."
                              />
                           </div>

                           <button className="float-right mt-2 rounded bg-teal-400 px-6 py-0.5 font-poppins text-lg font-medium text-white hover:bg-teal-500">Send</button>
                        </form>
                     </div>
                  </div>
               </section>{" "}
            </>
         ) : null}

         <div id="footer2" className="absolute top-full w-full bg-neutral-800 py-4 text-center shadow-lg">
            <span className="font-quando text-base text-white">&copy;Copyright 2022 QuickTick. All Right Reserved</span>
         </div>
      </>
   );
}
