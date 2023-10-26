import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import style from "./Stock.module.css";
import { motion } from "framer-motion";
import { salleData } from "../../utils/constants/constants";
const salleAnimation = {
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
const Stock = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once:true}}
    >
      <motion.h1 className={style.title} custom={1} variants={salleAnimation}>
        Акции и новинки
      </motion.h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {salleData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <motion.div
              custom={index + 1}
              variants={salleAnimation}
              className={style.stock}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "370px",
                width: "270px",
              }}
            >
              <p>{item.new}</p>
              <h3 className={style.text}>{item.title}</h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Stock;
