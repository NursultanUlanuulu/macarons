import { popularData } from "../../utils/constants/constants";
import { ShoppingOutlined } from "@ant-design/icons";
import style from "./Like.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

const Like = () => {
  return (
    <div>
      <h1 className={style.title}>Вам также может понравиться</h1>
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
            slidesPerView: 3,
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
        {popularData.slice(0,10).map((item) => (
          <SwiperSlide key={item.id}>
            <div key={item.id}>
              <div className={style.card} key={item.id}>
                <div className="">
                  <img src={item.img} width={269} />
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper
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
        <SwiperSlide>
          <div className={style.flex}>
            {popularData.slice(0, 10).map((item) => (
              <div key={item.id}>
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
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Like;
