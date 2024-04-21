export const Tooltipp = ({
  toolName,
  toolDescription,
  toolSource,
  tutorialSource,
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
      <button>Tutorial anschauen</button>
      <button>Zu {toolName}</button>
    </div>
  </div>
);
