import React from "react";
import Image from "next/image"
// import axios from "axios";

export const ManageProduct = ({products}) => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/4">
        <h1>Manage Products</h1>
        <p>Please Perform only necessary Actions</p>
      </div>
      {products.map(product => {
        return (
          <div>
            <h1>{product.color}{product.product}</h1>
            <Image src = {`data:image/jpeg;base64,${product.ImageUrl[0]}`} height = {60} width = {60}></Image>
          </div>
        )
      })}
      <div className="flex-grow">
        <h1>Products View</h1>
      </div>
    </div>
  );
};

