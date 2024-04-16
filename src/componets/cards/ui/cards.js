import React from "react";
import style from "./cards.module.css";

export const CardsUI = () => {
  return (
    <div className={style.cards}>
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
    </div>
  );
};

export const CardUI = () => {
  return (
    <div className={style.card}>
      <img src="https://nike-air-force1.com/image/cache/catalog/AF1/WhiteVolt/OFF-WHITE-x-Nike-Air-Force-1-Low-Volt-2-2-1200x600.jpg" />
      <div className={style.title}>Ебейшие кроссовки офф-вайт</div>
      <div className={style.subtitle}>Про них говорил lil krystal</div>
      <div className={style.price}>тысяча ... 100 писят шесть тысяч ₽</div>
      <button className={style.button}>Приобрести</button>
    </div>
  );
};
