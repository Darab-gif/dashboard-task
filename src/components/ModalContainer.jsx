import React, { useState } from "react";

const ModalContainer = ({ setOpen, data, setData }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const close = () => {
    setOpen(false);
  };

  const AddRole = (name, role, id) => {
    const roles = {
      id: id,
      name: name,
      role: role,
    };
    const newRole = [...data, roles];

    if (name === "" && role === "") {
      alert("Enter name and role");
    } else {
      setData(newRole);
    }
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    AddRole(name, role);
    close();
  };
  return (
    <div className="w-[100vw] h-[100vh] absolute top-[-20px] left-0 flex justify-center items-center bg-backdrop">
      <div className="relative bg-white h-[23rem] shadow-[#d1d1d1] border-[2px] border-light w-[30rem] p-10 rounded-[10px]">
        <span
          onClick={close}
          className="absolute top-4 right-4 font-[800] cursor-pointer p-[16px] flex items-center-justify-center"
        >
          X
        </span>
        <form
          action=""
          className="flex flex-col gap-12"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-[600] text-[24px]">
                Name
              </label>
              <input
                type="text"
                onChange={(ev) => setName(ev.target.value)}
                className="w-[25rem] h-[40px] pl-2 rounded-[5px] outline-none border-[2px] border-light"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="role" className="font-[600] text-[24px]">
                Role
              </label>
              <select
                name=""
                id="role"
                onChange={(ev) => setRole(ev.target.value)}
                className="w-[25rem] h-[40px] pl-2 rounded-[5px] outline-none border-[2px] border-light cursor-pointer"
              >
                <option value="" readonly>
                  --select--
                </option>
                <option value="Admin">Admin</option>
                <option value="Member">Member</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            value="Send"
            className="w-[25rem] h-[40px] pl-2 rounded-[5px] bg-primary text-white font-[600] border-none cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default ModalContainer;
