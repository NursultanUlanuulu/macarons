import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import MainPage from '../pages/MainPage'
import Guarantee from '../pages/Guarantee'
import { INITIAL_PATH } from '../utils/constants/constants'
import Gift from '../pages/Gift'
import Supplies from '../pages/Supplies'
import DesertsCatalog from '../pages/DesertsCatalog'
import Sale from '../pages/Sale'
import SaleSecpndPage from '../pages/SaleSecpndPage'
import About from '../pages/About'

export const MainRoutes = () => {
  return (
     <Routes>
        <Route path={INITIAL_PATH.main_page} element={<Layout />}>
           <Route index element={<MainPage />}/>
           <Route path={INITIAL_PATH.guarantee} element={<Guarantee />}/>
           <Route path={INITIAL_PATH.deserty_dlya_kofejni} element={<Supplies/>}/>
           <Route path={INITIAL_PATH.podarochnye_nabory} element={<Gift />} />
           <Route path={INITIAL_PATH.catalog_desertov} element={<DesertsCatalog />} />
           <Route path={INITIAL_PATH.sales_week} element={<Sale/>}/>
           <Route path={INITIAL_PATH.sales_week_page_two} element={<SaleSecpndPage/>} />
           <Route path={INITIAL_PATH.o_nas} element={<About/>}/>
        </Route>
     </Routes>
  )
}
