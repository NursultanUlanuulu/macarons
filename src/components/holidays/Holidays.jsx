import styled from "./Holidays.module.css";
import { holidaysData } from "../../utils/constants/constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const holidayAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const Holidays = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 , once:true}}
      className={styled.holidays}
    >
      <motion.h1
        className={styled.big_holiday}
        custom={1}
        variants={holidayAnimation}
      >
        {" "}
        Ближайшие праздники
      </motion.h1>
      <div className={styled.position}>
        <div className={styled.line}></div>
        <div className={styled.img}>
          {holidaysData.map((item, index) => (
            <Link to={item.path} key={item.id}>
              <motion.div
                className={styled.holiday}
                custom={index + 1}
                variants={holidayAnimation}
              >
                <img className={styled.icon} src={item.img} alt="" />
                <p>{item.description} </p>
              </motion.div>
            </Link>
          ))}{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default Holidays;
