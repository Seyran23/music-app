import "../scss/components/_music.scss";
import playNow from "../images/play-cycle.svg";
import MusicPlayer from "./MusicPlayer";

const Music = () => {
  return (
    <section className="music-sec">

      <div className="music-sec__content-container">
        <h1 className="music-sec__title">Play Now</h1>
        <img alt="play-now-logo" src={playNow} />
      </div>

      <div className="music-player__container">
        <MusicPlayer text="MOODS" className="purple" />
        <MusicPlayer text="WEATHER" className="blue" />
        <MusicPlayer text="TIME" className="orange" />
      </div>

      <div className="bg-cycle blue-cycle"></div>

    </section>
  );
};

export default Music;
