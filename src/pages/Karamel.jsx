import { ShoppingOutlined } from '@ant-design/icons';
import React from 'react'
import { dlyaDetey } from '../utils/constants/constants';
import styles from '../pages_style/Karamel.module.css'
const Karamel = () => {
    return (
        <div>
          <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "49px" }}>
          Карамель на палочке
          </h1>
          <div className={styles.cards}>
            {dlyaDetey.slice(6.12).map((item, id) => (
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
}

export default Karamel