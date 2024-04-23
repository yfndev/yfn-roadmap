export const ImageFloat = ({ source, text, children }) => (
  <div
    style={{
      padding: "0.5rem",
    }}
  >
    <div
      style={{
        backgroundColor: "var(--ifm-color-yfn)",
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
      <span style={{ fontWeight: "500" }}>{text}</span>
    </div>
    <span>{children}</span>
  </div>
);
