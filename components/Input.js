import React from "react";

export default function Input({ className, ...props }) {
   return (
      <input
         {...props}
         autoComplete="off"
         className={`${
            className ? className : ""
         } w-full rounded-lg border border-slate-400 font-quando text-sm placeholder:font-quando placeholder:text-sm placeholder:opacity-75 focus:border-slate-500 focus:outline-none focus:ring focus:ring-slate-300`}
      />
   );
}
