import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

export default function App() {
  let [showContent, setshowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% , 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50%,50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setshowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {

      if(!showContent){
        return;
      }

   gsap.to(".main",{
    scale:1,
    rotate:0,
    duration:2,
    delay:"-1",
    ease: "Expo.easeInOut",
   });
   gsap.to(".sky",{
    scale:1.2,
    rotate:0,
    duration:2,
    delay:"-0.8",
    ease: "Expo.easeInOut",
   });
   gsap.to(".bg",{
    scale:1.2,
    rotate:0,
    duration:2,
    delay:"-0.8",
    ease: "Expo.easeInOut",
   });
   gsap.to(".character",{
    scale:0.8,
    x:"-50%",
    rotate:0,
    duration:2,
    delay:"-0.8",
    ease: "Expo.easeInOut",
   });

   


     
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]  ">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-white text-3xl -mt-[7px] leading-none ">
                  RockStar
                </h3>
              </div>
            </div>

            <div className="imagesdiv  relative overflow-hidden w-full h-screen">
              <img
                className=" sky scale-[1.5] rotate-[-20deg]  absolute top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className=" bg  scale-[1.8] rotate-[-25deg] absolute top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />

              <div className="text absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-3">
                <h1 className="text-7xl text-white -ml-40 ">Grand</h1>
                <h1 className="text-7xl text-white  ml-20 ">Theft</h1>
                <h1 className="text-7xl text-white  -ml-20">Auto</h1>
              </div>

              <img
                className=" character absolute -bottom-[65%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] "
                src="./girlbg.png"
                alt=""
              />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i class="ri-arrow-down-long-line"></i>
                <h3 className="">Scroll </h3>
              </div>

              <img
                className="abosolute h-[45px]  top-1/2 left-1/2 translate-x-1/2 ftranslate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full h-screen flex px-10 flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%]  ">
              <div className="limg relative w-1/2 h-full">

                <img  className="absolute scale-[0.8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />

              </div>

              <div className="rg w-[40%] scale-[0.6] mb-80 ">

               <h3 className="text-8xl">Hello</h3>
               <h3 className="text-8xl">Hello</h3>
               <p className="mt-10 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum inventore esse voluptatem? Aliquid pariatur quisquam, quia eligendi odio laboriosam consequatur ipsum repellat.</p>
               <p className="mt-3 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum inventore esse voluptatem? Aliquid pariatur quisquam, quia eligendi </p>
               <p className="mt-10 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum inventore esse voluptatem? Aliquid pariatur quisquam, quia eligendi </p>

               <button className=" text-black bg-yellow-500 px-10 py-10 text-4xl mt-10">Download</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
