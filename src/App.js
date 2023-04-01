import "./App.css";
import Vídeo from "./pages/Vídeos"

function App() {
  return (
    <div className="App">
      <div className="appVideos">
        <Vídeo 
          likes={111}
          messages={222}
          shares={333}
          name="Mayra"
          description="Gatinho goleiro"
          music="Música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Vídeo 
          likes={1}
          messages={2}
          shares={3}
          name="Mayra"
          description="Gatinho seguindo o dedo"
          music="Não sei"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/bird.mp4?alt=media&token=52abbeec-ff95-4acb-808e-5a4b4977d1da"

        />
      </div>
    </div>
  );
}

export default App;
