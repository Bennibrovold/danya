import React, { useState, useEffect } from "react";
import style from "./Slaider.module.css";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images]);

  return (
    <div className={style.box}>
      <div className={style.container} style={{ textAlign: "center" }}>
        <img
          src={images[currentImageIndex]}
          alt="slide"
          style={{ maxWidth: "100%", maxHeight: "100vh" }}
        />
      </div>
    </div>
  );
};

export const ImageSlider = () => {
  const images = [
    "image16.jpg",
    "image17.jpg",
    "image18.jpg",
    "image19.jpg",

    // Добавьте свои URL-адреса изображений здесь
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Slider images={images} />
      </div>
    </div>
  );
};
