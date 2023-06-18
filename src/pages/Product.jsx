import React from "react";
import Container from "../util/Container";
import { product } from "../util/data";
const Product = () => {
  return (
    <Container>
      <h1 className="text-[32px] font-[800]">Product</h1>
      <table className="w-[58rem] h-[160px] border-2 border-light mt-[6rem] text-center">
        <thead className="h-[60px]">
          <tr>
            <th>NAME</th>
            <th>DATE CREATED</th>
            <th>PASS CONNECT</th>

            <th>ACTION</th>
          </tr>
        </thead>
        <tbody className="bg-white ">
          {product.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.product}</td>
                <td>{item.date}</td>

                <td className="cursor-pointer">
                  <p className="pl-[8rem]">{item.icon}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Product;
