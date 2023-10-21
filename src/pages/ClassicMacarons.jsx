import React from "react";
import { classicMacaronsData } from "../utils/constants/constants";
import { ShoppingOutlined } from "@ant-design/icons";
import styles from "../pages_style/classicMacarons.module.css";
const ClassicMacarons = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "49px" }}>
        Классические макаронс
      </h1>
      <div className={styles.cards}>
        {classicMacaronsData.map((item, id) => (
          <div key={id} className={styles.card}>
            <div>
              <img className={styles.cardImg} src={item.img} alt="" />
            </div>
            <div className={styles.cardText}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className={styles.priceCart}>
              <h4 className={styles.price}>{item.price} руб</h4>
              <div className={styles.cart}>
                <p>
                  {" "}
                  <ShoppingOutlined />
                </p>
                <h5>В корзину</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicMacarons;
