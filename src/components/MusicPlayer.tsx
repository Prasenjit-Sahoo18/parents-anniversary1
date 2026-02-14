import { useRef, useEffect } from "react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    
    el.loop = true;
    el.volume = 0.5;
    
    const tryPlay = async () => {
      try {
        el.play().catch(err => {
          console.log("Autoplay blocked, waiting for user interaction:", err);
        });
      } catch (err) {
        console.error("Play error:", err);
      }
    };

    // Try to play immediately
    setTimeout(tryPlay, 500);

    // Also add listeners for user interaction as fallback
    const handleUserInteraction = () => {
      el.play().catch(err => console.error("Play error on interaction:", err));
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/Kesariya Tera Ishq Hai Piya-(Mr-Jat.in).mp3"
      preload="auto"
      crossOrigin="anonymous"
    />
  );
};

export default MusicPlayer;
