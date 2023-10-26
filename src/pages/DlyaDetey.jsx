import styles from '../pages_style/DlyaDetey.module.css'
import { ShoppingOutlined } from '@ant-design/icons'
import { dlyaDetey } from '../utils/constants/constants'
const DlyaDetey = () => {
  return (
    <div> 
    <h1 style={{ textAlign: 'center', fontSize: '30px', marginTop: '49px' }}>Для детей</h1>
      <div className={styles.cards}>
        {dlyaDetey.map((item, id) => (
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
 </div>  )
}

export default DlyaDetey