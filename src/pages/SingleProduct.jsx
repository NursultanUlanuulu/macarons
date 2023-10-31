import sp from "../assets/img/singleProduct/sp.png";
import a from "../assets/img/singleProduct/a.svg";
import style from "../pages_style/SingleProduct.module.css";
import { productDetalData } from "../utils/constants/constants";
import Like from "../components/like/Like";
import { useState } from "react";
const SingleProduct = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className={style.flex}>
        <div>
          <img src={sp} alt="" />
        </div>
        <div className={style.detal}>
          <div>
            <h1>Сердце</h1>
            <p>40 макаронс в круглой коробке с персональной надписью</p>
          </div>
          <div className={style.textFlex}>
            <div>
              <h3>Вкусы:</h3>
              <p>Яблоко </p>
              <p> Вишня </p>
              <p> Кокос </p>
            </div>
            <div>
              <p>4 шт.</p>
              <p>8 шт. </p>
              <p>12 шт.</p>
            </div>
          </div>
          <div className={style.price}>
            <h1>2800 руб</h1>
            <button className={style.btn}>
              <img src={a} alt="" />В корзину
            </button>
          </div>
          <div>
            {productDetalData.map((item) => (
              <div className={style.icon} key={item.id}>
                <img src={item.img} alt="" />
                <p className={style.dscr}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.prDscr}>
        <div className={style.navigate}>
          <ul>

          <li
            onClick={() => handleTabClick(0)}
            className={activeTab === 0 ? "active" : ""}
          >
            Описание
          </li>
          <li
            onClick={() => handleTabClick(1)}
            className={activeTab === 1 ? "active" : ""}
          >
            Cостав и пищевая ценность
          </li>
          <li
            onClick={() => handleTabClick(2)}
            className={activeTab === 2 ? "active" : ""}
          >
            Условия и срок хранения{" "}
          </li>
          </ul>
        </div>
        <div className={style.tab_content}>
          {activeTab === 0 && (
            <div>
              <p>
                Макароншоп — это пирожные макарон, изготовленные вручную из
                натуральных ингредиентов. Эффектная упаковка и оригинальная
                печать на макаронсах — лучшие презенты для любых праздников!
                Цвета макаронс могут отличаться.
              </p>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              Мука миндальная, сахар, яйцо куриное (белок), ганаш. На 100 г:
              Белки 7.45 г, Жиры 16.84 г, Углеводы 53.03 г, 393 ккал.
            </div>
          )}
          {activeTab === 2 && (
            <div>
              Мы рекомендуем наслаждаться вкусом макарун первые 72 часа после
              покупки. Далее они могут начать терять свои вкусовые качества и
              текстуру.
              <br />
              Срок хранения в холодильнике 7 дней, в морозилке – 14 дней.
            </div>
          )}
        </div>
      </div>
      <Like />
    </div>
  );
};

export default SingleProduct;
