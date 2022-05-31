import React from "react";

export default function FooterLink({ href, className, children }) {
   return (
      <a href={href} className={`${className ? className : ""} font-bold opacity-70 hover:opacity-95`}>
         {children}
      </a>
   );
}
