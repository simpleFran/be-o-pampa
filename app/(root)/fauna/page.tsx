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
        Fauna
      </h1>
      <p className="text-[26px] text-black-3 mt-4">
        O Pampa abriga diversas espécies de fauna, incluindo mamíferos como
        capivaras e tatus, roedores, canídeos além de aves como o Quero-Quero e
        a Perdiz. A diversidade de insetos também é significativa.
      </p>
      <Image
        src={"/images/capivara.png"}
        width={400}
        height={400}
        alt="Macela planta"
        className="object-contain rounded-sm"
      />
      <p className="text-[1.25rem] text-black-3 mt-4">
        O <strong>maior roedor do mundo</strong>, a capivara é um animal
        sociável que vive em grupos e se adapta bem ao ambiente do
        Pampa. Encontradas próximas a rios e lagos, essas criaturas herbívoras
        são fundamentais para o ecossistema, pois ajudam a controlar a vegetação
        e servem como presas para predadores locais.
      </p>
      <Image
        src={"/images/tatu.png"}
        width={400}
        height={400}
        alt="Tatu-molita"
        className="object-contain rounded-sm"
      />
      <p className="text-[1.25rem] text-black-3 mt-4">
        O tatu-mulita é um pequeno mamífero facilmente encontrado nas planícies
        do Pampa. Com sua carapaça característica, ele cava tocas no solo para
        se abrigar e buscar alimentos, como insetos e pequenos invertebrados.
      </p>
      <Image
        src={"/images/guara.png"}
        width={400}
        height={400}
        alt="Lobo Guará"
        className="object-contain rounded-sm"
      />
      <p className="text-[1.25rem] text-black-3 mt-4">
        <strong>Lobo-guará:</strong> Um dos maiores canídeos da América do Sul,
        conhecido por sua pelagem distinta e hábitos solitários.
      </p>
      <Image
        src={"/images/tuco-tuco.jpg"}
        width={400}
        height={400}
        alt="Tuco-tuco"
        className="object-contain rounded-sm"
      />
      <p className="text-[1.25rem] text-black-3 mt-4">
        O tuco-tuco é um roedor nativo da América do Sul, especialmente encontrado
        no Bioma Pampa.
      </p>
    </div>
  );
};

export default page;
