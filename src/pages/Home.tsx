import VisionGrid from '../components/VisionGrid';
import About from '../components/sections/About/index';
import FAQ from '../components/sections/FAQ';
import Team from '../components/sections/Team';
import Info from '../components/sections/Info';
import Events from '../components/sections/Events';



export default function Home() {
  return (
    <main className="flex-grow">
      <section id="home">
        <VisionGrid />
      </section>
      <About />
      <Events />
      <FAQ />
      <Team />
      <Info />
    </main>
  );
}