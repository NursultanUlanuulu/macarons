import React from "react";
import style from "./News.module.css";
import { newsData } from "../../utils/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <h1 className={style.title}>Новости</h1>
      <div className={style.blocks}>
        <Swiper
          slidesPerView={3}
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {newsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={style.block}>
                <div className={style.img}>
                  <img src={item.img} alt="" width={370} height={300} />
                </div>
                <div className={style.discr}>
                  <div className={style.data}>
                    <p>{item.data}</p>
                  </div>
                  <div className={style.pr}>
                    <h3>{item.title}</h3>
                  </div>
                  <div className={style.dscr}>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={style.btn}>
        <Link to="/news">Все новости</Link>
      </div>
    </div>
  );
};

export default News;
