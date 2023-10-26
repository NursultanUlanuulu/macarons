import { popularData } from "../utils/constants/constants";
import { ShoppingOutlined } from "@ant-design/icons";
import style from "../pages_style/Sale.module.css";
import { Link } from "react-router-dom";
const SaleSecpndPage = () => {
  return (
    <div>
      <div>
        <div className={style.title}>
          <h1>Акция: сладкие дни!</h1>
          <h3>Неделя скидок на авторские и подарочные наборы макарон</h3>
        </div>
        <div className={style.cards}>
          {popularData.slice(2.19).map((item) => (
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
        <nav>
          <ul className={style.page_numbers}>
            <li>
              <Link to="/sales_week">←</Link>
            </li>
            <li>
              <Link to="/sales_week">1</Link>
            </li>
            <li>2</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SaleSecpndPage;
