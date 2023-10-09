import React  from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
import stock from '../../assets/stoc.png'
import stock2 from '../../assets/stock2.png'
import stock3 from '../../assets/stock3.png'
import stock4 from '../../assets/stock4.png'
import style from './Stock.module.css'
const Stock = () => {
  return (
    <>
      <h1 className={style.title}>Акции и новинки</h1>
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
        <SwiperSlide>
          <div className={style.stock}>
            <img src={stock} alt="" height={370} width={270} />
            <p>По СПб в районе КАД –  от 3000₽По МСК – от 5000₽</p>
            <div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.stock}>
            <img src={stock2} alt="" height={370} width={270} />
            <p>Шоколадное пирожное картошка на основе бисквита!</p>
            <div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.stock}>
            <img src={stock3} alt="" height={370} width={270} />
            <p>Аппетитные конфеты на основе миндального печенья и крема</p>
            <div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.stock}>
            <img src={stock4} alt="" height={370} width={270} />
            <p>Карамель на палочке из натуральных ингредиентов</p>
            <div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.stock}>
            <img src={stock} alt="" height={370} width={270} />
            <p>По СПб в районе КАД –  от 3000₽По МСК – от 5000₽</p>
            <div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.stock}>
            <img src={stock} alt="" height={370} width={270} />
            <p>По СПб в районе КАД –  от 3000₽По МСК – от 5000₽</p>
            <div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.stock}>
            <img src={stock} alt="" height={370} width={270} />
            <p>По СПб в районе КАД –  от 3000₽По МСК – от 5000₽</p>
            <div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default Stock