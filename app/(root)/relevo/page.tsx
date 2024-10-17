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
        RELEVO
      </h1>
      <p className="text-[26px] text-black-3 mt-4">
        Tem o nome de coxilhas, é uma zona bastante homogênea, pouca declivosa e
        recortada formando planícies e colinas diversas. Os solos são geralmente
        férteis, o que favorece a agricultura e a pecuária. No entanto, a
        degradação do solo é uma preocupação crescente.
      </p>
      <Image
        src={"/images/campos.png"}
        width={500}
        height={500}
        alt="Campos do pampa"
        className="object-contain rounded-sm"
      />
      <p className="text-[1.25rem] text-black-3 mt-4">
        Campos da Campanha, a porção mais característica do Bioma Pampa no
        Brasil. 
      </p>

      <h1
        className="eef-title text-[5rem] text-yellow-400  font-extrabold 
        ml-40
        titleContainer"
      >
        CLIMA
      </h1>
      <p className="text-[26px] text-black-3 mt-4">
        É subtropical, com verões quentes e invernos frios, com chuvas muito bem
        distribuídas ao longo do ano. A temperatura média anual é de 18⁰C.
      </p>
     
    </div>
  );
};

export default page;
