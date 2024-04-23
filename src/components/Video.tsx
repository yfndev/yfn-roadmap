export const Video = ({ sourceId, time }) => {
  // time in seconds
  const timeStamp = time ? `;start=${time}` : "";

  return (
    <div>
      <iframe
        width="100%"
        height="200"
        // source id is slug after /watch?v= in youtube video URL
        src={`https://www.youtube.com/embed/${sourceId}?si=ie2PDsvpgy0gmAaE${timeStamp}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
