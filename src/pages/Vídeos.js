import React, { useRef, useState } from "react";
import VídeoFooter from "./components/footer/VídeoFooter"
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
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
      ></video>
      {/* side bar */}
      <VídeoFooter />
    </div>
  );
}

export default Vídeos;
