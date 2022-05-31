import React from "react";

export default function Label({ className, children, ...props }) {
   return (
      <label {...props} className={`${className ? className : ""} font-quando text-base font-semibold text-slate-800`}>
         {children}
      </label>
   );
}
