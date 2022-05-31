/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React, { Fragment } from "react";
import NavLink from "./NavLink";
import { Menu, Transition } from "@headlessui/react";

export default function Navbar() {
   return (
      <div className="border-b-2">
         <div className="hidden py-3 md:block">
            <div>
               <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
                  <div className="container flex flex-wrap items-center justify-between">
                     <Link
                        href={{
                           pathname: "/",
                           query: "login=true",
                        }}
                     >
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
                           <li className="block border-b border-gray-100 py-2 pr-4 pl-3 text-lg font-bold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-sky-600 md:dark:hover:bg-transparent md:dark:hover:text-white">
                              <Link
                                 href={{
                                    pathname: "/about",
                                    query: "login=true",
                                 }}
                                 aria-current="page"
                              >
                                 About Us
                              </Link>
                           </li>
                           <li className="block border-b border-gray-100 py-2 pr-4 pl-3 text-lg font-bold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-sky-600 md:dark:hover:bg-transparent md:dark:hover:text-white">
                              <Link
                                 href={{
                                    pathname: "/order",
                                    query: "login=true",
                                 }}
                              >
                                 Cek Order
                              </Link>
                           </li>
                           <li>
                              <Menu as="div" className="relative">
                                 <Menu.Button className="flex items-center gap-x-2 text-white hover:bg-transparent">
                                    <img src="pp.jpg" className="h-8 w-9 rounded-full border-2 p-1" alt="" />
                                 </Menu.Button>
                                 <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                 >
                                    <Menu.Items as="div" className="group absolute right-0 top-0 z-10 mt-9 w-48 cursor-pointer overflow-hidden rounded-lg border-2 bg-white shadow-sm">
                                       <a href="/" className="block px-4 py-3 text-sm text-gray-700 hover:text-black group-hover:bg-gray-200">
                                          Log Out
                                       </a>
                                    </Menu.Items>
                                 </Transition>
                              </Menu>
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
