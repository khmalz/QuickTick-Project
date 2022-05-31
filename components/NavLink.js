import React from "react";

export default function NavLink({ className, children, ...props }) {
   return (
      <a
         {...props}
         className={`${
            className ? className : ""
         } block border-b border-gray-100 py-2 pr-4 pl-3 text-lg font-bold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-sky-600 md:dark:hover:bg-transparent md:dark:hover:text-white`}
      >
         {children}
      </a>
   );
}
