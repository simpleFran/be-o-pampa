'use client'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useEffect } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // useEffect(() => {
  //   // Cria o objeto de áudio com o arquivo desejado
  //   const newAudio : HTMLAudioElement = new Audio("/sounds/animals-song.wav");
  //   setAudio(newAudio);
  // }, []);

  const togglePlayPause = () => {

    if (!audio) return; // Certifica que o áudio foi criado antes de tentar tocar ou pausar

    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <button onClick={togglePlayPause} className="text-yellow-2 text-[2rem]">
      {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
    </button>
  );
};

export default PlayButton;
