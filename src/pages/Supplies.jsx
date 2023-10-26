import { sulpesFooterData, suplplesData } from "../utils/constants/constants";
import style from "../pages_style/Supplies.module.css";
import suplples from "../assets/img/supplies/suplples.jpg";
const Supplies = () => {
  return (
    <div>
      <div className={style.box}>
        <div>
          <img src={suplples} alt="" />
        </div>
        <div className={style.text}>
          <h1>Десерты для кофеин и кафе</h1>
          <div className={style.text_title}>
            <div className={style.sell}>
              <p>
                Акция! Специальные условия доставки по России.
                <br />
                <a href="#">Подробнее</a>
              </p>
            </div>
            <div className={style.dscr}>
              <p>
                Мы с 2013 года производим и поставляем оптом пирожные для кофеен
                и кафе. Наши десерты продаются в крупнейших кондитерских сетях
                Москвы и Петербурга. Они яркие, натуральные, позволяют делать
                высокую наценку, за ними возвращаются покупатели.
              </p>
            </div>
          </div>
          <div>
            <button className={style.btn}>Скачать каталог</button>
          </div>
        </div>
      </div>
      <div>
        <h2 className={style.title}>Пирожные для вашей кофейни</h2>
        <div className={style.flex}>
          {suplplesData.map((item) => (
            <div className={style.card} key={item.id}>
              <img src={item.img} width={276} height={302} />
              <h4 className={style.option}>{item.title}</h4>
              <p className={style.dr}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className={style.titl}>
          Продукция от кондитерской фабрики Macaronshop — это
        </h2>
        <div className={style.food}>
          {sulpesFooterData.map((item) => (
            <div className={style.card} key={item.id}>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supplies;
