import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ position: 'fixed', right: 20, bottom: 30, zIndex: 60, padding: '12px 14px', borderRadius: 12, border: 'none', background: 'linear-gradient(90deg,var(--accent),#ffd1e8)', color: '#111' }}
      aria-label="back-to-top"
    >
      ↑ Top
    </button>
  );
};

export default BackToTop;
