import "../scss/components/_music-player.scss";
import { FaPause } from "react-icons/fa6";
import { IoIosSkipForward, IoIosSkipBackward } from "react-icons/io";

const MusicPlayer = (props) => {
  return (
    <div className="music-player">
      <p>{props.text}</p>
      <div className={`${props.className} music-bg-cycle`}></div>
      <div className="icons-container">
        <IoIosSkipBackward className="icon" />
        <FaPause className="icon" />
        <IoIosSkipForward className="icon" />
      </div>
    </div>
  );
};

export default MusicPlayer;
