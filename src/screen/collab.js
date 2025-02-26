import React from "react";
import Navbar from "../common/Navbar";

const Collab = () => {
  return (
    <div className="bg-[#000000] mt-20 md:mt-0 relative min-h-screen w-full    gap-[30px] xl:gap-[30px]   py-[24px] px-[16px]  md:px-[48px] ">
      <h2 className="text-[#737373] tracking-tight font-bold text-[40px] md:text-[50px] whitespace-nowrap lg:text-[66px] xl:text-[72px]  leading-[48px] md:leading-[62px] lg:leading-[72px] xl:leading-[82px]">
        {" "}
        WE ARE <span className="text-[#ffffff] ">DREAMERS</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-[40px]  ">
        <div className="w-full md:w-[50%] relative">
          <p className="text-white  uppercase text-[12px] md:text-[14px] font-light ">
            What happens when a{" "}
            <span className="text-[#737373]">chess genius </span> and a{" "}
            <span className="text-[#737373]">Creator </span> join forces?
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mt-[30px]">
            <div className=" mb-3 overflow-hidden bg-gray-200 mx-auto ">
              <img
                src="/collab1.png"
                className="h-[490px] w-[292px]   transition-all duration-300 hover:scale-110"
                alt="sam Otigba Collaboration"
              />
            </div>
            <div className=" mb-3 overflow-hidden bg-gray-200 mx-auto ">
              <img
                src="/collab2.png"
                className="h-[490px] w-[292px]   transition-all duration-300 hover:scale-110"
                alt="sam Otigba Collaboration"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative">
          <p className="text-white  uppercase text-[12px] text-justify md:text-[14px] font-light  mb-3">
            <span className="font-semibold">Tunde Onakoya</span> is a chess
            master, a global speaker, and a visionary leader who embodies
            strategy, discipline, and perseverance. From the streets of Lagos to
            breaking world records on the global stage, his journey is a
            testament to defying odds, rewriting narratives, and proving that
            talent and ambition can break any barrier.
          </p>

          <p className="text-white  uppercase text-justify text-[12px] md:text-[14px] font-light  mb-3">
            Together, they created The
            <span className="font-semibold">Dreamers Collection</span>—a fusion
            of heritage, craftsmanship, and contemporary style, designed for
            those who refuse to be boxed in. This is more than fashion. It’s a
            blueprint for possibility. It’s what happens when two Black men come
            together not to compete, but to create.
          </p>

          <p className="text-white  uppercase text-justify text-[12px] md:text-[14px] font-bold  ">
            HONORING LEGACY, EMBRACING LIMITLESSNESS
          </p>
          <p className="text-white  uppercase text-justify text-[12px] md:text-[14px] font-light  mb-3">
            For centuries, African fashion has been a symbol of culture and
            tradition—rich, storied, and deeply rooted. But too often, it has
            been confined to its past. The Dreamers Collection dares to change
            that. With S.O’s mastery of design and Tunde’s vision for global
            impact, every piece is crafted to be bold, functional, and
            undeniably powerful. A reminder that dreams have no borders, and
            neither should style.
          </p>

          <p className="text-white  uppercase text-justify text-[12px] md:text-[14px] font-bold  ">
            OUR DESIGN: Heritage Redefined
          </p>
          <p className="text-white  uppercase text-justify text-[12px] md:text-[14px] font-light  mb-3">
            Crafted from premium cotton blends and luxurious Aso Oke, The
            Dreamers Collection fuses heritage with contemporary tailoring.
            Designed for comfort, versatility, and bold cultural expression,
            each piece features subtle Aso Oke accents—seamlessly blending
            tradition with modern craftsmanship.
          </p>

          <div className="flex flex-col md:flex-row gap-5 items-center justify-between my-4">
            <p className="text-white  uppercase text-justify text-[12px] md:text-[14px] font-light ">
              And that ? That is a story worth telling.
            </p>

            <button className="py-2 px-4 mb- whitespace-nowrap  uppercase text-[12px] bg-[#f2f2f2] text-black  rounded-full font-medium shadow hover:-translate-y-1 transition-all duration-150 ease-in-out">
              Pre-order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collab;
