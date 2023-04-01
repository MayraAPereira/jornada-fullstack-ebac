import React, { useRef, useState } from "react";
import VídeoFooter from "./components/footer/VídeoFooter"
import VídeoSidebar from "./components/sidebar/VídeoSidebar"
import "./vídeos.css";

function Vídeos({likes, messages, shares, name, description, music, url}) {
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
        src={url}
      ></video>
      < VídeoSidebar 
      likes={likes}
      messages={messages}
      shares={shares}
      />
      <VídeoFooter 
      name={name}
      description={description}
      music={music}
  />
    </div>
  );
}

export default Vídeos;
