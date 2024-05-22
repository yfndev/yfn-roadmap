import React from "react";

export const ImageFloat = ({ source, text, children }) => (
  <div
    style={{
      padding: "0.5rem",
    }}
  >
    <div
      style={{
        backgroundColor: "var(--ifm-color-primary)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        width: "15rem",
        border: "1px solid black",
        float: "right",
        marginLeft: "1rem",
      }}
    >
      <img
        style={{
          width: "100%",
          border: "1px solid black",
          marginBottom: "1rem",
        }}
        src={source}
        alt={text}
      />
      <p className="text">{text}</p>
    </div>
    {children}
  </div>
);
