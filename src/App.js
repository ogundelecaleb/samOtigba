import "./App.css";
import Magnetic from "./common/Magnetic";
import { RevolveButton } from "./common/RevolveButton";
import Rounded from "./common/RoundedButton";

function App() {
  return (
    <div className="App">
      <section
        id="hero"
        // ref={topEl}
        className=" relative h-[926px] md:h-[900px] bg-no-repeat bg-contain sm:bg-center py-[24px] px-[16px]  md:py-[32px] md:px-[48px]"
      >
        <img
          className="absolute top-0 left-0 -z-10 h-full object-cover hidden md:flex"
          src="/samDesktop.png"
          alt=""
        />
        <img
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover md:hidden "
          src="/samMobile.png"
          alt=""
        />
        {/* <div className="w-full h-full absolute bg-[#000000]/30 left-0 top-0 -z-[8]"></div> */}

        <div className="flex items-center justify-between md:justify-start">
          <div className="z-10  transition-all duration-500 ease-out will-change-transform md:mr-[60px] lg:mr-[100px] xl:mr-[140px]">
            <RevolveButton>
              <img src="/logo.png" alt="" />
            </RevolveButton>
          </div>
          <div className=" hidden md:flex items-center md:gap-[20px] lg:gap-[36px] xl:gap-[48px]">
            {" "}
            <Rounded>My Thought</Rounded>
            <Rounded>My Cv</Rounded>
            <Rounded>My Fits</Rounded>
            <Rounded>My Classes</Rounded>
            <Rounded>My Community</Rounded>
          </div>
          <div className="md:hidden">
            <Rounded>Menu</Rounded>
          </div>
        </div>

        <div className=" mt-[506px] md:mt-[120px]  md:max-w-[290px] xl:max-w-[304px]   md:mb-[32px] md:ml-[46px] lg:ml-[56px] xl:ml-[63px]">
          <h2 className="text-[48px] md:text-[68px] xl:text-[76.26px] leading-[40px] md:leading-[60px]  xl:leading-[70px] text-justify font-bold text-white tracking-normal">
            SAM<span className="text-[#676767]">UEL</span>
          </h2>
          <h2 className="text-[48px] md:text-[68px] xl:text-[76.26px] leading-[40px] md:leading-[60px]  xl:leading-[70px]  text-justify font-bold text-white tracking-normal">
            OTIGBA
          </h2>
          <h3 className="md:text-[24px] lg:text-[28px] xl:text-[32px] md:leading-[24px] lg:leading-[28px] xl:leading-[32px]  text-left  md:text-right font-normal text-white tracking-normal mb-[40px]">
            [SO]
          </h3>
          <div className="text-white text-[14px] font-normal  text-left tracking-tight leading-[21px]">
            <p className="mb-[8px] ">
              Samuel Otigba is a seasoned growth & GTM specialist with a wealth
              of experience in assisting businesses in bringing their products
              to market.
            </p>
            <p className="mb-[24px] hidden md:flex">
              He is also a digital philanthropist who supports the tech and
              creative ecosystem by connecting job seekers with their dream
              careers through his communities across Africa.
            </p>
            <p>
              <span className="text-[#676767]">
                Struggling to get your product to market?
              </span>{" "}
              Let’s talk. Send a DM.
            </p>
          </div>
        </div>
        <div className="hidden md:flex justify-between items-center  md:ml-[46px] lg:ml-[56px] xl:ml-[63px]">
          <Magnetic>
            <button
              className={`px-[38px] py-[16px]  text-black bg-white whitespace-nowrap  
                      rounded-[24px] `}
            >
              My Kits
            </button>
          </Magnetic>

          <Magnetic>
            <button
              className={`px-[38px] py-[16px]  text-black bg-white whitespace-nowrap  
                      rounded-[24px] `}
            >
              Let’s Chat
            </button>
          </Magnetic>
        </div>

        <div className="flex justify-center items-center gap-[12px] md:gap-[22px] xl:gap-[32px] text-[#676767] font-medium leading-[14px] mt-[48px]">
          <p className="">FASHION</p>
          <div className="h-[4px] w-[4px] rounded-full bg-[#676767]" />
          <p className="">BUSSINESS</p>
          <div className="h-[4px] w-[4px] rounded-full bg-[#676767]" />

          <p className="">LIFESTYLE</p>
          <div className="h-[4px] w-[4px] rounded-full bg-[#676767]" />

          <p className="">TRAVEL</p>
          <div className="h-[4px] w-[4px] rounded-full bg-[#676767]" />

          <p className="">FOOD</p>
        </div>
      </section>
    </div>
  );
}

export default App;
