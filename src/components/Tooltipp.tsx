import Link from "@docusaurus/Link";

export const Tooltipp = ({
  toolName,
  toolDescription,
  toolSource,
  tutorialSource,
  buttonText,
}) => (
  <div className="flex flex-col p-4 border-2 border-black">
    <h3 className=" text-xl  font-semibold">Tooltipp: {toolName}</h3>
    <p>{toolDescription}</p>
    <div className="flex flex-row mt-4 justify-start gap-4">
      {tutorialSource && (
        <Link to={tutorialSource}>
          <button>Tutorial anschauen</button>
        </Link>
      )}
      <Link to={toolSource}>
        <button>{buttonText}</button>
      </Link>
    </div>
  </div>
);