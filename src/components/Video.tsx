export const Video = ({ sourceId }) => (
  <div
    style={{
      padding: "0.5rem",
    }}
  >
    <iframe
      width="560"
      height="315"
      // source id is slug after /watch?v= in youtube video URL
      src={`https://www.youtube.com/embed/${sourceId}?si=ie2PDsvpgy0gmAaE`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
);