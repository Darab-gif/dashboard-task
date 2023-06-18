import React from "react";

const Password = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <h1 className="text-[32px] font-[800]">Contact Information</h1>
      <form action="" className="mt-10" onClick={handleSubmit}>
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-[600] text-[24px]">
              Current Password
            </label>
            <input
              type="password"
              id="name"
              placeholder="Current Password"
              className="w-[20rem] h-[40px] pl-2 rounded-[5px] outline-none border-[2px] border-light"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-[600] text-[24px]">
              Change Password
            </label>
            <input
              type="password"
              id="name"
              placeholder="Change Password"
              className="w-[20rem] h-[40px] pl-2 rounded-[5px] outline-none border-[2px] border-light"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-[600] text-[24px]">
              Confirm Password
            </label>
            <input
              type="password"
              id="name"
              placeholder="Confirm Password"
              className="w-[20rem] h-[40px] pl-2 rounded-[5px] outline-none border-[2px] border-light"
            />
          </div>
        </div>

        <button className="bg-primary text-white px-[40px] py-3 mt-[3rem] rounded-[8px] font-[500]">
          Save
        </button>
      </form>
    </div>
  );
};

export default Password;
