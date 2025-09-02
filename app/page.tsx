import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import About from "@/components/main/About";
import Certificates from "@/components/main/Certificates";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 sm:gap-16 md:gap-20">
        <Hero/>
        <About/>
        <Skills/>
        <Encryption/>
        <Projects/>
        <Certificates/>
      </div>
    </main>

  );
}
