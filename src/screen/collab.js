import React, { useState } from "react";
import Navbar from "../common/Navbar";
import Modal from "../common/Modal";
import { Link } from "react-router-dom";

const Collab = () => {
  const [modal, setModal] = useState(false);

  const handleClickModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
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
                src="/Tunde.png"
                loading="lazy"
                className="h-[490px] w-[292px] object-contain   transition-all duration-300 hover:scale-110"
                alt="sam Otigba Collaboration"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative">
          <p className="text-white   text-[12px] text-justify md:text-[14px] font-light  mb-3">
            <span className="font-semibold">Tunde Onakoya</span> is a chess
            master, a global speaker, and a visionary leader who embodies
            strategy, discipline, and perseverance. From the streets of Lagos to
            breaking world records on the global stage, his journey is a
            testament to defying odds, rewriting narratives, and proving that
            talent and ambition can break any barrier.
          </p>

          <p className="text-white   text-justify text-[12px] md:text-[14px] font-light  mb-3">
            Together, they created The
            <span className="font-semibold">Dreamers Collection</span>—a fusion
            of heritage, craftsmanship, and contemporary style, designed for
            those who refuse to be boxed in. This is more than fashion. It’s a
            blueprint for possibility. It’s what happens when two Black men come
            together not to compete, but to create.
          </p>

          <p className="text-white uppercase   text-justify text-[12px] md:text-[14px] font-bold  ">
            HONORING LEGACY, EMBRACING LIMITLESSNESS
          </p>
          <p className="text-white   text-justify text-[12px] md:text-[14px] font-light  mb-3">
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
          <p className="text-white   text-justify text-[12px] md:text-[14px] font-light  mb-3">
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

            <button onClick={handleClickModal} className="py-2 px-4 mb- whitespace-nowrap  uppercase text-[12px] bg-[#f2f2f2] text-black  rounded-full font-medium shadow hover:-translate-y-1 transition-all duration-150 ease-in-out">
              Pre-order now
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={modal} onClose={handleCloseModal}>
        <div className="inline-block relative md:ml-[180px] lg:ml-[210px] xl:ml-[380px] border border-[#D6DDEB] p-[18px] md:p-[24px] xl:p-[32px] overflow-hidden text-left align-bottom transition-all transform bg-[white]   shadow-xl sm:my-8 sm:align-middle w-full min-w-[360px] md:min-w-[450px] md:max-w-[550px] ">
          <svg
            onClick={handleCloseModal}
            className="absolute top-2 right-2 hover:bg-gray-100 cursor-pointer h-[20px] rounded-md "
            // width="33"
            // height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5108 25.0517C26.6066 25.1475 26.6826 25.2613 26.7345 25.3865C26.7863 25.5117 26.813 25.6458 26.813 25.7813C26.813 25.9168 26.7863 26.051 26.7345 26.1762C26.6826 26.3014 26.6066 26.4151 26.5108 26.5109C26.415 26.6068 26.3013 26.6828 26.1761 26.7346C26.0509 26.7865 25.9167 26.8132 25.7812 26.8132C25.6457 26.8132 25.5115 26.7865 25.3864 26.7346C25.2612 26.6828 25.1474 26.6068 25.0516 26.5109L16.5 17.958L7.94832 26.5109C7.75482 26.7045 7.49237 26.8132 7.21871 26.8132C6.94506 26.8132 6.68261 26.7045 6.4891 26.5109C6.2956 26.3174 6.18689 26.055 6.18689 25.7813C6.18689 25.5077 6.2956 25.2452 6.4891 25.0517L15.042 16.5001L6.4891 7.94844C6.2956 7.75494 6.18689 7.49249 6.18689 7.21884C6.18689 6.94518 6.2956 6.68273 6.4891 6.48923C6.68261 6.29572 6.94506 6.18701 7.21871 6.18701C7.49237 6.18701 7.75482 6.29572 7.94832 6.48923L16.5 15.0422L25.0516 6.48923C25.2451 6.29572 25.5076 6.18701 25.7812 6.18701C26.0549 6.18701 26.3173 6.29572 26.5108 6.48923C26.7043 6.68273 26.813 6.94518 26.813 7.21884C26.813 7.49249 26.7043 7.75494 26.5108 7.94844L17.9579 16.5001L26.5108 25.0517Z"
              fill="black"
            />
          </svg>

          <div className="flex items-center justify-center gap-4 mb-[20px] md:mb-[24px]">
            <img
              src="/SoLogo.png"
              alt="so-logo"
              className="h-[24px] w-[34px]"
            />
            <img
              src="/SoSignature.png"
              alt="so-signature"
              className="h-[28px] w-[42px]"
            />
          </div>

          <p className=" text-[16px] md:text-lg text-center mb-4  text-[#000] leading-[20px] font-bold  ">
            Wear the story. Live the dream.{" "}
          </p>
          <p className="text-[13px] font-semibold uppercase md:text-sm text-center mb-4 underline">
            terms and condition
          </p>
          <p className="text-[13px] font-semibold uppercase md:text-sm text-center mb-[90px] md:mb-[100px] xl:mb-[115px] underline ">
            global shipping
          </p>

          <p className="text-[13px] font-semibold uppercase md:text-sm text-center mb-4 ">
            click to pay 👇🏾
          </p>

          <div className="flex flex-col gap-4 w-full items-center justify-center mb-[40px] md:mb-[50px] xl:mb-[60px]">
            <Link
              to="https://links.myvendy.com/samuel-otigba"
              target="_blank"
              className="py-2 px-4 w-[251px] text-center   uppercase text-[12px] bg-[#0e0e0e] text-white  rounded-full font-medium shadow hover:-translate-y-1 transition-all duration-150 ease-in-out"
            >
              PAY ON WHATSAPP (NIGeria){" "}
            </Link>
            <Link
              to="https://links.myvendy.com/samotigba"
              target="_blank"
              className="py-2 px-4  w-[251px] text-center uppercase text-[12px] bg-[#0e0e0e] text-white  rounded-full font-medium shadow hover:-translate-y-1 transition-all duration-150 ease-in-out"
            >
              PAY ON WHATSAPP (INTernational){" "}
            </Link>
          </div>

          <p className="text-[13px] font-semibold uppercase md:text-sm text-center ">
            Free Shipping <span className="font-light">globally</span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Collab;
