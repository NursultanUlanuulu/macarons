import React from "react";
import w from "../../assets/w.png";
import Ellipse from "../../assets/Ellipse3.png";
import Ellipse2 from "../../assets/Ellipse5.png";
import q from "../../assets/img/banner/q.png";
import r from "../../assets/img/banner/r.png";
import style from "./Banner.module.css";
import { motion } from "framer-motion";
const textAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const Banner = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      className={style.ban}
    >
      <div>
        <motion.img src={w} width={600} custom={1} variants={textAnimation} />
      </div>
      <div className={style.text}>
        <div className={style.banner_title}>
          <motion.h3
            className={style.macaronshop}
            custom={3}
            variants={textAnimation}
          >
            Macaronshop
          </motion.h3>
          <motion.p className={style.since} custom={4} variants={textAnimation}>
            -since 2013-
          </motion.p>
        </div>
        <div className={style.banner_love}>
          <motion.h1 custom={2} variants={textAnimation}>
            Настоящая любовь
          </motion.h1>
          <motion.p className={style.dsqr} custom={5} variants={textAnimation}>
            Пирожные макарон и другие десерты из натуральных ингредиентов,
            приготовленные с любовью
          </motion.p>
        </div>
        <div className={style.ellipse}>
          <img src={Ellipse2} alt="" />
        </div>
        <div className={style.ellipse1}>
          <img src={Ellipse} alt="" />
        </div>
        <div className={style.ellipse2}>
          <img src={r} alt="" />
        </div>
        <div className={style.ellipse3}>
          <img src={q} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
