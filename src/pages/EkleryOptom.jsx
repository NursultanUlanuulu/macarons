import React, { useState } from 'react'
import { ekleryData, sulpesFooterData } from '../utils/constants/constants'
import style from '../pages_style/EkleryOptom.module.css'
import Sotrudnichestvo from './Sotrudnichestvo'
import DownloadCatalog from './DownloadCatalog'
const EkleryOptom = () => {

    const [isVisible, setIsVisible] = useState(false)
  
    const buttonClick = () => {
      setIsVisible(true);
    };
    return (
        <div>
            <div className={style.firstPage}>
                {ekleryData.slice(11.12).map((item)=>(
                      <div key={item.id}><img src={item.img} alt="" /></div>
                ))}
               
                <div>
                    <h1>Эклеры оптом</h1>
                    <p>Макаруны оптом от производителя, а также эклеры, пирожное картошка, кейк-посы, леденцовая карамель, маффины, орешки со сгущенкой и вафельные трубочки. Наши пирожные продаются в крупнейших кондитерских и кофейных сетях Санкт-Петербурга и Москвы. Они хорошо узнаваемы, что позволяют делать высокую наценку, и имеют более 75% повторных покупок.</p>
                    <button onClick={buttonClick}>Скачать полный каталог</button>
          {isVisible && <DownloadCatalog setIsVisible={setIsVisible}/>}
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
                <h2 className={style.h2}>Пирожные для вашей кофейни</h2>
                <div className={style.cards}>
                  {ekleryData.map((item,id)=>(
                  <div key={id} className={style.card}>
                  <img src={item.img} alt="" />
            <     p>{item.description}</p>
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

export default EkleryOptom