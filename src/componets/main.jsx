/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import style from "./styles.module.css";
import { Сatalog } from "./Pages/Сatalog";
import { Home } from "./Pages/home/";
import { Contact } from "./Pages/Contact";
import { Soon } from "./Pages/Soon";
import { Customers } from "./Pages/Customers";
import { Notfoundpage } from "./Pages/Notfoundpage";
import { useGeo } from "../hooks/useGeo";

export default function Chelka() {
  const [city, setCity] = useState(localStorage.getItem("city"));
  const geo = useGeo();

  useEffect(() => {
    if (!geo.lat && !geo.lon) return;

    (async () => {
      const URL2 = `
      https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${geo.lat}&longitude=${geo.lon}&localityLanguage=ru`;
      const res = await fetch(URL2).then((response) => response.json());

      if (res.city) {
        localStorage.setItem("city", res.city);
        setCity(res.city);
      }
    })();
  }, [geo.lat, geo.lon]);

  return (
    <>
      <header className={style.chelka}>
        Ваш город <u>{city}</u>
        <div className={style.logo}>
          <Link className={style.logo_a} to="/">
            DLVB
          </Link>
        </div>
        <div className={style.menu}>
          <Link className={style.buuttoncolor} to="/catalog">
            Каталог
          </Link>
          <Link className={style.buuttoncolor} to="/Soon">
            Скоро в продаже
          </Link>
          <Link className={style.buuttoncolor} to="/Customers">
            Покупателям
          </Link>
          <Link className={style.buuttoncolor} to="/Contact">
            Контакты
          </Link>
        </div>
      </header>
      <div className={style.wrapper}>
        <div className={style.page}>
          <Routes>
            <Route path="/catalog" element={<Сatalog />} />
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Soon" element={<Soon />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="*" element={<Notfoundpage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

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
      <div style={{ textAlign: "center" }}>
        <img
          src={images[currentImageIndex]}
          alt="slide"
          style={{ maxWidth: "100%", maxHeight: "100vh" }}
        />
      </div>
    </div>
  );
};

const ImageSlider = () => {
  const images = [
    "image16.jpg",
    "image17.jpg",
    "image18.jpg",
    "image19.jpg",
    // Добавьте свои URL-адреса изображений здесь
  ];

  return (
    <>
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
        <a className={style.text}> Новинки</a>
      </div>
      <div className={style.text2}>О проекте</div>
      <div> </div>
    </>
  );
};
