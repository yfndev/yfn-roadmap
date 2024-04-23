import { Video } from "./Video";

export const VideoFloat = ({ sourceId, text, children }) => (
  <div style={{ display: "flex", flexDirection:"row", alignItems: "center", marginBottom: "1rem" }}>
    <div style={{ marginRight: "1rem", flex: 1 }}>
      <Video sourceId={sourceId} />
    </div>
    <div style={{ flex: 1 }}>
      {text && (
        <p style={{ fontWeight: "bold", marginBottom: "0.5rem", }}>
          {text}
        </p>
      )}
      {children}
    </div>
  </div>
);