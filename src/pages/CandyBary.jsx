import { naboryDlyaSvadby } from '../utils/constants/constants'
import styles from '../pages_style/CandyBary.module.css'
import candyBar from '../assets/img/candyBar/candy-bar-4.png'
const CandyBary = () => {
  return (
    <div>
        <div className={styles.block_1}>
            <div><img src={candyBar} alt="" /></div>
            <div>
                <h1>Заказать кенди-бар на свадьбу</h1>
                <p>Предстоит торжество и вы желаете необычно оформить сладкий стол? Тогда вам просто необходимо заказать кенди-бар от МакаронШоп. Вы получите полноценный сладкий стол, который будет привлекать внимание гостей в течение всего торжества, а также одну из зон празднования, где гости смогут общаться друг с другом.</p>
                <button>Скачать полный каталог</button>
            </div>
        </div>

        <div className={styles.block_2}>
            <h2>Чем заполнить candy bar?</h2>
            <p>Обычно candy bar наполняется круглыми небольшими конфетами: леденцы, макаронс, кейкпопсы, орешки и трубочки со сгущёнкой, эклеры. Кэнди-бар в СПб от МакаронШоп оформляется нашими кондитерами в общей стилистике торжества.</p>
            <div className={styles.cards}>
                {naboryDlyaSvadby.map((item,id)=>(
                    <div key={id} className={styles.card}>
                    <div>
                      <img className={styles.cardImg} src={item.img} alt="" />
                    </div>
                    <div className={styles.cardText}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                   
                  </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default CandyBary