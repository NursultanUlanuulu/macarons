import React from "react";
import style from "./Footer.module.css";
import ico from "../../assets/ico.png";
import ico2 from "../../assets/ico2.png";
import ico3 from "../../assets/ico3.png";
import {
  footerIconData,
  footerTextData,
} from "../../utils/constants/constants";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className={style.footer}>
          <div className={style.footer_flex}>
            <div>
              <div className={style.icon_flex}>
                {footerIconData.map((item, id) => (
                  <div key={id}>
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className={style.adres}>
                  © 2021 Макароншоп ООО Квантум, Санкт-Петербург, улица Маршала
                  Тухачевского, дом 22
                </p>
              </div>
            </div>
            {/*  */}
            <div className={style.list}>
              {footerTextData.map((item) => (
                <div className={style.text} key={item.id}>
                  <h3>{item.title}</h3>
                  <ul className={style.ul}>
                    {item.items.map((subItem) => (
                      <li key={subItem.text}>
                        <Link to={subItem.link}>{subItem.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={style.text}>
              <div>
                <h3>+7 (812) 309 82 88</h3>
                <p>с 9:00 до 21:00</p>
              </div>
              <div>
                <img src={ico} alt="" />
                <img src={ico2} alt="" />
                <img src={ico3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
