import React from "react";

const CustomerModal = ({ setOpen, setView }) => {
  const close = () => {
    setOpen(false);
    setView(false);
  };
  return (
    <div className="w-[100vw] h-[100vh] absolute top-0 flex justify-center items-center bg-backdrop">
      <div className="relative bg-white h-[23rem] shadow-[#d1d1d1] border-[2px] border-light w-[30rem] p-10 rounded-[10px]">
        <span
          onClick={close}
          className="absolute top-2 right-4 font-[800] cursor-pointer p-[16px] flex items-center-justify-center"
        >
          X
        </span>
        <h1 className="text-[32px] font-[800] text-center">View Customer</h1>
        <table className="w-[25rem] h-[180px] border-[2px] border-light mt-[2rem] text-center">
          <thead className="h-[40px]">
            <tr>
              <th>PRODUCT</th>
              <th>CREATE DATE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody className="bg-white h-[40px] ">
            <tr className="border-b-[2px] border-light">
              <td>Sam Dev</td>
              <td>30th December, 2022</td>
              <td>Download</td>
            </tr>
            <tr className="border-b-[2px] border-light">
              <td>Sam Dev</td>
              <td>30th December, 2022</td>
              <td>Download</td>
            </tr>
            <tr className="border-b-[2px] border-light">
              <td>Sam Dev</td>
              <td>30th December, 2022</td>
              <td>Download</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerModal;
