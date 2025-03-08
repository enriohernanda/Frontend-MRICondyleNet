import About from '@/components/main/About';
import Acknowledgment from '@/components/main/Acknowledgement';
import Segmentation from '@/components/main/features/Segmentation';
import Footer from '@/components/main/Footer';
import Hero from '@/components/main/Hero';
import Model from '@/components/main/Model';
import Navbar from '@/components/main/Navbar';
import OurTeam from '@/components/main/OurTeam';
import Publication from '@/components/main/Publication';

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#161D6F] via-[#0B2F9F] to-[#000000] lg:pt-20">
      <Navbar />
      <div className="flex flex-col gap-10 md:gap-20 w-full">
        <Hero />
        <div id="About" className="w-full">
          <About />
        </div>
        <div id="AI-Model" className="w-full">
          <Model />
        </div>
        <div id="Features" className="w-full">
          <Segmentation />
        </div>
        <div id="Acknowledgment" className="w-full">
          <Acknowledgment />
        </div>
        <div id="Publication" className="w-full">
          <Publication />
        </div>
        <div id="Our-Team">
          <OurTeam />
        </div>
      </div>
      <Footer />
    </main>
  );
}
