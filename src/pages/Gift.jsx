import { popularData } from "../utils/constants/constants";
import { ShoppingOutlined } from "@ant-design/icons";
import style from "../pages_style/Gift.module.css";
const Gift = () => {
    return (
        <div>
            <h1 className={style.title}>Подарочные наборы</h1>
            <div className={style.cards}>
                {popularData.map((item,id) => (
                    <div  className={style.card} key={id}>
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
                                <p><ShoppingOutlined /></p>
                                <p >корзину</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Gift