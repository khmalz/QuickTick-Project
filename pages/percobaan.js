/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

export default function percobaan() {
   const gambar = ["iklan1.png", "iklan2.png", "iklan3.png", "iklan4.png", "iklan5.png"];

   return (
      <>
         <Head>
            <title>Percobaan Pages</title>
         </Head>
         <div className="mx-auto mt-10 flex w-full flex-nowrap justify-center gap-x-4 border px-20">
            <Swiper slidesPerView={3} modules={[Navigation, Autoplay]} autoplay={{ delay: 2000 }} spaceBetween={50}>
               <SwiperSlide>
                  <img src="iklan1.png" alt="" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="iklan2.png" alt="" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="iklan3.png" alt="" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="iklan4.png" alt="" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="iklan5.png" alt="" />
               </SwiperSlide>
            </Swiper>
         </div>
      </>
   );
}
