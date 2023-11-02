// import React from 'react'
// import karamel from '../assets/img/dlyaDetey/karamelOptom.png'
// import {  dlyaDetey, sellTheKaramelData } from '../utils/constants/constants'
// import style from '../pages_style/KaramelOptom.module.css'
// import Sotrudnichestvo from './Sotrudnichestvo'
// const KaramelOptom = ({ setIsVisible}) => {
//   return (
//     <div>
//         <div className={style.firstPage}>
//             <div><img src={karamel} alt="" /></div>
//             <div>
//                 <h1>Карамель на палочке оптом в СПБ и Москве</h1>
//                 <h3>Акция! Специальные условия доставки по России.</h3>
//                 <h4> Подробнее ...</h4>
//                 <p>Карамель на палочке от производителя. Наши леденцы продаются в крупнейших кондитерских и кофейных сетях Санкт-Петербурга и Москвы. Конфеты хорошо узнаваемы, позволяют делать высокую наценку и имеют более 75% повторных покупок.</p>
//                 <button>Скачать полный каталог</button>
//             </div>
//         </div>
//             <div className={style.secondPage}>
//                 <h1>Наша карамель продаётся в:</h1>
//             <div  className={style.sell}> {sellTheKaramelData.map((item,id)=>(
//                 <div key={id} className={style.singleCard} > 
//                     <img src={item.img} alt="" />
//                     <p>{item.title}</p>
                    
//                 </div>
//             ))}
//             </div>
//           </div>
//         <div>
//             <div className={style.cards}>
//                 {dlyaDetey.slice(6.12).map((item,id)=>(
//                 <div key={id} className={style.card}>
//                     <img src={item.img} alt="" />
//                     <p>{item.description}</p>
//                 </div>
//                 ))}
//             </div>
//             <div>
//                 <Sotrudnichestvo/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default KaramelOptom


import { useState } from 'react';
import karamel from '../assets/img/dlyaDetey/karamelOptom.png';
import { dlyaDetey, sellTheKaramelData } from '../utils/constants/constants';
import style from '../pages_style/KaramelOptom.module.css';
import Sotrudnichestvo from './Sotrudnichestvo';
import DownloadCatalog from './DownloadCatalog';

const KaramelOptom = () => {
  const [isVisible, setIsVisible] = useState(false);

  const buttonClick = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <div className={style.firstPage}>
        <div>
          <img src={karamel} alt="" />
        </div>
        <div>
          <h1>Карамель на палочке оптом в СПБ и Москве</h1>
          <h3>Акция! Специальные условия доставки по России.</h3>
          <h4> Подробнее ...</h4>
          <p>Карамель на палочке от производителя. Наши леденцы продаются в крупнейших кондитерских и кофейных сетях Санкт-Петербурга и Москвы. Конфеты хорошо узнаваемы, позволяют делать высокую наценку и имеют более 75% повторных покупок.</p>
          <button onClick={buttonClick}>Скачать полный каталог</button>
          {isVisible && <DownloadCatalog setIsVisible={setIsVisible}/>}
        </div>
      </div>
      <div className={style.secondPage}>
        <h1>Наша карамель продаётся в:</h1>
        <div className={style.sell}>
          {sellTheKaramelData.map((item, id) => (
            <div key={id} className={style.singleCard}>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={style.cards}>
          {dlyaDetey.slice(6, 12).map((item, id) => (
            <div key={id} className={style.card}>
              <img src={item.img} alt="" />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div>
          <Sotrudnichestvo />
        </div>
      </div>
    </div>
  );
};

export default KaramelOptom;
