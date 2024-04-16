import React from "react";
import style from "./Customers.module.css";

export function Customers() {
  return (
    <>
      <div className={style.text}>Оформление заказа</div>
      <div>
        <div className={style.poloska} />
        <div className={style.text2}>
          <div className={style.steps}>
            <div className={style.circle}>1</div>
            <div className={style.content}>
              <div>Оформление заказа</div>
              <div>Вы выберите любую позицию из каталога и оформите заказ</div>
            </div>
          </div>
          <div className={style.steps}>
            <div className={style.circle}>2</div>
            <div className={style.content}>
              <div>Подтверждение заказа</div>
              <div>
                Мы свяжемся с вами для уточнения деталей заказа и его
                подтверждения
              </div>
            </div>
          </div>
          <div className={style.steps}>
            <div className={style.circle}>3</div>
            <div className={style.content}>
              <div>Информация об оплате</div>
              <div>
                Мы высылаем вам всю платежную информацию в удобном для вас
                мессенджере или по эл. почте, после чего вы сможете оплатить
                заказ
              </div>
            </div>
          </div>
          <div className={style.steps}>
            <div className={style.circle}>4</div>
            <div className={style.content}>
              <div>Доставка</div>
              <div>
                Далее мы бережно собираем и отправляем вам посылку, либо готовим
                её к самовывозу
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.text}>Доставка заказа</div>
      <div>
        <div className={style.poloska} />
        <div className={style.text3}>
          <div className={style.colortext}> Со склада в Владивостка</div>
          <div className={style.colortext}>Под заказ</div>

          <div>
            При оформлении заказа до 18:00 доставка со склада осуществляется на
            следующий день или в другое удобное время.
          </div>
          <div>
            Все подробности доставки специальных заказов расскажет менеджер.
          </div>
          <div className={style.colortext2}>
            По Владивостоку в пределах города доставка осуществляется
            Яндекс-курьером. За пределы - 750₽
          </div>
          <div className={style.colortext2}>
            Цены указаны с учетом доставки до нашего склада во Воадивостоке!
          </div>
        </div>
      </div>
    </>
  );
}
