import React from 'react'
import style from './Care.module.css'
import care from '../../assets/care.png'
import care2 from '../../assets/care2.png'
import care3 from '../../assets/care3.png'
import care4 from '../../assets/care4.png'
const Care = () => {
  return (
    <div>
        <h1 className={style.title}>Мы обо всём позаботились</h1>
        <div>
        <div className={style.blocks}>
                <div className={style.block}>
                    <div className="img">
                        <img src={care} alt="" />
                    </div>
                    <div className={style.discr}>
                        <div className={style.pr}>
                            <h3>Лучшие ингрединты</h3>
                        </div>
                        <div className={style.dscr}>
                            <p>Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
                        </div>
                    </div>
                </div>
                <div className={style.block}>
                    <div className="img">
                        <img src={care2} alt="" />
                    </div>
                    <div className={style.discr}>
                        <div className={style.pr}>
                            <h3>Лучшие ингрединты</h3>
                        </div>
                        <div className={style.dscr}>
                            <p>Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
                        </div>
                    </div>
                </div>
                <div className={style.block}>
                    <div className="img">
                        <img src={care3} alt="" />
                    </div>
                    <div className={style.discr}>
                        <div className={style.pr}>
                            <h3>Лучшие ингрединты</h3>
                        </div>
                        <div className={style.dscr}>
                            <p>Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
                        </div>
                    </div>
                </div>
                <div className={style.block}>
                    <div className="img">
                        <img src={care4} alt="" />
                    </div>
                    <div className={style.discr}>
                        <div className={style.pr}>
                            <h3>Лучшие ингрединты</h3>
                        </div>
                        <div className={style.dscr}>
                            <p>Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Care