/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import NavbarSimple from "../components/NavbarSimple";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
   return (
      <>
         <Head>
            <title>Register Page</title>
         </Head>
         <NavbarSimple />

         <section>
            <div className="container">
               <div className="mx-auto mt-24 w-full max-w-5xl">
                  <div className="rounded-lg border p-8 shadow-xl">
                     <h3 className="text-center font-quando text-2xl font-semibold">Register</h3>

                     <form>
                        <div className="flex flex-col gap-y-2">
                           <div>
                              <Label htmlFor="username">Username</Label>
                              <Input type="text" id="username" className="mt-1" />
                           </div>
                           <div>
                              <Label htmlFor="primary">Email atau No Ponsel</Label>
                              <Input type="text" id="primary" className="mt-1" />
                           </div>
                           <div>
                              <Label htmlFor="password">Password</Label>
                              <Input type="password" id="password" className="mt-1" />
                           </div>
                           <div>
                              <Label htmlFor="confirmPassword">Confirm Password</Label>
                              <Input type="password" id="confirmPassword" className="mt-1" />
                           </div>
                        </div>

                        <div className="my-7 mx-auto flex w-full max-w-sm justify-center">
                           <button className="w-1/2 rounded-lg bg-sky-500 py-1.5 font-quando text-base text-white hover:bg-sky-600">Register</button>
                        </div>
                     </form>

                     <div className="mt-4 flex flex-col gap-y-4">
                        <button className="relative mx-auto flex w-full max-w-lg items-center justify-center rounded-full border border-slate-700 px-5 py-2 text-sm font-medium transition duration-300 hover:bg-slate-200/60 focus:outline-none">
                           <FcGoogle className="absolute left-0 translate-x-2 text-3xl" />
                           <span className="font-poppins text-[17px] font-light tracking-tighter">Masuk dengan Google</span>
                        </button>
                        <button className="relative mx-auto flex w-full max-w-lg items-center justify-center rounded-full border border-slate-700 px-5 py-2 text-sm font-medium transition duration-300 hover:bg-sky-100/80 focus:outline-none">
                           <img alt="facebook" src="facebook.svg" className="absolute left-0 w-[34px] translate-x-[6px]" />
                           <span className="font-poppins text-[17px] font-light tracking-tighter">Masuk dengan Facebook</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div id="footer2" className="absolute bottom-0 w-full bg-neutral-800 py-4 text-center shadow-lg">
            <span className="font-quando text-base text-white">&copy;Copyright 2022 QuickTick. All Right Reserved</span>
         </div>
      </>
   );
}
