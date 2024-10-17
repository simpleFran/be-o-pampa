'use client'
import PlayButton from "@/components/PlayButton";
import React, { useState } from "react";

const Narrative = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    const audio = new Audio("/sounds/animals-song.wav");
    audio.play().then(() => {
      setIsPlaying(true); // Muda o estado para indicar que o som está tocando
    }).catch((error) => {
      console.log("Erro ao tocar o som:", error);
    });
  };

  return (
    <div>
      <h1>Bem-vindo à Narrativa</h1>
      <PlayButton/>
    </div>
  );
};

export default Narrative;
