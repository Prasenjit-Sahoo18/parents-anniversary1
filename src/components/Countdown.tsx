import { useEffect, useState } from "react";

const Countdown = () => {
  const anniversaryDate = new Date("2026-02-20T00:00:00");
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = anniversaryDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft("Happy Anniversary! 💝");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${mins}m ${secs}s`);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section">
      <h2 className="title">Next Celebration Countdown</h2>
      <div className="glass" style={{ marginTop: 20 }}>{timeLeft}</div>
    </div>
  );
};

export default Countdown;
