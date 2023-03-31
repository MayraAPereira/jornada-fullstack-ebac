import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VídeosFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooterText">
        <h3>@maypontinho</h3>
        <p>Descrição do Vídeo</p>
        <div className="videoFooterMusic">
          <MusicNoteIcon className="videoFooterIcon" />
          <div className="videoFooterMusicText">
            <p>Título da música que parece que está correndo</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooterRecord"
        alt="Imagem de um vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da"
      />
    </div>
  );
}

export default VídeosFooter;
