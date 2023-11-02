import { useEffect } from "react";
import style from "../pages_style/News.module.css";
import { newsData } from "../utils/constants/constants";
const News = () => {
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
    return (
        <>
            <h1 className={style.title}>Нововсти</h1>
            <div className={style.blocks}>
                {newsData.map((item) => (
                    <div className={style.block} key={item.id}>
                        <div className="img">
                            <img src={item.img} width={370} />
                        </div>
                        <div className={style.discr}>
                            <div className={style.data}>
                                <p>{item.data}</p>
                            </div>
                            <div className={style.pr}>
                                <h3>{item.title}</h3>
                            </div>
                            <div className={style.dscr}>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default News;
