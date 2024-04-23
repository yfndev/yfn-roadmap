export const Callout = ({ children }) => (
  <div
    style={{
      backgroundColor: "var(--background-light)",
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      paddingTop: "1rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",

    }}
  >
    <div style={{ alignSelf: "center" }}>{children}</div>
  </div>
);
