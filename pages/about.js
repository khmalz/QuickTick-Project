/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import { useRouter } from "next/router";

export default function About() {
   const [login, setLogin] = useState(false);
   const router = useRouter();
   let data = router.query.login;

   useEffect(() => {
      if (data) {
         let akhir = data.toLowerCase() === "true" ? true : false;
         if (akhir === true) {
            setLogin(true);
         }
      }
   }, [data]);

   return (
      <>
         <Head>
            <title>About US</title>
         </Head>
         {login ? <NavbarLogin /> : <Navbar />}
         <div className="w-full">
            <img src="Hero.jpg" className="w-full" alt="Hero Image" />
         </div>

         <section className="mt-10">
            <h2 className="text-center font-quando text-3xl">About QuickTick</h2>

            <div className="container">
               <div className="mt-10 flex w-full flex-wrap">
                  <div className="flex w-1/2 justify-center">
                     <img src="about.jpg" className="w-full max-w-xl rounded-3xl" alt="About Image" />
                  </div>
                  <div className="flex w-1/2 items-center justify-center text-justify">
                     <p className="text-lg tracking-wide">
                        Eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim
                        facilisis gravida. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum exercitationem tempore corporis ad corrupti explicabo dolores neque reiciendis accusamus reprehenderit molestiae vel mollitia quisquam,
                        error soluta, earum nisi ex.
                     </p>
                  </div>
               </div>
               <div className="my-16 flex w-full flex-wrap">
                  <p className="text-justify text-lg tracking-wide">
                     Sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames
                     ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi
                     vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna.
                  </p>
                  <p className="mt-2.5 text-justify text-lg tracking-wide">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maiores sed voluptatem ea! Minus consequuntur harum voluptates placeat sed minima ratione quas libero accusamus aperiam, asperiores impedit voluptatum vero totam in
                     cupiditate nemo facere consequatur sunt! Harum assumenda in fugiat!
                  </p>
               </div>

               <div className="mt-14 flex w-full flex-wrap">
                  <div className="flex w-1/2 flex-col items-center justify-center font-quando text-3xl font-semibold">
                     <span>You Can Find Our Network</span>
                     <span>in All Cities in Indonesia</span>
                  </div>
                  <div className="w-1/2">
                     <img src="peta.png" className="rounded shadow-xl" alt="" />
                  </div>
               </div>
            </div>
         </section>

         <section className="mt-10">
            <h2 className="text-center font-quando text-3xl font-semibold">Our Partners</h2>

            <div className="container">
               <div className="flex w-full flex-wrap">
                  <div className="mt-8 flex w-full justify-center gap-x-8">
                     <img className="w-32" src="Partners/KeretaApi.jpg" alt="" />
                     <img className="w-32" src="Partners/Oyo.jpg" alt="" />
                     <img className="w-32" src="Partners/IHG.jpg" alt="" />
                     <img className="w-32" src="Partners/AirAsia.jpg" alt="" />
                     <img className="w-32" src="Partners/Garuda.jpg" alt="" />
                     <img className="w-32" src="Partners/AirAstana.jpg" alt="" />
                     <img className="w-32" src="Partners/LionAir.jpg" alt="" />
                  </div>
                  <div className="mt-8 flex w-full justify-center gap-x-8">
                     <img className="w-32" src="Partners/AF.jpg" alt="" />
                     <img className="w-32" src="Partners/Citilink.jpg" alt="" />
                     <img className="w-32" src="Partners/RoyalBrunei.jpg" alt="" />
                     <img className="w-32" src="Partners/NamAir.jpg" alt="" />
                     <img className="w-32" src="Partners/ThaiLionAir.jpg" alt="" />
                     <img className="w-32" src="Partners/SwissInternational.jpg" alt="" />
                     <img className="w-32" src="Partners/Marriot.jpg" alt="" />
                  </div>
                  <div className="mt-8 flex w-full justify-center gap-x-8">
                     <img className="w-32" src="Partners/AirCanada.jpg" alt="" />
                     <img className="w-32" src="Partners/BritishAirways.jpg" alt="" />
                     <img className="w-32" src="Partners/SriwijayaAir.jpg" alt="" />
                     <img className="w-32" src="Partners/ANA.jpg" alt="" />
                     <img className="w-32" src="Partners/BlueBird.jpg" alt="" />
                     <img className="w-32" src="Partners/FireFLy.jpg" alt="" />
                     <img className="w-32" src="Partners/AgraMAs.jpg" alt="" />
                  </div>
               </div>
            </div>
         </section>

         <section className="mt-12 mb-7">
            <h2 className="text-center font-quando text-2xl font-semibold">Payment Partners</h2>

            <div className="container">
               <div className="flex w-full flex-wrap">
                  <div className="mt-8 flex w-full justify-center gap-x-8">
                     <img className="w-32" src="Partners/BCA.jpg" alt="" />
                     <img className="w-32" src="Partners/Visa.jpg" alt="" />
                     <img className="w-32" src="Partners/MasterCard.jpg" alt="" />
                     <img className="w-32" src="Partners/Mandiri.jpg" alt="" />
                     <img className="w-32" src="Partners/BRI.jpg" alt="" />
                  </div>
                  <div className="mt-8 flex w-full justify-center gap-x-8">
                     <img className="w-32" src="Partners/Alfamidi.jpg" alt="" />
                     <img className="w-32" src="Partners/Alfamart.jpg" alt="" />
                     <img className="w-32" src="Partners/Indomaret.jpg" alt="" />
                     <img className="w-32" src="Partners/BNI.jpg" alt="" />
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </>
   );
}
