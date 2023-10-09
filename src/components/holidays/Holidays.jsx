import React from 'react'
import styled from './Holidays.module.css'
import { holidaysData } from '../../utils/constants/constants'
const Holidays = () => {
  return (
    <div className={styled.holidays}>
      <h1 className={styled.big_holiday}> Ближайшие праздники</h1>
      <div className={styled.position}>
        <div className={styled.line}>
          <p ></p>
        </div>
        <div className={styled.img}>
          {
            holidaysData.map((item) => (
              <div className={styled.holiday} key={item.id}>
                <img className={styled.icon} src={item.img} alt="" />
                <p>{item.description} </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Holidays