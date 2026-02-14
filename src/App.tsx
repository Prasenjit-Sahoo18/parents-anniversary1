import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Memories from "./components/Memories";
import Letter from "./components/Letter";
import Footer from "./components/Footer";
import HeartsBackground from "./components/HeartsBackground";
import MusicPlayer from "./components/MusicPlayer";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import ThemeToggle from "./components/ThemeToggle";
import BackToTop from "./components/BackToTop";
import Confetti from "./components/Confetti";

function App() {
  return (
    <>
      <HeartsBackground />
      <MusicPlayer />
      <ThemeToggle />
      <Hero />
      <Timeline />
      <Memories />
      <Gallery />
      <Countdown />
      <Letter />
      <Footer />
      <Confetti />
      <BackToTop />
    </>
  );
}

export default App;
