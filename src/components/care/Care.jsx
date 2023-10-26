import style from "./Care.module.css";
import { motion } from "framer-motion";
import { careData } from "../../utils/constants/constants";
const careAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};
const Care = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.h1
        className={style.title}
        custom={1}
        variants={careAnimation}
      >
        Мы обо всём позаботились
      </motion.h1>
      <div>
        <div className={style.blocks}>
          {careData.map((item, index) => (
            <motion.div
              className={style.block}
              key={item.id}
              custom={index + 1}
              variants={careAnimation}
            >
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <div className={style.discr}>
                <div className={style.pr}>
                  <h3>{item.title}</h3>
                </div>
                <div className={style.dscr}>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Care;
