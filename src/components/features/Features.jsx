import React from 'react'

import style from './Features.module.css'
import { featuresData } from '../../utils/constants/constants'
import { Link } from 'react-router-dom'
const Features = () => {
    return (
        <div className={style.flex}>
            {featuresData.map((item) => (
                <Link to={item.path} key={item.id}>
                    <div className={`${style.card} ${style[`card${item.id}`]}`} >
                        <img src={item.img} width={100} />
                        <div className={style.card_text}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </Link>

            ))}
        </div>
    )
}

export default Features