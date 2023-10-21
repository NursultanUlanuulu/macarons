import React from "react";
import style from "./Popular.module.css";
import { ShoppingOutlined } from "@ant-design/icons";
import { popularData } from "../../utils/constants/constants";
import { Link } from "react-router-dom";
const Popular = () => {
  return (
    <div>
      <h1 className={style.title}>Популярные наборы</h1>
      <div className={style.cards}>
        {popularData.slice(0, 6).map((item) => (
          <div className={style.card} key={item.id}>
            <div className="">
              <img src={item.img} alt="" />
            </div>
            <div className={style.text}>
              <h3 className={style.heard}>{item.title}</h3>
              <p className={style.trans}>{item.description}</p>
            </div>
            <div className={style.bottom}>
              <h4 className={style.price}>{item.price} руб</h4>
              <div className={style.cart}>
                <p>
                  <ShoppingOutlined />
                </p>
                <p>корзину</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.btn}>
        <Link to="/catalog_desertov">Каталог десертов</Link>
        {/* <Link to='/podarochnye-nabory'>Все праздничные наборы</Link> */}
      </div>
    </div>
  );
};

export default Popular;
