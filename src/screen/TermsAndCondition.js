import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";


const TermsAndCondition = () => {
  return (
    <div className="bg-[#000000] text-gray-50   py-[24px] px-[16px]  md:px-[48px] lg:px-[108px] xl:px-[168px]  mt-20 md:mt-0 relative min-h-screen w-full">
      <div className="flex justify-end mb-2">
        <Link to="/">
          <svg
            className=" hover:bg-gray-50 cursor-pointer h-[20px] rounded-md "
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5108 25.0517C26.6066 25.1475 26.6826 25.2613 26.7345 25.3865C26.7863 25.5117 26.813 25.6458 26.813 25.7813C26.813 25.9168 26.7863 26.051 26.7345 26.1762C26.6826 26.3014 26.6066 26.4151 26.5108 26.5109C26.415 26.6068 26.3013 26.6828 26.1761 26.7346C26.0509 26.7865 25.9167 26.8132 25.7812 26.8132C25.6457 26.8132 25.5115 26.7865 25.3864 26.7346C25.2612 26.6828 25.1474 26.6068 25.0516 26.5109L16.5 17.958L7.94832 26.5109C7.75482 26.7045 7.49237 26.8132 7.21871 26.8132C6.94506 26.8132 6.68261 26.7045 6.4891 26.5109C6.2956 26.3174 6.18689 26.055 6.18689 25.7813C6.18689 25.5077 6.2956 25.2452 6.4891 25.0517L15.042 16.5001L6.4891 7.94844C6.2956 7.75494 6.18689 7.49249 6.18689 7.21884C6.18689 6.94518 6.2956 6.68273 6.4891 6.48923C6.68261 6.29572 6.94506 6.18701 7.21871 6.18701C7.49237 6.18701 7.75482 6.29572 7.94832 6.48923L16.5 15.0422L25.0516 6.48923C25.2451 6.29572 25.5076 6.18701 25.7812 6.18701C26.0549 6.18701 26.3173 6.29572 26.5108 6.48923C26.7043 6.68273 26.813 6.94518 26.813 7.21884C26.813 7.49249 26.7043 7.75494 26.5108 7.94844L17.9579 16.5001L26.5108 25.0517Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>

      <m.div
          initial={{ y: -10, opacity: 0.4 }}
          animate={{
            // x: selectedInfo === 1 ? 0 : 100,
            y: 0,
            opacity: 1,
            // scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
        >

      <p className="text-base md:text-lg font-medium mb-3">
        TERMS & CONDITIONS - THE DREAMERS COLLECTION (S.O X TUNDE ONAKOYA)
      </p>
      <p className="text-sm  font-light mb-2 text-justify">
        By placing an order for The Dreamers Collection - S.O X Tunde Onakoya
        through Vendy, you ("Customer") agree to the following Terms &
        Conditions ("T&Cs").
      </p>
      <p className="text-sm  font-light mb-2 text-justify">
        <span className="font-medium">1. ORDER & PAYMENT</span> <br /> All items
        are made-to-order and require full payment to join the paid waitlist.
        Once payment is made, the order cannot be canceled, modified, or
        refunded, except as stated in the refund policy. Payments must be
        completed via Vendy on WhatsApp.
      </p>
      <p className="text-sm  font-light mb-2 text-justify">
        <span className="font-medium"> 2. PRODUCTION & SHIPPING</span> <br />
        Pre-orders open on March 1st, 2025, with global shipping beginning April
        1st, 2025. Customers are responsible for providing accurate shipping
        details at checkout. International buyers may be subject to import
        duties and taxes, payable by the customer. S.O is not liable for
        shipping delays caused by carriers, customs, or unforeseen
        circumstances.
      </p>
      <p className="text-sm  font-light mb-2 text-justify">
        <span className="font-medium"> 3. PRODUCT QUALITY & SIZING</span> <br />
        Customers must review the size chart before purchasing, as exchanges are
        not available once production begins.
      </p>

      <p className="text-sm  font-light mb-2 text-justify">
        <span className="font-medium"> 4. REFUND POLICY</span> <br />
        Refunds will only be issued if the order is not as described due to an
        error on our part, such as receiving an incorrect item, wrong size, or a
        manufacturing defect. Customers may choose between an exchange for the
        same item in a different size or variant (subject to availability),
        store credit of equal value for future purchases, or a full refund to
        the original payment method. Refund requests must be submitted within 7
        days of receiving the order, along with clear photographic evidence.
        Orders cannot be refunded or exchanged for any other reason, including
        change of mind or incorrect size selection.
      </p>

      <p className="text-sm  font-light mb-2 text-justify">
        <span className="font-medium"> 5. CUSTOMER RESPONSIBILITIES</span>{" "}
        <br />
        By purchasing, the customer agrees to the preorder waitlist terms and
        production timelines. Disputes or chargebacks must be resolved directly
        through Vendy's customer support.
      </p>

      <p className="text-sm  font-light mb-2 text-justify">
        <span className="font-medium">
          6. BRANDING & INTELLECTUAL PROPERTY{" "}
        </span>
        <br />
        All designs remain the intellectual property of S.O. Unauthorized
        resale, reproduction, or commercial use is strictly prohibited.
        Customers acknowledge that The Dreamers Collection - S.O X Tunde Onakoya
        is an exclusive collaboration available only through official channels.
      </p>
      



      <p className="text-sm  font-light mb-2 text-justify">
        <span className="font-medium"> 7. MODIFICATION OF TERMS </span> <br />
        S.O reserves the right to update these T&Cs at any time, with changes
        applying to future orders. 8. ACCEPTANCE OF TERMS I acknowledge that I
        have read, understood, and agreed to the Terms & Conditions of The
        Dreamers Collection - S.O X Tunde Onakoya.
      </p>
      </m.div>
    </div>
  );
};

export default TermsAndCondition;
