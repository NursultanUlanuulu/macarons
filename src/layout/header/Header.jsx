import style from './Header.module.css'
import logo from '../../assets/img/header/logo.png'
import { DownOutlined } from '@ant-design/icons'
import {
	INITIAL_PATH,
	headerData,
	headerMenuData,
	headerSlide,
} from '../../utils/constants/constants'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
const Header = () => {
	return (
		<div className={style.header}>
			<header>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					effect={'fade'}
					modules={[Autoplay, Pagination, EffectFade]}
					className='mySwiper'
				>
					{headerSlide.map(item => (
						<SwiperSlide key={item.id}>
							<div className={style.slide}>
								<div>
									<img src={item.img} alt='' />
								</div>
								<div>
									<h2>{item.title}</h2>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className={style.back1}>
					<div className={style.header_first}>
						<div className={style.header_menu}>
							{headerMenuData.map(item => (
								<ul className={style.menu} key={item.id}>
									<li>
										<Link to={item.path}>{item.title}</Link>{' '}
									</li>
								</ul>
							))}
						</div>
						{headerData.map(item => (
							<div className={style.header_actions} key={item.id}>
								<div className={style.actions}>
									<Link to={INITIAL_PATH.backet}>
										<img src={item.svg} alt='' />
									</Link>
									<span>{item.title}</span>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className={style.back2}>
					<div className={style.header_second}>
						<div className={style.nav}>
							<ul>
								<Link to={INITIAL_PATH.sales_week} className={style.hov}>
									<li className={style.hover}>СЛАДКИЕ ДНИ</li>
								</Link>
								<li>
									ПОДАРОЧНЫЕ НАБОРЫ
									<DownOutlined />
									<ul>
										<Link to={INITIAL_PATH.podarochnye_nabory}>
											<li className={style.hiden}>ВСЕ НАБОРЫ </li>
										</Link>
										<Link to={INITIAL_PATH.denUchitelya}>
											<li className={style.hiden}>ДЕНЬ УЧИТЕЛЯ</li>
										</Link>
										<Link to={INITIAL_PATH.happyBirthday}>
											<li className={style.hiden}>ДЕНЬ РОЖДЕНИЯ</li>
										</Link>
										<Link to={INITIAL_PATH.classicMacarons}>
											<li className={style.hiden}> МАКАРОНС КЛАСИЧЕСКИЕ</li>
										</Link>
										<Link to={INITIAL_PATH.svadNabory}>
											<li className={style.hiden}> СВАДЕБНЫЕ ПРЕДЛОЖЕНИЯ</li>
										</Link>
										<Link to={INITIAL_PATH.kendiBary}>
											<li className={style.hiden}>КЕНДИ-БАРЫ</li>
										</Link>
										<Link to={INITIAL_PATH.dlyaDetey}>
											<li className={style.hiden}>ДЕТСКИЕ ПРАЗДНИКИ</li>
										</Link>
									</ul>
								</li>
								<Link to={INITIAL_PATH.sobrat_nabor} className={style.hov}>
									<li className={style.hover}>СОБРАТЬ НАБОР</li>
								</Link>
							</ul>
						</div>
						<div>
							<Link to='/'>
								<img src={logo} alt='' />
							</Link>
						</div>
						<div className={style.nav}>
							<ul>
								<Link to={INITIAL_PATH.print} className={style.hov}>
									<li className={style.hover}>СОЗДАТЬ ДИЗАЙН</li>
								</Link>
								<li>
									КОМПАНИЯМ <DownOutlined />
									<ul>
										<Link to={INITIAL_PATH.deserty_dlya_kofejni}>
											<li className={style.hiden}>ОПТОВЫЕ ПОСТАВКИ</li>
										</Link>
										<Link to={INITIAL_PATH.karamell}>
											<li className={style.hiden}>КАРАМЕЛЬ НА ПАЛОЧКЕ ОПТОМ</li>
										</Link>
										<Link to={INITIAL_PATH.korporativ}>
											<li className={style.hiden}>КОРПОРАТИВНЫЕ ПОДАКИ</li>
										</Link>

										<Link to={INITIAL_PATH.ekleryOptom}>
											<li className={style.hiden}>ЭЛКЕРЫ ОПТОМ</li>
										</Link>
									</ul>
								</li>
								<li>
									ВЕСЬ КАТАЛОГ <DownOutlined />
									<ul>
										<Link to={INITIAL_PATH.macaron}>
											<li className={style.hiden}>МАКАРОН</li>
										</Link>
										<Link to={INITIAL_PATH.eklery}>
											<li className={style.hiden}>ЭКЛЕРЫ</li>
										</Link>
										<Link to={INITIAL_PATH.podarochnye_nabory}>
											<li className={style.hiden}>ПОДАРОЧНЫЕ НАБОРЫ</li>
										</Link>
										<Link to={INITIAL_PATH.kombo_nabory}>
											<li className={style.hiden}>КОМБО-НАБОРЫ</li>
										</Link>
										<Link to={INITIAL_PATH.karamel}>
											<li className={style.hiden}>КАРАМЕЛЬ НА ПАЛОЧКЕ</li>
										</Link>
										<Link to={INITIAL_PATH.trubochki}>
											<li className={style.hiden}>ВАФЕЛЬНЫЕ ТРУБОЧКИ</li>
										</Link>
										<Link to={INITIAL_PATH.cake_pops}>
											<li className={style.hiden}>КЕЙК-ПОПСЫ</li>
										</Link>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
