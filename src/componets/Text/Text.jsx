import React, { useEffect, useRef } from "react";
import style from "./Text.module.css";

const MovingText = () => {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    const leftTextElem = leftTextRef.current;
    const rightTextElem = rightTextRef.current;
  }, []);

  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div ref={leftTextRef}>
          <h1 className={style.tag}>Лимитированные кроссовки</h1>
        </div>
        <div ref={rightTextRef}>
          <h1 className={style.tag2}>
            ваших <a className={style.tag3}>любимых </a> брендов
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MovingText;
