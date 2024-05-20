import Link from "@docusaurus/Link";
import React from "react";

export const Tooltipp = ({
  toolName,
  toolDescription,
  toolSource,
  tutorialSource,
  buttonText,
}) => (
  <div className="flex flex-col p-4 border-2   ">
    <h3 className="text-xl font-semibold">Tooltipp: {toolName}</h3>
    <p>{toolDescription}</p>
    <div className="flex flex-row mt-4 justify-start gap-4">
      {tutorialSource && (
        <Link to={tutorialSource} className="link-no-underline">
          <button>Tutorial anschauen</button>
        </Link>
      )}
      <Link to={toolSource} className="link-no-underline">
        <button style={{textDecoration: "none"}}>{buttonText}</button>
      </Link>
    </div>
  </div>
);
