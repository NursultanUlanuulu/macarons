import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Banner from '../components/baner/Banner'
import { Routes, Route, Outlet } from 'react-router-dom'
import Features from '../components/features/Features'
import Stock from '../components/stock/Stock'
import Holidays from '../components/holidays/Holidays'
import Popular from '../components/popular/Popular'
import News from '../components/news/News'
import Care from '../components/care/Care'
import style from './Layout.module.css'
import Guarantee from '../pages/Guarantee'
import Gift from '../pages/Gift'

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={style.container}>
       <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout