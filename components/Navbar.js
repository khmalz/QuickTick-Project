/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React, { Fragment } from "react";
import NavLink from "./NavLink";

export default function Navbar() {
   return (
      <div className="border-b-2">
         <div className="hidden py-3 md:block">
            <div>
               <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
                  <div className="container flex flex-wrap items-center justify-between">
                     <Link href="/">
                        <a className="flex items-center">
                           {/* eslint-disable-next-line @next/next/no-img-element */}
                           <img src="QT.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                           <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">QuickTick</span>
                        </a>
                     </Link>
                     <button
                        data-collapse-toggle="mobile-menu"
                        type="button"
                        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                     >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                        <svg className="hidden h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                           ></path>
                        </svg>
                     </button>
                     <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="mt-4 flex flex-col items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                           <li>
                              <NavLink href="/about" aria-current="page">
                                 About Us
                              </NavLink>
                           </li>
                           <li>
                              <NavLink href="/order">Cek Order</NavLink>
                           </li>
                           <li>
                              <NavLink href="/login">Login</NavLink>
                           </li>
                           <li>
                              <a
                                 href="/register"
                                 className="inline-block rounded border-b border-gray-100 bg-sky-500 py-0.5 pr-2 pl-1.5 text-lg font-bold text-slate-200 hover:bg-sky-600 dark:border-gray-700 dark:text-gray-400 md:border-0 md:hover:text-white md:dark:hover:text-white"
                              >
                                 Register
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
}
