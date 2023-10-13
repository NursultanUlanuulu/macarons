import React from 'react'
import styles from '../pages_style/HappyBirthday.module.css'
import { happyBirthdayData } from '../utils/constants/constants'
import { ShoppingOutlined } from '@ant-design/icons'
const HappyBirthday = () => {
  return (
    <div> 
    <h1 style={{ textAlign: 'center', fontSize: '30px', marginTop: '49px' }}>День рождения</h1>
      <div className={styles.cards}>
        {happyBirthdayData.map((item, id) => (
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
                <p> <ShoppingOutlined /></p>
                <h5>В корзину</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
 </div>
  )
}

export default HappyBirthday