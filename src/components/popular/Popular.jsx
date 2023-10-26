import style from "./Popular.module.css";
import { ShoppingOutlined } from "@ant-design/icons";
import { popularData } from "../../utils/constants/constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const textAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const popularAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const Popular = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.h1 className={style.title} custom={1} variants={textAnimation}>
        Популярные наборы
      </motion.h1>
      <motion.div className={style.cards}>
        {popularData.slice(0, 6).map((item, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            custom={index + 1}
            variants={popularAnimation}
            className={style.card}
            key={item.id}
          >
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
          </motion.div>
        ))}
      </motion.div>
      <motion.div custom={9} variants={popularAnimation} className={style.btn}>
        <Link to="/catalog_desertov">Каталог десертов</Link>
      </motion.div>
    </motion.div>
  );
};

export default Popular;
