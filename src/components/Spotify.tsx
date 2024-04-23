export const Spotify = ({ source }) => {
    const transformUrl = (url) => {
      return url.replace('https://open.spotify.com/', 'https://open.spotify.com/embed/') + '?utm_source=generator';
    };
  
    return (
      <div>
        <iframe
          src={transformUrl(source)}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    );
  };