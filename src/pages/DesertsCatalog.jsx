import style from "../pages_style/DesertsCatalog.module.css";
import catalog from "../assets/img/desertsCatalog/catalog.png";
import { DesertsCatalogData, popularData } from "../utils/constants/constants";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const DesertsCatalog = () => {
  return (
    <div>
      <div className={style.catalogBlock}>
        <h1 className={style.title}>Каталог десертов</h1>
        <div className={style.catalog}>
          <div className={style.pirojnyiMakaron}>
            <div>
              {" "}
              <img src={catalog} alt="" />{" "}
            </div>
          </div>
          <div className={style.pirojnyiMakaronText}>
            <h1>Пирожные макарон</h1>
            <p className={style.dscr}>
              Самые классные, самые лучшие, свежие, воздушные, хрустящие
              макарушки. лучшее, что мы умеем делать.
            </p>
            <Link to="/podarochnye_nabory">
              <button className={style.btn}> Подарочные наборы</button>
            </Link>
            <button className={style.btn}> Собрать свой набор</button>
          </div>
        </div>
        <div className={style.allImg}>
          {DesertsCatalogData.map((item) => (
            <div
              className={`${style.card} ${style[`card${item.id}`]}`}
              key={item.id}
            >
              <img src={item.img} width={231} height={201} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <h1 className={style.textH1}>
          Хотите попробовать
          <br /> всё сразу?{" "}
        </h1>
        <div className={style.cards}>
          {popularData.slice(0, 4).map((item) => (
            <div className={style.carta} key={item.id}>
              <div className="">
                <img src={item.img} alt="" width={271} />
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
          <Link to="/podarochnye_nabory">Все праздничные наборы</Link>
        </div>
      </div>
    </div>
  );
};

export default DesertsCatalog;
