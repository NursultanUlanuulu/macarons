import { useEffect, useState } from "react";
import smaile1 from "../../assets/img/modal/sm.svg";
import smaile2 from "../../assets/img/modal/sm2.svg";
import whats from "../../assets/img/modal/ws.png";
import tg from "../../assets/img/modal/tg.webp";
import ph from "../../assets/img/modal/ph.png";
import x from "../../assets/img/modal/x.png";
import style from "./Modal.module.css";
const Modal = () => {
  const [showFirstContent, setShowFirstContent] = useState(true);
  const [showText, setShowText] = useState(true);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  return (
    showComponent && (
      <div>
        <div
          className={`${style.image_container} ${
            showFirstContent ? style.showContent : style.hideContent
          }`}
          onClick={() => setShowFirstContent(!showFirstContent)}
        >
          <div className={style.contacts}>
            <img src={x} alt="WhatsApp" width={50} />

            <a
              href="https://wa.me/0502102270"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whats} alt="WhatsApp" width={50} />
            </a>
            <a
              href="https://t.me/Nur6ultan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tg} alt="Telegram" width={50} />
            </a>
            <a href="tel:+996502102270">
              <img src={ph} alt="Phone" width={50} />
            </a>
          </div>

          {showText && (
            <div className={style.text}>
              <button
                className={style.closeButton}
                onClick={() => setShowText(false)}
              >
                &times;
              </button>
              <h3>Есть вопросы?</h3>
              <p>напишите, поможем</p>
            </div>
          )}

          <img
            src={showFirstContent ? smaile2 : smaile1}
            alt="Smiley"
            className="visible"
          />
        </div>
      </div>
    )
  );
};

export default Modal;
