import Link from "next/link";
import React from "react";

export default function NavbarSimple() {
   return (
      <div className="w-full py-3 shadow-lg">
         <Link href="/">
            <a className="flex items-center justify-center">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="QT.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
               <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">QuickTick</span>
            </a>
         </Link>
      </div>
   );
}
