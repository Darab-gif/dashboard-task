import React, { useState } from "react";
import Profile from "../components/Profile";
import Password from "../components/Password";
import Role from "../components/Role";
import Container from "../util/Container";

const Setting = () => {
  const [active, setActive] = useState(1);

  const handleTab = (ev) => {
    setActive(ev);
  };

  return (
    <Container>
      <h1 className="text-[32px] font-[800]">Setting</h1>
      <div className="flex gap-[5rem] mt-[3rem]">
        <button
          className={`py-[10px] px-[60px] font-[600] border-b-4 ${
            active === 1 ? "border-primary text-primary" : "border-bg"
          }`}
          onClick={() => handleTab(1)}
        >
          Profile
        </button>
        <button
          className={`py-[10px] px-[60px] font-[600] border-b-4 ${
            active === 2 ? "border-primary text-primary" : "border-bg"
          }`}
          onClick={() => handleTab(2)}
        >
          Role
        </button>
        <button
          className={`py-[10px] px-[60px] font-[600] border-b-4 ${
            active === 3 ? "border-primary text-primary" : "border-bg"
          }`}
          onClick={() => handleTab(3)}
        >
          Change Password
        </button>
      </div>
      <div className="mt-[3rem]">
        {active === 1 && <Profile />}
        {active === 2 && <Role />}
        {active === 3 && <Password />}
      </div>
    </Container>
  );
};

export default Setting;
