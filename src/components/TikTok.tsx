import React, { useEffect } from "react";

export const TikTok = ({ source }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-min max">
      <blockquote
        className="tiktok-embed"
        cite={source}
        data-video-id="7049424535698836742"
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>
         
        </section>
      </blockquote>
    </div>
  );
};