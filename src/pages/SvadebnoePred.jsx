import React from 'react'
import { naboryDlyaSvadby } from '../utils/constants/constants'
import bgImg from '../assets/img/svadebnyeNabory/bgImg.png'
import styles from '../pages_style/SvadebnoePred.module.css'
import cake from '../assets/img/svadebnyeNabory/cake.png'
import mkr1 from '../assets/img/svadebnyeNabory/minimakaron1.png'
import mkr2 from '../assets/img/svadebnyeNabory/miniMakaron2.png'
import leaf from '../assets/img/svadebnyeNabory/leaf.png'
import { ShoppingOutlined } from '@ant-design/icons'
const SvadebnoePred = () => {
  return (
    //block-1
    <div style={{ backgroundColor: '#F6F6F6' }}>
      <div className={styles.block1}>
        <div >
          <img className={styles.cakeImg} src={cake} alt="" />
          <img className={styles.mkr1} src={mkr1} alt="" />
          <img className={styles.mkr2} src={mkr2} alt="" />
          <img className={styles.leaf} src={leaf} alt="" />
        </div>

        <div className={styles.textMain}>
          <h2> Свадебное предложение</h2>
          <p>Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества </p>
          <button className={styles.btn1}><h3>Презентация</h3></button>
          <button className={styles.btn2}><h3>Прайс-лист</h3></button>
          <ul className={styles.ul}>
            <li>Рыба-текст предложения </li>
            <li>
              Приятно, граждане, наблюдать, как действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. </li>
          </ul>

        </div>
      </div>


      {/* //block-2  */}
      <h2 style={{ textAlign: 'center', fontSize: '30px', marginTop: '49px' }}>Наборы для свадьбы</h2>


      <div className={styles.cards}>
        {naboryDlyaSvadby.map((item, id) => (
          <div key={id} className={styles.card}>
            <div>
              <img className={styles.cardImg} src={item.img} alt="" />
            </div>
            <div className={styles.cardText}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className={styles.priceCart}>
              <h4 className={styles.price}>{item.price}</h4>
              <div className={styles.cart}>
                <p> <ShoppingOutlined /></p>
                <h5>В корзину</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* block-3 */}
      <div>
        <div className={styles.bgImg}>

          <img src={bgImg} alt="" />
        </div>

        <div className={styles.text}>
          <h2>Мы открыты для новых идей</h2>
          <h5 >Каждое событие уникально и мы готовы предложить индивидуальные решения для Вашего мероптиятия</h5>
          <span>
            <h4>Ваше имя* и  Телефон*</h4>


            <input type="text" placeholder='Укажите имя' />

            <input type="text" placeholder='+7 (___) ___-__-__' />
          </span>

          <h4 >Опишите Вашу идею</h4>
          <input type="text" />
          <button>Отправить заявку</button>
          <p>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с Договором оферты и разрешаю обработку моих персональных данных в соответствии с Политикой конфиденциальности</p>

        </div>
      </div>

      {/* 4-block */}
      <h2 className={styles.ansQues}> Ответы на вопросы</h2>
      <div className={styles.block4}>
        <div className={styles.faq} >
          <h3>Сколько хранятся пирожные макарон?</h3>
          <p>Срок хранения бла бла бла</p>
        </div>
        <div className={styles.faq}>
          <h3>Как быстро мы выполняем заказы?</h3>
          <p>Стандартный срок выполнения заказа 3-5 дней, При большом тираже и в предновогодний сезон может увеличиться. Потому что...</p>
        </div>
        <div className={styles.faq}>
          <h3>А за 2 дня?</h3>
          <p>Текст про дополнительную стоимость при срочных заказах</p>
        </div>
      </div>
    </div>
  )
}

export default SvadebnoePred