import React from 'react'
import w from '../../assets/w.png'
import Ellipse from '../../assets/Ellipse3.png'
import Ellipse2 from '../../assets/Ellipse5.png'
import q from '../../assets/img/banner/q.png'
import r from '../../assets/img/banner/r.png'
import style from './Banner.module.css'
const Banner = () => {
    return (
        <div className={style.ban}>
            <div className={style.heard} >
                <img src={w} width={600} />
            </div>
            <div className={style.text}>
                <div className={style.banner_title}>
                    <h3 className={style.macaronshop}>Macaronshop</h3>
                    <p className={style.since}>-since 2013-</p>
                </div>
                <div className={style.banner_love}>
                    <h1>Настоящая любовь</h1>
                    <p className={style.dsqr}>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
                </div>
                <div className={style.ellipse}>
                    <img src={Ellipse2} alt="" />
                </div>
                <div className={style.ellipse1}>
                    <img src={Ellipse} alt="" />
                </div>
                <div className={style.ellipse2}>
                    <img src={r} alt="" />
                </div>
                <div className={style.ellipse3}>
                    <img src={q} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Banner