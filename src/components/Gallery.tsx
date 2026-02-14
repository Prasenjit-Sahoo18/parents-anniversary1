import { useEffect, useState } from "react";

const images = [
  "/photos/photo1.png",
  "/photos/photo2.png",
  "/photos/photo3.png",
  "/photos/photo4.png",
  "/photos/photo5.png",
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section">
      <h2 className="title">Our Beautiful Moment</h2>
      <div className="glass" style={{ marginTop: 20 }}>
        <img
          src={images[index]}
          className="gallery-img"
          alt={`memory-${index}`}
          style={{ width: "400px", maxWidth: "90%", borderRadius: "20px" }}
        />
      </div>
    </div>
  );
};

export default Gallery;
