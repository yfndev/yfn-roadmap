import { Video } from "./Video";

export const VideoFloat = ({ sourceId, text, children }) => (
  <div
    className="flex items-center mb-4 flex-row"
   
  >
    <div className="mr-4 flex-1" >
      <Video sourceId={sourceId} />
    </div>
    <div style={{ flex: 1 }}>
      {text && (
        <p className=" font-bold mb-2" >{text}</p>
      )}
      {children}
    </div>
  </div>
);
