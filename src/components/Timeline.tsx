import { motion } from "framer-motion";

const events = [
  "The Day Bapa met Ma 💞",
  "The Beautiful Wedding 💍",
  "Our Family Began 👶",
  "Years of Love & Strength 🌸"
];

const Timeline = () => {
  return (
    <div className="section">
      <h2 className="title">Their Journey</h2>
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3 }}
          className="glass"
          style={{ marginTop: "20px" }}
        >
          {event}
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
