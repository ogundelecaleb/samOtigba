import { useState } from "react";
import "./App.css";
import Magnetic from "./common/Magnetic";
import { RevolveButton } from "./common/RevolveButton";
import Rounded from "./common/RoundedButton";
import { a } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <section
        id="hero"
        // ref={topEl}
        className=" relative h-[926px] md:h-[900px] w-full bg-no-repeat bg-contain sm:bg-center py-[24px] px-[16px]  md:py-[32px] md:px-[48px]"
      >
        <img
          className="absolute top-0 left-0 -z-10 h-full object-cover hidden md:flex"
          src="/samDesktop.png"
          alt=""
        />
        <img
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover md:hidden "
          src="/MobileSam.png"
          alt=""
        />
        {/* <div className="w-full h-full absolute bg-[#000000]/30 left-0 top-0 -z-[8]"></div> */}

        <div className="flex items-center justify-between md:justify-start">
          <div className="z-10  transition-all duration-500 ease-out will-change-transform md:mr-[60px] lg:mr-[100px] xl:mr-[220px]">
            <RevolveButton>
              <img src="/so.png" alt="" className="h-[29px] w-[43px]"/>
            </RevolveButton>
          </div>
          <div className=" hidden md:flex items-center md:gap-[20px] lg:gap-[36px] xl:gap-[48px]">
            {" "}
            <a href="#" target="_blank" rel="noreferrer">
              {" "}
              <Rounded>MY THOUGHTS</Rounded>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              {" "}
              <Rounded>MY CV</Rounded>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              {" "}
              <Rounded>MY FITS</Rounded>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              {" "}
              <Rounded>MY CLASSES</Rounded>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              {" "}
              <Rounded>MY COMMUNITY</Rounded>
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {" "}
              <Rounded>{isOpen ? "CLOSE" : "MENU"}</Rounded>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="absolute pt-[32px] transition-all duration-500 ease-out will-change-transform right-0  md:hidden top-[92px] z-10 h-[350px] w-[310px] bg-[#676767] bg-opacity-40 border-t-[1px] border-[#D9D9D9]  ">
            <ul className=" flex justify-center flex-col gap-3">
              <li>
                {" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Magnetic>
                    <button
                      className={`text-center text-[14px] py-[9px]  w-[141px] text-black bg-white whitespace-nowrap  
                      rounded-[24px] `}
                    >
                      MY THOUGHTS
                    </button>
                  </Magnetic>{" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Magnetic>
                    <button
                      className={`text-center text-[14px] py-[9px]  w-[141px] text-black bg-white whitespace-nowrap  
                      rounded-[24px] `}
                    >
                      MY CV
                    </button>
                  </Magnetic>{" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Magnetic>
                    <button
                      className={`text-center text-[14px] py-[9px]   w-[141px] text-black bg-white whitespace-nowrap  
                      rounded-[24px] `}
                    >
                      MY FITS
                    </button>
                  </Magnetic>{" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Magnetic>
                    <button
                      className={`text-center text-[14px] py-[9px]  w-[141px]  text-black bg-white whitespace-nowrap  
                      rounded-[24px] `}
                    >
                      MY CLASSES
                    </button>
                  </Magnetic>{" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Magnetic>
                    <button
                      className={`text-center text-[14px] py-[9px] w-[141px]  text-black bg-white whitespace-nowrap  
                      rounded-[24px] `}
                    >
                      MY COMMUNITY
                    </button>
                  </Magnetic>{" "}
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className=" mt-[182px] md:mt-[120px]  max-w-[271px] md:max-w-[390px]  ml-[32px] mb-[52px]  md:mb-[32px] md:ml-[46px] lg:ml-[56px] xl:ml-[63px]">
          <h2 className="text-[60px] md:text-[92px] leading-[50px] md:leading-[80px] text-center md:text-justify font-bold text-white tracking-wide md:max-w-[390px]">
            SAM<span className="text-[#676767]">UEL</span>
          </h2>
          <h2 className="text-[66px] md:text-[100px] leading-[50px]   md:leading-[80px]  text-right font-bold text-white tracking-wider md:max-w-[390px]">
            OTIGBA
          </h2>
          <h3 className="text-[24px] lg:text-[28px] md:text-[32px] md:leading-[32px]  text-right font-normal text-white tracking-normal  mb-[40px]">
            <span className="text-[#676767]">[</span> SO{" "}
            <span className="text-[#676767]">]</span>
          </h3>
          <div className="text-white text-[14px] font-normal  text-justify tracking-tight leading-[21px]">
            <p className="mb-[8px] ">
              Samuel Otigba{" "}
              <span className="text-[#676767]">is a seasoned growth &</span> GTM
              specialist{" "}
              <span className="text-[#676767]">
                with a wealth of experience in assisting businesses{" "}
              </span>{" "}
              in bringing their products to market.
            </p>
            <p className="mb-[24px] ">
              <span className="text-[#676767]">He is also a </span> digital
              philanthropist{" "}
              <span className="text-[#676767]">who supports the </span> tech{" "}
              <span className="text-[#676767]">and </span>
              creative ecosystem <span className="text-[#676767]">by</span>{" "}
              connecting job seekers{" "}
              <span className="text-[#676767]"> with their</span> dream careers{" "}
              <span className="text-[#676767]">through his </span> communities
              across Africa.
            </p>
            <p className="">
              <span className="text-[#676767]">
                Struggling to get your product to market?
              </span>{" "}
              Let’s talk. Send a DM.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  md:ml-[46px] lg:ml-[56px] xl:ml-[63px]">
          <a href="https://links.myvendy.com/samuelotigba" target="_blank" rel="noreferrer">
            {" "}
            <Rounded>
              {/* <button
              className={`px-[38px] py-[16px]  text-black bg-white whitespace-nowrap  
                      rounded-[24px] `}
            > */}
              MEDIA KIT
              {/* </button> */}
            </Rounded>
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            {" "}
            <Rounded>LET'S CHAT</Rounded>
          </a>
        </div>

        <div className="flex justify-center items-center gap-[6px] md:gap-[22px] xl:gap-[32px] text-[#676767] font-medium leading-[14px] mt-[48px]">
          <a href="#" target="_blank" rel="noreferrer">
            {" "}
            <p className="text-[14px] md:text-[16px]">FASHION</p>
          </a>
          <div className="h-[4px] w-[4px] rounded-full bg-[#676767]" />
          <a href="#" target="_blank" rel="noreferrer">
            {" "}
            <p className="text-[14px] md:text-[16px]">BUSSINESS</p>
          </a>
          <div className="h-[4px] w-[4px] rounded-full bg-[#676767]" />

          <a href="#" target="_blank" rel="noreferrer">
            {" "}
            <p className="text-[14px] md:text-[16px]">LIFESTYLE</p>
          </a>
          <div className="h-[4px] w-[4px] rounded-full bg-[#676767]" />

          <a href="#" target="_blank" rel="noreferrer">
            {" "}
            <p className="text-[14px] md:text-[16px]">TRAVEL</p>
          </a>
          <div className="h-[4px] w-[4px] rounded-full bg-[#676767]" />

          <a href="#" target="_blank" rel="noreferrer">
            {" "}
            <p className="text-[14px] md:text-[16px]">FOOD</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
