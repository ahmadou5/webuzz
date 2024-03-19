import { Footer } from "@/components/Footer/Footer";
import { Home2 } from "@/components/Home";
import { Navbar2 } from "@/components/Navbar/new";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:w-full w-full items-center">
      <Navbar2 />
      <Home2 />
      <div className="relative mt-0 flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-700 before:dark:opacity-10 after:dark:from-[#b99530] after:dark:via-[#ffbb01] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <Footer />
    </main>
  );
}
