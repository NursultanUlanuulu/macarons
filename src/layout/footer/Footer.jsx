import React from 'react'
import style from './Footer.module.css'
import footer from '../../assets/footer.png'
import footer2 from '../../assets/footer2.png'
import footer3 from '../../assets/footer3.png'
import ico from '../../assets/ico.png'
import ico2 from '../../assets/ico2.png'
import ico3 from '../../assets/ico3.png'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className={style.footer}>
          <div className={style.footer_flex}>
            <div>
              <div className={style.icon_flex}>
                <div>
                  <img src={footer} alt="" />
                  <p>Готовим вручную и с любовью</p>
                </div>
                <div>
                  <img src={footer2} alt="" />
                  <p>Доставим в день заказа</p>
                </div>
                <div>
                  <img src={footer3} alt="" />
                  <p>100% натуральные ингредиенты</p>
                </div>
              </div>
              <div>
                <p className={style.adres}>© 2021 Макароншоп ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, дом 22
                </p>
              </div>
            </div>
            {/*  */}
            <div className={style.list}>
              <div className={style.text}>
                <h3>Информация</h3>
                <ul>
                  <li>О компании </li>
                  <li>Гарантии вкуса и свежести </li>
                  <li> Доставка и оплата </li>
                  <li> Контакты</li>
                </ul>
              </div>
              <div className={style.text}>
                <h3>Каталог</h3>
                <ul>
                  <li>Каталог десертов</li>
                  <li>Готовые наборы</li>
                  <li>Собрать свой набор </li>
                  <li>Акции</li>
                </ul>
              </div>
              <div className={style.text}>
                <h3>ДЛЯ БИЗНЕСА</h3>
                <ul>
                  <li>Корпоративные подарки</li>
                  <li>Для юридических лиц</li>
                  <li> Оповикам </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div className={style.text}>
              <div>
                <h3>+7 (812) 309 82 88</h3>
                <p>с 9:00 до 21:00</p>
              </div>
              <div>
                <img src={ico} alt="" />
                <img src={ico2} alt="" />
                <img src={ico3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default Footer