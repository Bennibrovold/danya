import React, { useEffect } from "react";
import { ImageSlider } from "../../Slaider/Slaider";
import MovingText from "../../Text/Text";
import style from "./home.module.css";

export function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <MovingText />
        <ImageSlider />
        <div className={style.wrapper}>
          <div className={style.container}>
            <h1>Новинки</h1>
            <h3>Жопа жопа жопа...</h3>

            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>

            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
