import React from "react";
import styled from "./Holidays.module.css";
import { holidaysData } from "../../utils/constants/constants";
import { Link } from "react-router-dom";
const Holidays = () => {
  return (
    <div className={styled.holidays}>
      <h1 className={styled.big_holiday}> Ближайшие праздники</h1>
      <div className={styled.position}>
        <div className={styled.line}></div>
        <div className={styled.img}>
          {holidaysData.map((item) => (
            <Link to={item.path} key={item.id}>
              <div className={styled.holiday} >
                <img className={styled.icon} src={item.img} alt="" />
                <p>{item.description} </p>
              </div>
            </Link>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Holidays;
