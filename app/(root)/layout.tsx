"use client";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Obtem o pathname atual
  const isHomePage = pathname === "/";

  return (
    <div className="relative flex flex-col ">
      {/* <main className="relative flex bg-green-50"> */}
      <main
        className={`relative flex ${
          isHomePage
            ? "bg-[url(/images/bg-forest.jpg)] bg-cover bg-center" // Define o background com imagem na home
            : "bg-green-50" // Define uma cor de fundo nas outras páginas
        }`}
      >
        <section className="flex min-h-screen flex-1 px-4 sm:px-14">
          <div className="text-white-1 mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            {/* <div className="flex flex-col md:pb-14 my-auto"> */}
            <div className="flex flex-col md:pb-14">
              {/* Toaster notification went of shadcn ui*/}

              {children}
            </div>
          </div>
        </section>
      </main>
      {/* Rodapé aparece em todas as páginas exceto a home */}
      {!isHomePage && (
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p className="text-2xl">
            <a href="/" className="text-yellow-400 hover:underline">
              Voltar para página inicial
            </a>
          </p>
        </footer>
      )}
    </div>
  );
}
