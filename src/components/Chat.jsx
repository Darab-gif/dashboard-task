import React from "react";
import { Dot, user1, userCom } from ".";

const Chat = () => {
  return (
    <div className="relative">
      <div className="bg-purple flex w-[30rem] ml-10 mt-8  items-center gap-[15rem] rounded-[5px]">
        <div className="flex ml-3 items-center justify-center gap-3 relative">
          <img src={user1} alt="" className="relative" />
          <span className="h-[5px] w-[5px] bg-green rounded-full absolute bottom-2 left-7"></span>
          <div>
            <h2 className="text-[16px] text-[#030A5A] font-[500]">
              Kristin Waston
            </h2>
            <p>Nov 25, :53 PM EST</p>
          </div>
        </div>
        <span className="">
          <Dot />
        </span>
      </div>
      <p className="flex text-center justify-center items-center bg-offwhite w-[80px] p-3 ml-[15rem] mt-4">
        Today
      </p>
      <div>
        <div className="flex ml-10 gap-3 relative">
          <img src={user1} alt="" className="relative" />
          <span className="h-[5px] w-[5px] bg-green rounded-full absolute bottom-1 left-7"></span>
          <div className="flex gap-[10rem]">
            <h2 className="text-[16px] text-[#030A5A] font-[500]">
              Kristin Waston <span className="text-[#d1d1d1]">(customer)</span>
            </h2>
            <p>11:00AM</p>
          </div>
        </div>
        <div className="bg-purple rounded-bl-[4px] rounded-tr-[4px] rounded-tb-[4px] ml-[4.5rem]  w-[30rem]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
      </div>
      <div className="relative mt-6">
        <div className="bg-blue text-white rounded-tl-[5px] rounded-bl-[5px] w-[30rem] ml-[4.5rem] p-1 rounded-tr-[5px] ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam
        </div>
        <img src={userCom} alt="" className="bottom-3- absolute right-4" />
      </div>
      <div className="mt-[3rem]">
        <div className="flex ml-10 gap-3 relative">
          <img src={user1} alt="" className="relative" />
          <span className="h-[5px] w-[5px] bg-green rounded-full absolute bottom-1 left-7"></span>
          <div className="flex ">
            <h2 className="text-[16px] text-[#030A5A] font-[500]">
              Kristin Waston <span className="text-[#d1d1d1]">(customer)</span>
            </h2>
          </div>
        </div>
        <div className="bg-purple rounded-bl-[4px] rounded-tr-[4px] rounded-tb-[4px] ml-[4.5rem] w-10 font-[700]">
          ......
        </div>
      </div>
      <div className="flex gap-2 mt-[4rem] ml-10">
        <input
          type="text"
          placeholder="Start typing..."
          className="pl-3 h-[45px] outline-none rounded-[20px] w-[450px] border-light border-[2px]"
        />
        <button className="border-none">Send</button>
      </div>
    </div>
  );
};

export default Chat;
