import { useState } from "react";

import React from "react";


import avatar from "../../assets/images/avatar-icon.png";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";


const Feedback = () => {
  const { showfeedbackForm, setShowfeedbackForm } = useState(false);
  return (
    <div className="mb-[50px]">
      <h4
        className="text-[20px] leading-[30px] font-bold
       text-headingColor mb-[30px] "
      >
        All reviews (272)
      </h4>
      <div className="flex justify-between gao-10 mb-[30px]">
        <div className="flex gap-3">
          <figure className="w-10 h-10 rounded-full">
            <img src={avatar} alt="" className="w-full" />
          </figure>
          <div className="">
            <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
              John Doe
            </h5>
            <p className="text-[14px] leading-6 text-textColor">02 FEB 2023</p>
            <p className="text_para mt-3 font-medium text-[15px]">
              Good services, highly recommended 👍
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5).keys()].map((_, index) => (
            <AiFillStar key={index} color="#0067FF" />
          ))}
        </div>
      </div>
      {!showfeedbackForm && (
        <div className="text-center">
          <button className="btn p-4" onClick={() => setShowfeedbackForm}>
            {" "}
            Give Feedback
          </button>
        </div>
      )}

      {showfeedbackForm && <FeedbackForm />}
      <FeedbackForm/>
    </div>
  );
};

export default Feedback;
