import Link from "@docusaurus/Link";

export const Tooltipp = ({
  toolName,
  toolDescription,
  toolSource,
  tutorialSource,
  buttonText,
}) => (
  <div className="padding-4 border-2 border-black">
    <h3 className=" text-xl">Tooltipp: {toolName}</h3>
    <p>{toolDescription}</p>
    <div className="flex justify-start gap-4">
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
