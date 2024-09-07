import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import style from './Layout.module.css'
import Modal from './modal/Modal'
import WorldMap from '../components/map/WordMap'

const Layout = () => {
	const location = useLocation() // Получить текущее местоположение (путь)

	const isDeliveryPage = location.pathname === '/delivery'
	return (
		<div>
			<Header />
			<div className={style.container}>
				<Outlet />
			</div>
			<Modal />
			{isDeliveryPage && <WorldMap />} <Footer />
		</div>
	)
}

export default Layout
