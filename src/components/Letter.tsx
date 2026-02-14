import { motion } from "framer-motion";
import React from "react";

const Letter = () => {
  const celebrate = () => {
    const ev = new CustomEvent('launchConfetti', { detail: {} });
    window.dispatchEvent(ev);
  };

  return (
    <div className="section">
      <h2 className="title">A Letter From Your Son</h2>
      <motion.div
        className="glass"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ marginTop: "20px" }}
      >
        <p>
          Dear Bapa and Ma,
          <br /><br />
          Thank you for your endless love, strength, and sacrifices.
          Because of you, I believe in true love.
          I am proud to be your son.
          <br /><br />
          Happy Anniversary to the most amazing parents in the world ❤️
        </p>
        <div style={{ marginTop: 16 }}>
          <button onClick={celebrate} style={{ padding: '10px 14px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#111' }}>
            Celebrate 🎉
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Letter;
