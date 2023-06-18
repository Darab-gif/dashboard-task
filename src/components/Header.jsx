import React from "react";
import { Arrow, avatar, Crown, logo, Notification, Search } from ".";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary h-[5rem] flex gap-[20rem] z-10  items-center content-center">
      <div className="ml-[5rem]">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center content-center gap-[2rem]">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="w-[322px] h-[48px] rounded-tl-[10px] rounded-bl-[10px] outline-none pl-2"
          />
          <span className="h-[48px] cursor-pointer w-[50px] text-white  rounded-tr-[10px] rounded-br-[10px] bg-lightBlue flex items-center justify-center">
            <Search size={28} />
          </span>
        </div>
        <span className="h-[48px] w-[50px] cursor-pointer text-white relative bg-lightBlue flex items-center justify-center rounded-[15px]">
          <Notification size={28} />
          <span className="h-[7px] w-[7px] absolute top-3 right-3 rounded-full bg-red"></span>
        </span>
        <div className="flex items-center cursor-pointer text-white bg-lightBlue h-[48px] gap-4 rounded-[15px] w-[10rem] justify-center">
          <span>
            <Crown size={28} />
          </span>
          <p>Upgrade Plan</p>
        </div>
        <div className="flex items-center text-white cursor-pointer bg-lightBlue h-[48px] gap-4 rounded-[15px] w-[10rem] justify-center">
          <div className="flex items-center justify-center gap-1">
            <img src={avatar} alt="avatar" />
            <p>AR Jakir</p>
          </div>
          <span>
            <Arrow size={26} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
