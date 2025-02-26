import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RevolveButton } from "./RevolveButton";
import { motion as m } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const nav = [
    {
      label: "Hello",
      to: "/",
      exact: true,
    },
    {
      label: "Shop",
      to: "/shop",
      exact: false,
    },
    {
      label: "Collab",
      to: "/collab",
      exact: false,
    },
    {
      label: "Connect",
      to: "/connect",
      exact: false,
    },
  
  
  ];
  return (
    <div className='bg-[#000000] z-20 fixed md:relative top-0 left-0 right-0 py-[24px] px-[16px]  md:py-[32px]   md:px-[48px]'>
      <div className="flex items-center  lg:gap-[100px] justify-between  ">
      <m.div
              initial={{ x: -20, opacity: 0.4 }}
              animate={{
                // x: selectedInfo === 1 ? 0 : 100,
                x: 0,
                opacity: 1,
                // scale: 1,
              }}
              transition={{
                duration: 0.9,
              }}
            >
        <div className="z-10  transition-all duration-500 ease-out will-change-transform  ">
          <RevolveButton>
            <img
              src="/so.png"
              alt=""
              className="h-[29px] w-[43px] flex-shrink-0 "
            />
          </RevolveButton>
        </div>
        </m.div>
        <m.div
              initial={{ x: 20, opacity: 0.4 }}
              animate={{
                // x: selectedInfo === 1 ? 0 : 100,
                x: 0,
                opacity: 1,
                // scale: 1,
              }}
              transition={{
                duration: 0.9,
              }}
            >
        <div className=" flex  items-center gap-[13px]  md:gap-[50px] lg:gap-[60px] xl:gap-[110px]">
          {nav.map((item, index) => (
            <Link to={item?.to} className="flex flex-col gap-2 items-center">
              <p
                className={` ${
                  location.pathname === item?.to
                    ? "text-white"
                    : "text-[#3e3e3e]"
                } font-semibold text-base md:text-[22px]`}
              >
                {item?.label}
              </p>
            {   location.pathname === item?.to && <div className="w-3 md:w-6 border-b border-1 border-dashed border-spacing-2 border-gray-50" /> }  
            </Link>
          ))}
        </div>
        </m.div>
      </div>
    </div>
  );
};

export default Navbar;
