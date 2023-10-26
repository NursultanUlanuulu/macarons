import { aboutData } from "../utils/constants/constants";
import style from "../pages_style/About.module.css";
const About = () => {
  return (
    <div>
      <div className={style.text}>
        <h1>О нас</h1>
        <br />
        <p>
          Компания МакаронШоп основана в 2013 году. Мы — первый производитель
          пирожных макаронс в Санкт-Петербурге. Изначально мы развивали только
          один продукт — французские пирожные. А позже начали производить ещё
          вафельные трубочки, орешки, профитроли и эклеры. Сейчас мы поставляем
          нашу продукцию в крупнейшие кофейные и кондитерские сети Петербурга, а
          также кафе и рестораны. У нас можно заказать все виды пирожных оптом
          или запросить розничный прайс.
        </p>
      </div>
      <div className={style.flex}>
        {aboutData.map((item) => (
          <div className={style.card_img} key={item.id}>
            <img src={item.img} width={565} height={619} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
