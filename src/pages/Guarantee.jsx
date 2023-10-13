import React from 'react'
import { guaranteeData } from '../utils/constants/constants'
import style from '../pages_style/Guarantee.module.css'
const Guarantee = () => {
  return (
    <div className={style.guarantees}>
        <h1 className={style.title}>Гарантии вкуса и свежести</h1>
        <div>
          <p className={style.dscr}>При изготовлении пирожных макаронс и других десертов мы используем только натуральные ингредиенты и красители, готовя наши изделия по оригинальной рецептуре лучших мировых кондитеров. Мы печём заказы в день отгрузки, поэтому вы всегда можете быть уверены в их свежести. Мы не используем консерванты, разрыхлители или усилители вкуса.</p>
          <div className={style.guarantee}>
    {guaranteeData.map((item ,id)=>(
            <div key={id} >
            <img src={item.img} alt="" width={276}/>
            <p className={style.option}>{item.percent}</p>
            <p className={style.dr}>{item.title}</p>
          </div>
          ))}
          </div>
      
         
        </div>
    </div>
  )
}

export default Guarantee