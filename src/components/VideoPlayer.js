const VideoPlayer = ({ tmdbId }) => {
  const rivestreamUrl = `https://rivestream.live/embed?type=movie&id=${tmdbId}`;

  return (
    <div>
      <iframe
        src={rivestreamUrl}
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;