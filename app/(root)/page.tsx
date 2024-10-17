"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PlayButton from "@/components/PlayButton";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Para garantir que o código seja executado apenas no cliente

  useEffect(() => {
    setIsMounted(true); // Marca que o componente foi montado no lado do cliente
  }, []);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!isMounted) {
    return null; // Evita renderizar até que o cliente seja montado
  }

  return (
    <div className="max-w-4xl mx-auto ">
      <h1 className="px-12 feef-title text-[5rem] text-yellow-400 font-extrabold titleContainer">
        bioma pampa
      </h1>

      {/* Resumo do aplicativo */}
      <div className="bg-green-10 text-white rounded-lg py-6 px-12 mb-1 cursor-pointer hover:bg-[#16a34a] flex items-center justify-normal">
        <button onClick={handlePlayClick}>
          {/* PlayButton substituído por um botão que controla o modal */}
          <PlayButton />
        </button>
        <Link href={"/narrative"}>
          <h1 className="ml-3 text-2xl font-bold">
            Resumo do Aplicativo <br />
            NARRATIVA
          </h1>
        </Link>
      </div>

      {/* Modal com o vídeo */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-white rounded-lg p-6 relative w-full max-w-2xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              X {/* Botão para fechar o modal */}
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <video controls className="w-full h-full">
                <source src="/videos/tuca-merged.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Informações */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-10 rounded-lg shadow-inner p-8 text-center">
            <Link href="/fauna">
              <h2 className="text-2xl font-semibold">Fauna</h2>
            </Link>
          </div>
          <div className="bg-green-10 rounded-lg shadow-inner p-8 text-center">
            <Link href="/relevo">
              <h2 className="text-2xl font-semibold">Relevo e Clima</h2>
            </Link>
          </div>
          <div className="bg-green-10 rounded-lg shadow-inner p-8 text-center">
            <h2 className="text-2xl font-semibold">
              <Link href="/conservation">Conservação e Conscientização</Link>
            </h2>
          </div>
          <div className="bg-green-10 rounded-lg shadow-inner p-8 text-center">
            <Link href="/flora">
              <h2 className="text-2xl font-semibold">Flora</h2>
            </Link>
          </div>
        </div>
        <div className="bg-green-10 rounded-lg shadow-inner p-8 text-center mt-6">
          <Link href="/quiz">
            <h2 className="text-2xl font-semibold">Quiz</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
