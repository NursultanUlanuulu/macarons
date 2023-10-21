import React from "react";
import cycle from "../assets/img/delivery/cycle.png";
import leaf from "../assets/img/delivery/leaf.png";
import makaron1 from "../assets/img/delivery/makaron1.png";
import makaron2 from "../assets/img/delivery/makaron2.png";
import vector from "../assets/img/delivery/Vector.png";
import layer1 from "../assets/img/delivery/Layer 35 1.png";
import layer2 from "../assets/img/delivery/Layer 34 1.png";
import map from "../assets/img/delivery/map.png";
import bgImg from "../assets/img/delivery/backgroundImg.png";
import styles from "../pages_style/Delivery.module.css";
const Delivery = () => {
  return (
    <div>
      <div className={styles.dostavkaBlock}>
        <span>
          <img className={styles.cycle} src={cycle} alt="" />
          <img className={styles.leaf} src={leaf} alt="" />
          <img className={styles.makaron2} src={makaron2} alt="" />
          <img className={styles.makaron1} src={makaron1} alt="" />
        </span>

        <div className={styles.dostavkaText}>
          <h2>Доставка и оплата</h2>
          <p>
            Для наших покупателей доступны 2 способа доставки: курьерская
            доставка по Санкт-Петербургу в пределах КАД и самовывоз.
          </p>
          <h5>Курьерска доставка:</h5>
          <ul className={styles.ul}>
            <li>
              Курьеры работают каждый день с 11 до 21 часа. Доставка макарон
              осуществляется только по Санкт-Петербургу в пределах кольцевой
              автомобильной дороги (КАД).
              <span style={{ color: "red", fontSize: "16px" }}>
                {" "}
                Точная зона доставки.
              </span>{" "}
            </li>
            <li>
              Если Вы готовы принять заказ в интервале с 12 до 17 часов или с 17
              до 21 часа, то доставка будет стоить 300 рублей.{" "}
            </li>
            <li>При заказе от 3000 рублей доставка БЕСПЛАТНАЯ.</li>
            <li>
              При оформлении заказа до 15 часов возможна доставка в тот же день
              в промежутке с 17 до 21 часа
            </li>
            <li>Курьер предупредит Вас о своём прибытии за 30-40 минут.</li>
          </ul>
        </div>
      </div>
      <div className={styles.bgImg}>
        <img src={bgImg} alt="" />
      </div>

      <div className={styles.dostavkaBlock2}>
        <div className={styles.scBlockText}>
          <h3>Самовывоз</h3>
          <ul>
            <li>
              Вы можете сделать заказ и забрать его самостоятельно с нашего
              производства по адресу: ул. Маршала Тухачевского 22 БЦ Сова.
            </li>
            <li>
              Заказ необходимо сделать до 20 часов, чтобы забрать его на
              следующий день в пункте самовывоза в любое удобное время в
              промежутке с 13 до 22 часов.
            </li>
            <li>
              Оплатить заказ банковской картой можно заранее при оформлении.
              Непосредственно при получении банковской картой расплатиться
              нельзя.
            </li>
          </ul>
          <h3 style={{ paddingTop: "15px" }}>Оплата</h3>
          <ul>
            <li>
              Вы можете оплатить заказ при получении наличными или заранее
              оплатить заказ банковской картой. Для этого укажите выбранный
              способ при оформлении заказа.
            </li>
            <li>
              Оплата банковской картой удобна, если вы хотите отправить десерты
              в подарок или не желаете возиться с наличными при получении
              заказа.
            </li>
            <li>
              Если у Вас нет карты российского банка, мы можем принять оплату
              через платёжную систему PayPal.
            </li>
          </ul>
        </div>

        <div className={styles.scBlockImg}>
          <img className={styles.vector} src={vector} alt="" />
          <img className={styles.layer1} src={layer1} alt="" />
          <img className={styles.layer2} src={layer2} alt="" />
        </div>
      </div>
      <img className={styles.mapImg} src={map} alt="" />
    </div>
  );
};

export default Delivery;
