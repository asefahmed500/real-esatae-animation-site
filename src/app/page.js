import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Hero from "@/components/NavBar/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";


export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar></NavBar>
      <Hero></Hero>
      <FeaturedWork></FeaturedWork>


    </div>
  );
}
