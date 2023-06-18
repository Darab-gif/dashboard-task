import React from "react";
import { useSelector } from "react-redux";
import Container from "../util/Container";
import Chat from "../components/Chat";

const Support = () => {
  const user = useSelector((state) => state.user);
  return (
    <Container>
      <h1 className="text-[32px] font-[800] ">Support</h1>
      <div className="flex gap-8 items-center">
        <div className="w-[312px] h-[40rem] border-2 border-light rounded-[5px] mt-10 overflow-y-scroll scrowbar">
          <div className="pt-4">
            <h2 className="text-[22px] text-[#030A5A] font-[700] text-center">
              All Messages
            </h2>
            {user.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center gap-3 m-2 pt-3 cursor-pointer"
              >
                <span>{item.image}</span>
                <div>
                  <h3 className="text-[16px] text-[#030A5A] font-[500]">
                    {item.name}
                  </h3>
                  <p>{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[596px] h-[40rem] border-2 border-light rounded-[5px] mt-10">
          <Chat />
        </div>
      </div>
    </Container>
  );
};

export default Support;
