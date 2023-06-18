import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomerModal from "../components/CustomerModal";
import Container from "../util/Container";

const Customer = () => {
  const [openViewModal, setOpenViewModal] = useState(false);
  const [view, setView] = useState(false);
  const customer = useSelector((state) => state.custom);

  const handleView = () => {
    setView(true);
    setOpenViewModal(false);
  };

  return (
    <>
      <Container>
        <h1 className="text-[32px] font-[800]">Customer</h1>
        <table className="w-[62rem] h-[160px] border-2 border-light mt-[6rem] text-center ">
          <thead className="h-[60px]">
            <tr>
              <th>NAME</th>
              <th>DATE CREATED</th>
              <th>PASS CONNECT</th>
              <th>EMAIL ID</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {customer.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.email}</td>
                  <td
                    className="cursor-pointer "
                    onClick={() => setOpenViewModal(true)}
                  >
                    {openViewModal && (
                      <ul className="absolute right-12 transition ease-in-out delay-150  font-[500] bottom-[6rem] border-[2px] border-light bg-white w-[6rem] h-[8rem] flex flex-col items-center justify-center gap-3">
                        <li className="hover:text-primary" onClick={handleView}>
                          View
                        </li>
                        <li className="hover:text-primary">Disactive</li>
                        <li className="hover:text-primary">Activate</li>
                      </ul>
                    )}
                    <p className="pl-10">{item.icon}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
      {view && <CustomerModal setOpen={setView} setView={setOpenViewModal} />}
    </>
  );
};

export default Customer;
