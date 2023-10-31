import React from 'react'
import style from '../pages_style/Sotrudnichestvo.module.css'
import { Link } from 'react-router-dom'
const Sotrudnichestvo = () => {
  return (
    <div className={style.sotrudnichestvo}>
        <h1 className={style.h1}>Получить оптовый прайс или отправить запрос на сотрудничество</h1>
        <div className={style.inputs}>
            <div>
                <p>Ваше имя*</p>
                <input type="name" className={style.first} placeholder='Укажите имя' required/>
            </div>

            <div>
                <p>Название компании</p>
                <input type="text" className={style.second}   placeholder='Укажите компанию'/>
            </div>

            <div>
                <p>Добавить комментарий</p>
                <input type="text" style={{height:'130px'}}   className={style.third}  placeholder=''  />  
            </div> 

            <div>
                <p>Ваш телефон*</p>
                <input  type="number " className={style.fourth}  placeholder='+7 123 456-78-90' required/>
            </div>
                    
            <div>
                <p>Ваш email</p>
                <input type="email"   className={style.fifth} placeholder='Укажите email'/>
            </div>

        </div>
        <button className={style.button}>Заказать расчёт</button>
        <p>Нажимая на кнопку “Оформить заказ” Я принимаю и соглашаюсь с Договором оферты и разрешаю обработку моих персональных данных в соответствии <Link to='/политика-конфиденциальности'
        >с Политикой конфиденциальности</Link></p>
    </div>
  )
}

export default Sotrudnichestvo