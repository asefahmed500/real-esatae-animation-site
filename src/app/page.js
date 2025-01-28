import CaseStudy from "@/components/CaseStudy/CaseStudy";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Hero from "@/components/NavBar/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Work from "@/components/Work/Work";
import Team from "@/components/Team/Team";
import Expertise from "@/components/Expertise/Expertise";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";


export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar></NavBar>
      <Hero></Hero>
      <FeaturedWork></FeaturedWork>
      <CaseStudy></CaseStudy>
      <Work/>
      <Team/>
      <Expertise></Expertise>
      <About></About>
      <Footer></Footer>


    </div>
  );
}
