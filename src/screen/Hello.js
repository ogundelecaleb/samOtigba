import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../common/Navbar";
import Modal from "../common/Modal";

const Hello = () => {
  const [preOrder, setPreOder] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setPreOder(true);
  }, []);

  const handleClick = () => {
    setPreOder(true);
  };
  const handleClose = () => {
    setPreOder(false);
  };
  const handleClickModal = () => {
    setModal(true);
    handleClose();
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="bg-[#000000]  mt-20 md:mt-0 min-h-[90vh]   w-full pb-[24px] px-[16px]  md:pb-[32px] md:pr-[48px]">
      <div className=" relative min-h-[90vh]  z-10  flex flex-col md:flex-row  gap-[30px] xl:gap-[30px]  ">
        {/* <img
          src="/samImage.jpeg"
          alt="sam otigba"
          className=" md:hidden   absolute bottom-0 -z-10 opacity-70 "
        /> */}

        <div className="w-full md:w-[40%] relative  hidden md:block">
          <img
            src="/samHeroImage.png"
            alt="sam otigba"
            className="  h-[630px] w-[610px]  object-cover  left-0"
          />
        </div>
        <div className="w-full md:w-[60%] pt-[50px]">
          <h3 className="text-[#737373]  text-[40px] md:text-[56px] lg:text-[72px] xl:text-[80px] leading-8">
            MEET
          </h3>
          <h3 className="text-[#ffffff] font-semibold text-[40px] md:text-[50px] lg:text-[62px] xl:text-[72px] leading-tight">
            SAM OTIGBA <span className="text-[#737373] "> {">"}</span> S.0
          </h3>

            {" "}
            <img
              src="/samImage.jpeg"
              alt="sam otigba"
              className=" md:hidden object-cover h-[420px] w-full  mt-4 opacity-70 "
            />

          <p className="text-gray-50  text-sm md:text-base lg:text-[18px] text-justify font-light mt-[40px] md:mt-[30px] mb-[50px] md:mb-[90px] xl:mb-[90px]">
            A multi-disciplinary creative, product designer, artist, and brand
            strategist whose work spans fashion, tech, and art. A connector of
            ideas and people, he has designed iconic pieces, mentored emerging
            talents, and shaped products that carry lasting impact. His approach
            to design isn’t just about aesthetics—storytelling, identity, and
            legacy.
          </p>

          <div className="flex justify-between mt-[20px] md:mt-9">
            <div>
              <p className="text-[12px] mb-1 text-center  font-light text-gray-50">
                DREAMERS COLLECTION
              </p>
              <button
                onClick={handleClick}
                className="py-1 px-4 uppercase text-[12px] bg-[#f2f2f2] rounded-full font-medium shadow hover:-translate-y-1 transition-all duration-150 ease-in-out text-[#000000]"
              >
                Click to pre-order
              </button>
            </div>

            <div className="">
              <p className="text-[12px] mb-1 text-center  font-light text-gray-50">
                READ ALL ABOUT IT!
              </p>
              <Link
                to="/collab"
                className="py-1 px-4 uppercase text-[12px] bg-[#f2f2f2] rounded-full font-medium shadow hover:-translate-y-1 transition-all duration-150 ease-in-out text-[#000000]"
              >
                SO x TUNDE ONAkoya
              </Link>
            </div>
          </div>

          <div className="mt-[50px] md:mt-[70px] xl:mt-[80px]  mb-6 md:mb-0 ">
            <p className="text-[13px] text-center font-light md:text-base text-gray-50 ">
              📌 Pre-orders open{" "}
              <span className="font-semibold">March 1st </span> . 🌍{" "}
              <span className="font-semibold whitespace-nowrap">Free Shipping Worldwide </span>
              
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={preOrder} onClose={handleClose}>
        <div className="inline-block relative md:ml-[180px]  lg:ml-[210px] xl:ml-[380px] border border-[#D6DDEB] p-[18px] md:p-[24px] xl:p-[32px] overflow-hidden text-left align-bottom transition-all transform bg-[white]   shadow-xl sm:my-8 sm:align-middle w-full min-w-[360px] md:min-w-[450px] md:max-w-[550px] ">
          <svg
            onClick={handleClose}
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
          <p className=" text-[16px] md:text-lg text-center  text-[#000] leading-[20px] font-bold  ">
            WE ARE DREAMERS
          </p>
          <p className="text-[12px] md:text-sm font-light text-center mb-3">
            Step into The Dreamers Collection.
          </p>

          <p className="text-[12px] md:text-sm font-semibold text-center mb-3">
            What happens when a chess genius and a designer join forces?
          </p>
          <p className="text-[12px] md:text-sm font-light text-center">
            You get more than just a collection—you get a statement.
          </p>
          <p className="text-[12px] md:text-sm font-light text-center mb-3">
            A testament to the power of collaboration.
          </p>

          <p className="text-[12px] md:text-sm font-light text-center">
            It is the brainchild of two visionaries
          </p>

          <p className="text-[12px] md:text-sm font-semibold text-center mb-3">
            S.O (Samuel Otigba) <span className="font-light">and</span> Tunde
            Onakoya
          </p>

          <p className="text-[12px] md:text-sm font-light text-center mb-3">
            Two men who have carved their paths in vastly different industries
            yet are connected by a shared belief: heritage should evolve,
            culture should inspire, and dreams should have no borders.
          </p>
          <p className="text-[12px] md:text-sm font-light text-center ">
            It’s a reminder that when we bring our strengths together
          </p>

          <p className="text-[12px] md:text-sm font-semibold text-center mb-3">
            we shape culture. We redefine narratives. We build legacies.
          </p>

          <p className="text-[12px] md:text-sm font-light  text-center mb-3">
            That’s exactly what The Dreamers Collection represents.
          </p>
<div className="flex justify-center ">
<Link to="/collab" className="text-[12px]  hover:-translate-y-1 transition-all duration-150 ease-in-out  mx-auto md:text-sm font-semibold text-center mb-3 ">
            🔗 <span className="underline">READ ALL ABOUT IT!</span>
          </Link>
</div>
         

          <div className="w-[170px] mx-auto h-[1px] bg-[#737373] mb-3" />
          <p className="text-[12px] md:text-sm font-light text-center">
            📌 Limited Release – Pre-orders open March 1st
          </p>

          <p className="text-[12px] md:text-sm font-semibold text-center mb-7">
            🌍 Free Shipping Worldwide
          </p>
          <div className="flex w-full justify-center">
            <button
              onClick={handleClickModal}
              className="py-2 px-4  uppercase text-[12px] bg-[#0e0e0e] text-white  rounded-full font-medium shadow hover:-translate-y-1 transition-all duration-150 ease-in-out"
            >
              Click to pre-order
            </button>
          </div>
        </div>
      </Modal>

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

export default Hello;
