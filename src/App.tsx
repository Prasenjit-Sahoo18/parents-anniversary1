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


import { useRef, useEffect } from "react";

function App() {
  // Ref to access MusicPlayer's audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Handler to play music on first user tap
    const playMusicOnTap = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        document.removeEventListener("touchstart", playMusicOnTap);
        document.removeEventListener("click", playMusicOnTap);
      }
    };
    document.addEventListener("touchstart", playMusicOnTap);
    document.addEventListener("click", playMusicOnTap);
    return () => {
      document.removeEventListener("touchstart", playMusicOnTap);
      document.removeEventListener("click", playMusicOnTap);
    };
  }, []);

  return (
    <>
      <HeartsBackground />
      {/* Pass ref to MusicPlayer for global control */}
      <MusicPlayer audioRef={audioRef} />
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
