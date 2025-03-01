import React, { useState } from "react";
import Navbar from "../common/Navbar";
import Modal from "../common/Modal";
import { Link } from "react-router-dom";

const Shop = () => {
  const [modal, setModal] = useState(false);

  const handleClickModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  const product = [
    {
      id: 1,
      title: "Dreamers Fila",
      details:
        "Your reimagined Yoruba Fila with a sleek band, snap buttons, and eyelets for custom adornments. A symbol of boldness, individuality, and ambition—honoring tradition with a modern edge.",
      src: "/shop3.png",
    },
    {
      id: 2,
      title: "Dreamers Culotte Pants",
      details:
        "Inspired by Yoruba Kembe trousers, these ¾-length culottes feature an upturned Jawu Asooke hem, blending relaxed wearability with a structured aesthetic. seamlessly integrate into both personal style and contemporary fashion.",
      src: "/CulottePant.png",
    },

    {
      id: 3,
      title: "Dreamers  Side-Split Top",
      details:
        "Inspired by Fulani attire, this sleeveless vest features a round or V-neck, open sides, and rope fastenings. Its airy silhouette balances freedom and structure, ending just above the hip.",
      src: "/slittedTop.png",
    },
    {
      id: 4,
      title: " Dreamers  Flare Trousers",
      details:
        "Your A reimagined Yoruba Fila with a sleek band, snap buttons, and eyelets for custom adornments. A symbol of boldness, individuality, and ambition—honoring tradition with a modern edge.",
      src: "/shop1.png",
    },
  ];

  return (
    <div>
      <div className="bg-[#000000] mt-20 md:mt-0 relative min-h-screen w-full bg-no-repeat bg-contain sm:bg-center  px-[16px]   md:px-[48px] pb-6 ">
        <h3 className="text-white tracking-tight  text-[40px] md:text-[50px] whitespace-nowrap lg:text-[66px] xl:text-[72px] flex flex-col md:flex-row gap-[4px] leading-[48px] md:leading-[62px] lg:leading-[72px] xl:leading-[82px]">
          Drop 1 : <span className="text-[#f2f2f2] font-bold"> DREAMERS </span>{" "}
          <span className="text-[#737373] font-bold"> COLLECTION</span>
        </h3>
        <p className="text-white uppercase text-[12px] md:text-[14px] font-light ">
          {" "}
          <span className="text-[#737373]">
            Be part of the movement, Wear the dream.
          </span>{" "}
          Each piece is designed to be worn individually or as a full ensemble.
        </p>

        <div className=" mt-6 md:mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[40px] md:gap-[50px] xl:gap-[69px]">
          {product?.map((item, index) => (
            <div>
              <div className="h-[300px] w-[264px] mb-3 overflow-hidden bg-gray-200 mx-auto ">
                {" "}
                <img
                  src={item?.src}
                  loading="lazy"
                  className="w-[270px] h-[300px]  object-contain  transition-all duration-300 hover:scale-110"
                  alt="dreamers collection"
                />
              </div>

              <h4 className="text-white font-bold text-[12px] md:text-sm text-center mb-2">
                {item?.title}
              </h4>
              <p className="text-justify text-white text-[11px] font-light">
                {item?.details}
              </p>
              <button
                onClick={handleClickModal}
                className=" mt-4 py-2 px-4  w-full text-center mx-auto uppercase text-[12px] bg-[#f2f2f2] text-black  rounded-full font-medium shadow hover:-translate-y-1 transition-all duration-150 ease-in-out "
              >
                Pre-order now
              </button>
            </div>
          ))}
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

export default Shop;
