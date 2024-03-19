import { Footer } from "@/components/Footer/Footer";
import { Home2 } from "@/components/Home";
import { Navbar2 } from "@/components/Navbar/new";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black text-white flex-col items-center ">
      <Navbar2 />
      <Home2 />
     
    </main>
  );
}
