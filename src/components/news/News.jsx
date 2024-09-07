import style from './News.module.css'
import { newsData } from '../../utils/constants/constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const newsAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const News = () => {
	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.3, once: true }}
		>
			<motion.h1 className={style.title} custom={1} variants={newsAnimation}>
				Новости
			</motion.h1>
			<div className={style.blocks}>
				<Swiper
					slidesPerView={3}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
					}}
					modules={[Pagination]}
					className='mySwiper'
				>
					{newsData.map((item, index) => (
						<SwiperSlide key={item.id}>
							<motion.div
								custom={index + 1}
								variants={newsAnimation}
								className={style.block}
							>
								<div className={style.img}>
									<img src={item.img} alt='' width={370} height={300} />
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
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={style.btn}>
				<Link to='/news'>Все новости</Link>
			</div>
		</motion.div>
	)
}

export default News
