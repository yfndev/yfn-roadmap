import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type Props = {
  url: string;
  title?: string;
};

const YouTube = ({ url, title }: Props) => {
  const urlParams = getQueryParams(url);
  console.log("id:", urlParams);
  return (
    <LiteYouTubeEmbed
      id={urlParams.v}
      title={title || "YouTube video player"}
    />
  );
};

const getQueryParams = (
  url: string
): {
  [key: string]: string;
} => {
  const regex = /[?&]([^=#]+)=([^&#]*)/g;
  const params = {};
  let match;
  while ((match = regex.exec(url))) {
    params[match[1]] = match[2];
  }
  return params;
};

export default YouTube;
