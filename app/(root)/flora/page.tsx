import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-full ">
      <h1
        className="eef-title text-[5rem] text-yellow-400  font-extrabold 
        ml-40
        titleContainer"
      >
        Flora
      </h1>
      <p className="text-[26px] text-black-3 mt-4">
        É predominantemente campestre, formada por plantas herbáceas, o que
        inclui as gramíneas, e espécies arbustivas. As pastagens são muito
        comuns e há uma diversidade de flores silvestres.
      </p>
      <Image
        src={"/images/macela.png"}
        width={400}
        height={400}
        alt="Macela planta"
        className="object-contain rounded-sm"
      />
      <p className="text-[1.25rem] text-black-3 mt-4">
        Tradicionalmente utilizada como planta medicinal, a macela é conhecida
        por suas <strong>propriedades calmantes e anti-inflamatórias</strong>.
        No Pampa, ela cresce de forma abundante, colorindo o campo com suas
        pequenas flores douradas. 
      </p>
      <Image
        src={"/images/espinilho.png"}
        width={400}
        height={400}
        alt="Espinilho"
        className="object-contain rounded-sm"
      />
      <p className="text-[1.25rem] text-black-3 mt-4">
        O espinilho é uma árvore nativa do Bioma Bampa.
      </p>
      <Image
        src={"/images/barba-bode.png"}
        width={400}
        height={400}
        alt="Barba de bode"
        className="object-contain rounded-sm"
      />
      <p className="text-[1.25rem] text-black-3 mt-4">
        A barba-de-bode nativa é uma espécie endêmica do Bioma Pampa.
      </p>
      <Image
        src={"/images/hibisco.png"}
        width={400}
        height={400}
        alt="Hibísco"
        className="object-contain rounded-sm"
      />
      <p className="text-[1.25rem] text-black-3 mt-4">
        O hibisco-do-banhado é um subarbusto que ocorre em áreas alagadas e
        margens de rios e lagoas.
      </p>
    </div>
  );
};

export default page;
