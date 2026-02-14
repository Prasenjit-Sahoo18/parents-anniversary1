import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    if (!dark) {
      document.documentElement.style.setProperty('--bg-1', '#fff8e7');
      document.documentElement.style.setProperty('--bg-2', '#ffe8e8');
      document.documentElement.style.setProperty('--accent', '#c41e3a');
      document.documentElement.style.setProperty('--glass-bg', 'rgba(255,248,231,0.7)');
      document.documentElement.style.setProperty('--glass-shadow', 'rgba(196,30,58,0.12)');
      document.documentElement.style.color = '#2d1414';
    } else {
      document.documentElement.style.setProperty('--bg-1', '#1a0a0a');
      document.documentElement.style.setProperty('--bg-2', '#2d1414');
      document.documentElement.style.setProperty('--accent', '#e63946');
      document.documentElement.style.setProperty('--glass-bg', 'rgba(255,248,231,0.08)');
      document.documentElement.style.setProperty('--glass-shadow', 'rgba(230,57,70,0.15)');
      document.documentElement.style.color = '';
    }
  }, [dark]);

  return (
    <div style={{ position: 'fixed', left: 20, top: 20, zIndex: 60 }}>
      <button
        aria-label="toggle-theme"
        onClick={() => setDark(d => !d)}
        style={{ padding: 10, borderRadius: 999, border: 'none', background: 'rgba(255,255,255,0.04)', color: dark ? 'white' : '#2d1414' }}
      >
        {dark ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default ThemeToggle;
