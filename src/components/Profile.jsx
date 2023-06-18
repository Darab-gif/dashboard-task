import React from "react";

const Profile = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <h1 className="text-[32px] font-[800]">Contact Information</h1>
      <form action="" className="mt-10" onClick={handleSubmit}>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-[600] text-[24px]">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Joha"
              className="w-[25rem] h-[40px] pl-2 rounded-[5px] outline-none border-[2px] border-light"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-[600] text-[24px]">
              Address
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nos 23, abc street"
              className="w-[25rem] h-[40px] pl-2 rounded-[5px] outline-none border-[2px] border-light"
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

export default Profile;
