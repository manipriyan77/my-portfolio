import AboutMe from "@/components/About";
import Banner from "@/components/Hero";
import Experiences from "@/components/Experience";
import ProjectList from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="container px-8 md:px-0">
      <Banner />
      <AboutMe />
      <Skills />
      <Experiences />
      <ProjectList />
    </div>
  );
}
