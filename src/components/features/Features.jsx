import style from "./Features.module.css";
import { featuresData } from "../../utils/constants/constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};
const Features = () => {
  return (
    <motion.div className={style.flex}>
      {featuresData.map((item, index) => (
        <Link to={item.path} key={item.id}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            custom={index + 1}
            variants={cardAnimation}
            className={`${style.card} ${style[`card${item.id}`]}`}
          >
            <img src={item.img} width={100} />
            <div className={style.card_text}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default Features;
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import style from "./Features.module.css";
// import { featuresData } from "../../utils/constants/constants";
// import { Link } from "react-router-dom";

// const cardAnimation = {
//   hidden: {
//     y: 100,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const Features = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Анимация сработает только один раз
//     threshold: 0.1, // Элемент будет считаться вошедшим в видимую область, если 10% его видно
//   });

//   return (
//     <div ref={ref} className={style.flex}>
//       {featuresData.map((item) => (
//         <Link to={item.path} key={item.id}>
//           <motion.div
//             variants={cardAnimation}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"} // Анимация будет запущена, если элемент вошел в видимую область
//             className={`${style.card} ${style[`card${item.id}`]}`}
//           >
//             <img src={item.img} width={100} />
//             <div className={style.card_text}>
//               <h2>{item.title}</h2>
//               <p>{item.description}</p>
//             </div>
//           </motion.div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Features;
