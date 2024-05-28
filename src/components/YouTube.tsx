import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type Props = {
  videoId: string;
  title?: string;
  children?: React.ReactNode;
};

export const YouTube = ({ videoId, title, children }: Props) => {
  return (
    <div>
      {children}
      <LiteYouTubeEmbed id={videoId} title={title || "YouTube video player"} />
    </div>
  );
};
