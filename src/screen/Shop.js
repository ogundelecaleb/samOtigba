import React from "react";
import Navbar from "../common/Navbar";

const Shop = () => {
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
      src: "/shop1.png",
    },

    {
      id: 3,
      title: "Dreamers  Side-Split Top",
      details:
        "Inspired by Fulani attire, this sleeveless vest features a round or V-neck, open sides, and rope fastenings. Its airy silhouette balances freedom and structure, ending just above the hip.",
      src: "/shop2.png",
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
              <div className="h-[300px] w-[273px] mb-3 overflow-hidden bg-gray-200 mx-auto ">
                {" "}
                <img
                  src={item?.src}
                  className="w-[273px] h-[300px]   transition-all duration-300 hover:scale-110"
                  alt="dreamers collection"
                />
              </div>

              <h4 className="text-white font-bold text-[12px] md:text-sm text-center mb-2">
                {item?.title}
              </h4>
              <p className="text-justify text-white text-[11px] font-light">
                {item?.details}
              </p>
            </div>
          ))}
        </div>

        <div className="flex w-full justify-center mt-[40px] ">
          <button className="py-2 px-4  uppercase text-[12px] bg-[#f2f2f2] text-black  rounded-full font-medium shadow hover:-translate-y-1 transition-all duration-150 ease-in-out">
            Pre-order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
