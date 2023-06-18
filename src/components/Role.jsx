import React, { useState } from "react";
import { role } from "../util/data";
import ModalContainer from "./ModalContainer";

const Role = (props) => {
  const [data, setData] = useState(role);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="">
      <table className="w-[62rem] h-[120px] border-2 border-light mt-[2rem] text-center border-collapse">
        <thead className="h-[60px]">
          <tr>
            <th className="border border-light p-3">NAME</th>
            <th className="border border-light p-3">ROLE</th>
            <th className="border border-light p-3">LAST LOGIN</th>
          </tr>
        </thead>
        <tbody className="bg-white h-[50px] border border-light border-collapse">
          {data.map((item) => {
            return (
              <tr>
                <td className="border border-light p-3">{item.name}</td>
                <td className="border border-light p-3">{item.role}</td>
                <td className="border border-light p-3">{item.login}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="bg-primary text-white px-[40px] py-3 mt-[3rem] rounded-[8px] font-[500]"
        onClick={() => setOpenModal(true)}
      >
        Add
      </button>

      {openModal && (
        <ModalContainer
          {...props}
          setOpen={setOpenModal}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
};

export default Role;
