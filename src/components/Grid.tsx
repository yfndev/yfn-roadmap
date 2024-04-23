import React from "react";

export const Grid = ({ children }) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",

      }}
    >
      {children}
    </div>
  );