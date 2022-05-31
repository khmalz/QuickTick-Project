/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Card() {
   return (
      <div className="min-w-sm overflow-hidden rounded border shadow-lg">
         <img className="h-52 w-full" src="https://source.unsplash.com/random/300x300" alt="Sunset in the mountains" />
         <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
            <p className="text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
         </div>
         <div className="px-6 pt-4 pb-2">
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">#photography</span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">#travel</span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
         </div>
      </div>
   );
}
