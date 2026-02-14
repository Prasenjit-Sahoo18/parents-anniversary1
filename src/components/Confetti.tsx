import { useEffect, useRef } from "react";

const Confetti = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let particles: any[] = [];
    const launch = (x = window.innerWidth / 2, y = window.innerHeight / 2) => {
      particles = Array.from({ length: 120 }).map(() => ({
        x, y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.8) * 12,
        size: Math.random() * 6 + 4,
        color: `hsl(${Math.floor(Math.random() * 360)},80%,60%)`,
        life: Math.random() * 60 + 60
      }));
    };

    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.3; p.life -= 1;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size, p.size * 0.8, 0, 0, Math.PI*2);
        ctx.fill();
      });
      particles = particles.filter(p => p.life > 0 && p.y < canvas.height + 50);
      requestAnimationFrame(draw);
    };

    draw();

    const handler = (e: Event) => {
      const ev = e as CustomEvent<{x?: number; y?: number}>;
      launch(ev?.detail?.x, ev?.detail?.y);
    };

    window.addEventListener('launchConfetti', handler as EventListener);

    return () => {
      window.removeEventListener('launchConfetti', handler as EventListener);
      window.removeEventListener('resize', resize);
      canvas.remove();
    };
  }, []);

  return null;
};

export default Confetti;
