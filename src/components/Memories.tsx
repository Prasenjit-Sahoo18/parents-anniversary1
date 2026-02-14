import { motion } from "framer-motion";

const memories = [
  "/photos/photo1.png",
  "/photos/photo2.png",
  "/photos/photo3.png",
  "/photos/photo4.png",
  "/photos/photo5.png",
];

const Memories = () => {
  return (
    <div className="section">
      <h2 className="title">Our Cherished Memory</h2>
      <motion.div
        className="glass"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: "20px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
            justifyContent: "center",
          }}
        >
          {memories.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt={`Memory ${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                width: "100%",
                maxWidth: "280px",
                borderRadius: "16px",
                objectFit: "cover",
                aspectRatio: "1",
              }}
            />
          ))}
        </div>
        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Every smile, every sacrifice, every blessing —
          <br />
          you both are my greatest gift. 💝
          <br />
          <br />
          This moment captures the eternal love and bond
          that has shaped my life forever.
        </p>
      </motion.div>
    </div>
  );
};

export default Memories;
