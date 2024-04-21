export const Callout = ({ children }) => (
  <div
    style={{
      backgroundColor: "var(--docusaurus-callout)",
      display: "flex",
      alignItems: "center",
      padding: "0.5rem",
    }}
  >
    <span>{children}</span>
  </div>
);
