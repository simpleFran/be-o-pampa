import PlayButton from "@/components/PlayButton";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 ">
      <h1
        className="px-12 feef-title text-[5rem] text-yellow-400  font-extrabold 
        
        titleContainer
        "
      >
        bioma pampa
      </h1>
      {/* <!-- Resumo do aplicativo --> */}
      <div
        className="bg-green-10
       text-white
        rounded-lg py-6 px-12 mb-1 cursor-pointer
         hover:bg-[#16a34a]
         flex items-center justify-normal
              
        "
      >
        <PlayButton />
        {/* <Image
          src={"/images/tuca-oficial.png"}
          width={80}
          height={80}
          alt="Mascote Tuca" className="bg-opacity-0"
        /> */}
        <h1 className="ml-3 text-2xl font-bold ">
          Resumo do Aplicativo <br />
          NARRATIVA | FAUNA
        </h1>

        {/* <p className="text-xl  px-12 font-bold">NARRATIVA | FAUNA</p> */}
      </div>

      {/* <!-- Informações --> */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* <h2 className="text-2xl font-bold text-center mb-6">INFORMAÇÕES</h2> */}

        {/* transfornar a div abaixo em uma classe card_container */}
        <div className="grid grid-cols-2 gap-2">
          {/* transformar div + h2 em um component card */}
          <div className="bg-green-10 rounded-lg  shadow-inner p-8 text-center">
            <Link href={"/fauna"}>
              <h2 className="text-2xl font-semibold">Fauna</h2>
            </Link>
          </div>

          <div className="bg-green-10 rounded-lg shadow-inner p-8 text-center">
            <Link href={"/relevo"}>
              <h2 className="text-2xl font-semibold">Relevo e Clima</h2>
            </Link>
          </div>

          <div className="bg-green-10 rounded-lg shadow-inner p-8 text-center">
            <h2 className="text-2xl font-semibold">
              <Link href={"/conservation"}>Conservação e Conscientização</Link>
            </h2>
          </div>
          <div className="bg-green-10 rounded-lg shadow-inner p-8 text-center">
            <Link href={'/flora'}>
              <h2 className="text-2xl font-semibold">Flora</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
