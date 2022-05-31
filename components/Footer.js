/* eslint-disable @next/next/no-img-element */
import React from "react";
import FooterLink from "./FooterLink";

export default function Footer() {
   return (
      <div className="py-50 w-full bg-neutral-800 px-10 text-white">
         <div className="container">
            <div className="grid grid-cols-4 pt-12 pb-10">
               <div className="flex w-full flex-col gap-y-3">
                  <img src="QT.png" className="w-1/3" alt="" />
                  <h3 className="my-2 ml-3 font-barlow text-2xl font-semibold">Follow US</h3>
                  <div className="flex gap-3">
                     <a href="https://www.instagram.com/akml.17_/" target="_blank" rel="noreferrer">
                        <img src="Instagram.png" className="-ml-2 w-12" alt="My Instagram" />
                     </a>
                     <a href="https://twitter.com/akml1223" target="_blank" rel="noreferrer">
                        <img src="Twitter.png" className="-ml-2 w-12" alt="My Twitter" />
                     </a>
                     <a href="https://github.com/khmalz" target="_blank" rel="noreferrer">
                        <img src="Github.png" className="-ml-2 w-12" alt="My Github" />
                     </a>
                  </div>
               </div>

               <div>
                  <h1 className="text-xl font-bold">Tentang QuickTick</h1>
                  <div className="mt-4 flex flex-col gap-y-4">
                     <FooterLink href="/about">About Us</FooterLink>
                     <FooterLink href="/contact">Contact Us</FooterLink>
                     <FooterLink href="/carrier">Carier</FooterLink>
                  </div>
               </div>

               <div>
                  <h1 className="text-xl font-bold">Produk</h1>
                  <div className="mt-4 flex flex-col gap-y-4">
                     <FooterLink href="/pesawat">Tiket Pesawat</FooterLink>
                     <FooterLink href="/hotel">Hotel</FooterLink>
                     <FooterLink href="/kereta">Kereta Api</FooterLink>
                     <FooterLink href="/bus">Bus</FooterLink>
                     <FooterLink href="/pulsainternet">Pulsa & Internet</FooterLink>
                  </div>
               </div>

               <div>
                  <h1 className="text-xl font-bold">Lainnya</h1>
                  <div className="mt-4 flex flex-col gap-y-4">
                     <FooterLink href="/privacypolicy">Privacy Policy</FooterLink>
                     <FooterLink href="/termscond">Terms & Conditions</FooterLink>
                     <FooterLink href="/faq">FAQ</FooterLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
