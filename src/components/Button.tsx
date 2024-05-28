import Link from "@docusaurus/Link";
import React from "react";

export const Button = ({ children, destination }) => (
  <Link to={destination} className="link-no-underline">
    <button>{children}</button>
  </Link>
);
