import React, { useRef, useState } from "react";
import "./vídeos.css";

function Vídeos() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="videoPlayer"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946"
      ></video>
    </div>
  );
}

export default Vídeos;
