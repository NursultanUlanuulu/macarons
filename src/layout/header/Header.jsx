import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.png";
import { DownOutlined } from "@ant-design/icons";
import {
  INITIAL_PATH,
  headerData,
  headerMenuData,
  headerSlide,
} from "../../utils/constants/constants";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
const Header = () => {
  return (
    <div className={style.header}>
      <header>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          modules={[Autoplay, Pagination, EffectFade]}
          className="mySwiper"
        >
          {headerSlide.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={style.slide}>
                <div>
                  {" "}
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <h2>{item.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

                <div className={style.back1}>

                    <div className={style.header_first}>
                        <div className={style.header_menu}>
                            {headerMenuData.map((item) => (
                                <ul className={style.menu} key={item.id}>
                                    <li><Link to={item.path}>{item.title}</Link> </li>
                                </ul>
                            ))}
                        </div>
                        {headerData.map((item) => (
                            <div className={style.header_actions} key={item.id}>
                                <div className={style.actions}>
                                    <img src={item.svg} alt="" />
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.back2}>
                    <div className={style.header_second}>
                        <div className={style.nav}>
                            <ul>
                                <Link to={INITIAL_PATH.sales_week}><li className={style.hover}>СЛАДКИЕ ДНИ</li></Link>
                                <li>ПОДАРОЧНЫЕ НАБОРЫ<DownOutlined />
                                    <ul>
                                        <Link to={INITIAL_PATH.podarochnye_nabory}><li>ВСЕ НАБОРЫ </li></Link>
                                        <li>ДЕНЬ УЧИТЕЛЯ</li>
                                        <li>ДЕНЬ РОЖДЕНИЯ</li>
                                        <li>МАКАРОНС КЛАСИЧЕСКИЕ</li>
                                         <Link to={INITIAL_PATH.svadNabory}><li> СВАДЕБНЫЕ ПРЕДЛОЖЕНИЯ</li></Link>
                                        <li>КИНДЕР-БАРЫ</li>
                                        <li>ДЕТСКИЕ ПРАЗДНИКИ</li>
                                    </ul>
                                </li>
                                <li className={style.hover}>СОБРАТЬ НАБОР</li>
                            </ul>
                        </div>
                        <div>
                            <Link to='/'> <img src={logo} alt="" /></Link>

                        </div>
                        <div className={style.nav}>
                            <ul>
                                <li className={style.hover}>СОЗДАТЬ ДИЗАЙН</li>
                                <li>КОМПАНИЯМ <DownOutlined />
                                    <ul>
                                        <Link to={INITIAL_PATH.deserty_dlya_kofejni}><li>ОПТОВЫЕ ПОСТАВКИ</li></Link>
                                        <li>КАРАМЕЛЬ НА ПАЛОЧКЕ ОПТОМ</li>
                                        <li>КОРПОРАТИВНЫЕ ПОДАКИ</li>
                                        <li>ЭЛКЕРЫ ОПТОМ</li>
                                    </ul>
                                </li>
                                <li>ВЕСЬ КАТАЛОГ <DownOutlined />
                                    <ul>
                                        <Link to={INITIAL_PATH.macarons}> <li>МАКАРОН</li></Link>
                                       <Link to={INITIAL_PATH.eklery}> <li>ЭКЛЕРЫ</li></Link>
                                        
                                        <Link to={INITIAL_PATH.podarochnye_nabory}><li>ПОДАРОЧНЫЕ НАБОРЫ</li></Link>
                                        <li>КОМБО-НАБОРЫ</li>
                                        <li>КАРАМЕЛЬ НА ПАЛОЧКЕ</li>
                                        <li>ВАФЕЛЬНЫЕ ТРУБОЧКИ</li>
                                        <li>КЕЙК-ПОПСЫ</li>
                                        <li>ДЕСЕРТ КАРТОШКА</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header;
