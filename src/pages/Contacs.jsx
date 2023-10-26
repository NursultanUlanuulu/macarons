import styles from "../pages_style/Contacts.module.css";
import makaron from "../assets/img/contacts/makaron.png";
import mestoPol from "../assets/img/contacts/mesto.png";
const Contacs = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.photo}>
        <img className={styles.mesto} src={mestoPol} alt="" />
        <img className={styles.makaron} src={makaron} alt="" />
      </div>
      <div className={styles.textContact}>
        <h1>Контакты</h1>
        <ul>
          <li>
            {" "}
            <h4>Производство</h4>
          </li>
          <li>Маршала Тухачевского, 22 Время работы: с 8 до 19:30.</li>
          <li>
            {" "}
            <h4>Пункты самовывоза:</h4>
          </li>
          <li>Кафе “Морошка”. Маршала Тухачевского, 22 (с 8 до 19:30)</li>
          <li> Кафе “Мята”. Наб канала Грибоедова, 37 (с 10 до 22) </li>
          <li>
            {" "}
            <h4>Телефоны:</h4>{" "}
          </li>
          <li>8 (812) 309-82-88 основной номер</li>
          <li>8 (981) 841-85-25 для жалоб и предложений</li>
        </ul>
      </div>
    </div>
  );
};

export default Contacs;
