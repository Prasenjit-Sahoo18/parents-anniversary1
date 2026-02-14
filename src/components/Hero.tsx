import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="glass"
      >
        <h1 className="title">Happy Anniversary Bapa ❤️ Ma</h1>
        <p className="subtitle">Two beautiful souls, one eternal love story.</p>
      </motion.div>
    </div>
  );
};

export default Hero;
