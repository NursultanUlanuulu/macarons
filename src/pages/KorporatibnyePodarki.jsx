import React from 'react'
import style from '../pages_style/KorporatibnyePodarki.module.css'
import { denUchitelya, naboryDlyaSvadby, sulpesFooterData } from '../utils/constants/constants'
import Sotrudnichestvo from './Sotrudnichestvo'

const KorporatibnyePodarki = () => {
    return (
        <div>
            <div className={style.firstPage}>
                {denUchitelya.slice(11.10).map((item)=>(
                      <div key={item.id}><img src={item.img} alt="" /></div>
                ))}
               
                <div>
                    <h1>Корпоративные подарки оптом и в розницу</h1>
                    <p>Брендированные макаронс и эклеры — лучший подарок для коллег и контрагентов. Мы приготовим пирожные поштучно от 70 руб., в наборах от 350 руб., сделаем индивидуальный дизайн и нанесём ваши лого.</p>
                    <button>Скачать полный каталог</button>
                </div>
            </div>

            <div>
              <h2 className={style.titl}>
              Продукция от кондитерской фабрики Macaronshop — это
              </h2>
            <div className={style.food}>
              {sulpesFooterData.map((item) => (
              <div className={style.singleCard} key={item.id}>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
              </div>
              ))}
            </div>
            </div>
            <div >
            <h2 className={style.h2}>Некоторые варианты подарков</h2>
                <div className={style.cards}>
                  {naboryDlyaSvadby.map((item,id)=>(
                  <div key={id} className={style.card}>
                  <img src={item.img} alt="" />
                  <p>{item.description}</p>
        </div>
    ))}
                </div>
    
                <div>
                    <Sotrudnichestvo/>
                </div>
            </div>
        </div>
      )
}

export default KorporatibnyePodarki