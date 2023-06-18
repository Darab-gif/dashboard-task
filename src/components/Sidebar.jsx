import React from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { data } from "../util/data";

const Sidebar = () => {
  const activeLink =
    "flex items-center gap-3 pl-3 pt-3 pb-2.5 rounded-lg scale-[1.05] text-primary bg-gray text-[16px] font-[600] m-2";
  const normalLink =
    "flex items-center gap-3 m-2 pl-3 pt-3 pb-2.5 text-[16px] font-[600]";
  return (
    <>
      <Header />
      <div className="bg-white w-[250px] h-full fixed top-0 left-0 border-r-2 border-r-light">
        <div className="mt-[8rem] ml-3">
          {data.map((link) => (
            <NavLink
              to={`/${link.name}`}
              key={link.name}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "" : "",
              })}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
