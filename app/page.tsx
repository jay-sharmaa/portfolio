import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import ProjectTable from "@/components/main/ProjectTable";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero/>
        <Skills/>
        <Projects/>
        <ProjectTable/>
      </div>
    </main>
  );
}
