import React, { useEffect, useState } from "react";
import "./App.css";
import Vídeo from "./pages/Vídeos";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "vídeos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="appVideos">
        {video.map((item) => {
          return (
            <Vídeo
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Vídeo 
          likes={1}
          messages={2}
          shares={3}
          name="Mayra"
          description="Gatinho seguindo o dedo"
          music="Não sei"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/bird.mp4?alt=media&token=52abbeec-ff95-4acb-808e-5a4b4977d1da"

        /> */}
      </div>
    </div>
  );
}

export default App;
