import React from 'react';
import style from '../pages_style/DownloadCatalog.module.css';
import { useState } from 'react';
const DownloadCatalog = ({ setIsVisible }) => {
const [showWord, setShowWord] = useState(false);

const onClickBtn = () => {
const inputFields = document.querySelectorAll('input');
const allInputsFilled = Array.from(inputFields).every((input) => {
    const value = input.value.trim();
        return value.length >= 0;
    });

    if (allInputsFilled) {
      setShowWord(true);
    }
  };

  return (
    <div className={style.overlay} onClick={(e) => {
      let zayavka = e.target.closest('#test');
      if (!zayavka) setIsVisible(false);
      if (zayavka && zayavka.classList.value === style.zayavka) {
        return;
      }
    }}>
      <div className={style.zayavka} id='test'>
        <div className={style.download}>
          <h2 className={style.h2}>Скачивание начнется сразу же после отправки данных</h2>
          <div className={style.inputs}>
            <div>
              <p>Ваше имя*</p>
              <input type="text" className={style.first} placeholder='Укажите имя' required />
            </div>

            <div>
              <p>Название компании</p>
              <input type="text" className={style.second} placeholder='Укажите компанию' />
            </div>

            <div>
              <p>Ваш телефон*</p>
              <input type="text" className={style.fourth} placeholder='+7 123 456-78-90' required />
            </div>

            <div>
              <p>Ваш email</p>
              <input type="email" className={style.fifth} placeholder='Укажите email' required />
            </div>
          </div>
          {showWord && <h2 >Благодарим за интерес к нашей продукции!</h2>}
          {!showWord && <h2 style={{ marginLeft: '50px' }}>Заполните пожалуйста!</h2>}

          <button className={style.btnZayavka} onClick={onClickBtn}>Отправить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default DownloadCatalog;
