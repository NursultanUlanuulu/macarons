import style from "../pages_style/Backet.module.css";
import img from "../assets/img/popular/popular.png";
import Popular from "../components/popular/Popular";
const Backet = () => {
  return (
    <div>
      <h1 className={style.title}>Ваша корзина</h1>
      <div className={style.flex}>
        <div className={style.block1}>
          <div className={style.card}>
            <div>
              <img src={img} width={80} />
            </div>
            <div>
              <h4 className={style.textTitle}>Набор макарон 12 шт.</h4>
            </div>
            <div>
              <button className={style.btn}>-</button>
              <span className={style.quantity}>1</span>
              <button className={style.btn}>+</button>
            </div>
            <div>
              <h4>
                цена <span>950 руб.</span>
              </h4>
            </div>
          </div>
        </div>
        <div className={style.block2}>
          <div className={style.contentBlock2}>
            <h4 className={style.textTitle}>Итого</h4>
            <div className={style.price}>
              <p>Стоимость товаров</p>
              <p>700 руб</p>
            </div>
            <div className={style.price}>
              <p>К оплате</p>
              <p>1100 руб</p>
            </div>
            <button className={style.btn2}>Оформить заказ</button>
          </div>
        </div>
      </div>
      <Popular />
      
    </div>
  );
};

export default Backet;
