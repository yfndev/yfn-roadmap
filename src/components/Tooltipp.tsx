import Link from "@docusaurus/Link";

export const Tooltipp = ({
  toolName,
  toolDescription,
  toolSource,
  tutorialSource,
  buttonText,
}) => (
  <div
    style={{
      padding: "1rem",
      border: "2px solid black",
    }}
  >
    <h3 style={{ fontSize: "20px" }}>Tooltipp: {toolName}</h3>
    <p>{toolDescription}</p>
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        gap: "1rem",
      }}
    >
      {tutorialSource && ( <Link to={tutorialSource}><button>Tutorial anschauen</button></Link>)}
      <Link to={toolSource}>
      <button>{buttonText}</button>
      </Link>
    </div>
  </div>
);
