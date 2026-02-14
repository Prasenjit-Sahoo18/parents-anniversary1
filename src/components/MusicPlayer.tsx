import { useEffect } from "react";

interface MusicPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const MusicPlayer = ({ audioRef }: MusicPlayerProps) => {
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.loop = true;
    el.volume = 0.5;
    // Don't auto-play here; let App.tsx handle user interaction
  }, [audioRef]);

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
