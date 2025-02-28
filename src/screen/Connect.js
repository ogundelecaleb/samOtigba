import React from "react";
import Navbar from "../common/Navbar";
import { BsEnvelope } from "react-icons/bs";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const SERVICE_ID = "service_8tm6ghc";
const TEMPLATE_ID = "template_7po7vxc";
const PUBLIC_KEY = "58j2WqXoQ8R8vqvQb";

const Connect = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        toast.success("Message Sent Successfully!");
      },
      (error) => {
        console.log(error.text);
        toast.error("Something went wrong!");
      }
    );
    e.target.reset();
  };

  return (
    <div className="mt-20 md:mt-0">
      <Toaster />

      <div className="bg-[#000000] relative min-h-screen w-full    gap-[30px] xl:gap-[30px]   py-[24px] px-[16px]  md:px-[48px] ">
        <h2 className=" uppercase text-center mt-5 text-[#737373] tracking-tight font-bold text-[28px] md:text-[50px]  lg:text-[66px] xl:text-[72px]  leading-[48px] md:leading-[62px] lg:leading-[66px] xl:leading-[76px]">
          Be part of the movement.
        </h2>
        <h2 className="uppercase text-center  text-[#ffffff] tracking-tight font-bold text-[24px] md:text-[50px] whitespace-nowrap lg:text-[66px] xl:text-[72px]  leading-[48px] md:leading-[62px] lg:leading-[66px] xl:leading-[76px]">
          join our community.
        </h2>

        <div className="flex justify-center gap-[20px] mt-6 ">
          <Link to="https://www.instagram.com/samotigba?" target="_blank">
          <img
            src="/instagram.svg"
            alt=""
            className="h-[24px]   md:h-[40px] lg:h-[60px] xl:h-[80px] "
          />
          </Link>
          <Link to="https://x.com/samotigba?" target="_blank">

          <img
            src="/Twitter.svg"
            alt=""
            className="h-[24px]   md:h-[40px] lg:h-[60px] xl:h-[80px] "
          />

          </Link>
          <Link to="https://www.tiktok.com/@samotigba" target="_blank">

          <img
            src="/thread.svg"
            alt=""
            className="h-[24px]   md:h-[40px] lg:h-[60px] xl:h-[80px] "
          />
          </Link>
          <a href="mailto:hello@samotigba.com">

          <BsEnvelope
            color="white"
            className="text-[24px]   md:text-[40px] lg:text-[60px] xl:text-[80px] "
          />
          </a>
        </div>

        <p className="mt-[120px] md:mt-[90px] xl:mt-[150px] mb-6 text-[14px] md:text-base xl:text-[18px] font-light text-center text-[#737373] tracking-wide uppercase">
          Get all the latest updates on drops and collaborations{" "}
        </p>

        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="text"
            placeholder="NAME"
            id="from_name"
            name="from_name"
            className="w-[250px] md:w-[210px] text-sm border-1 border-gray-400 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#737373] placeholder:text-[13px] placeholder:text-[#0e0e0e] placeholder:text-center"
          />
          <input
            type="text"
            placeholder="WHATSAPP NUMBER"
            id="from_number"
            name="from_number"
            className="w-[250px] md:w-[210px] text-sm border-1 border-gray-400 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#737373] placeholder:text-[13px] placeholder:text-[#0e0e0e] placeholder:text-center"
          />
          <input
            type="email"
            placeholder="EMAIL"
            id="from_email"
            name="from_email"
            className="w-[250px] md:w-[210px] border-1 text-sm border-gray-400 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#737373] placeholder:text-[13px] placeholder:text-[#0e0e0e] placeholder:text-center"
          />
          <button
            type="submit"
            className="hover:bg-[#737373] text-white uppercase text-[12px] md:text-[14px] font-semibold px-[20px] py-[8px] rounded-md  focus:outline-none"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
