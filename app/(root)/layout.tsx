
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-biopampa">
        <section className="flex min-h-screen flex-1 px-4 sm:px-14">
          <div className="text-white-1 mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            {/* <div className="flex h-16 items-center justify-between md:hidden">
              <Image
                src={"/icons/logo.svg"}
                width={30}
                height={30}
                alt="menu icon"
              />
              <MobileNav />
            </div> */}

            {/* <div className="flex flex-col md:pb-14 my-auto"> */}
            <div className="flex flex-col md:pb-14">
              {/* Toaster notification went of shadcn ui*/}

              {children}
            </div>
          </div>
        </section>

        {/* <RighSidebar /> */}
      </main>
    </div>
  );
}
