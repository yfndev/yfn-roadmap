import React from "react";

export const ImageFloat = ({ source, text, children }) => (
  <div className=" p-5">
    <div className=" bg-primary text-black p-4 flex flex-col w-4 border  stroke-1 float-right ml-4">
      <img className="w-full border stroke-1 mb-4" src={source} alt={text} />
      <span style={{ fontWeight: "500" }}>{text}</span>
    </div>
    <span>{children}</span>
  </div>
);
