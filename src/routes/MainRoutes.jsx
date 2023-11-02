import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage";
import Guarantee from "../pages/Guarantee";
import { INITIAL_PATH } from "../utils/constants/constants";
import Gift from "../pages/Gift";
import Supplies from "../pages/Supplies";
import DesertsCatalog from "../pages/DesertsCatalog";
import Sale from "../pages/Sale";
import SaleSecpndPage from "../pages/SaleSecpndPage";
import About from "../pages/About";
import Delivery from "../pages/Delivery";
import SvadebnoePred from "../pages/SvadebnoePred";
import Contacs from "../pages/Contacs";
import News from "../pages/News";
import ClassicMacarons from "../pages/ClassicMacarons";
import HappyBirthday from "../pages/HappyBirthday";
import DenUchitelya from "../pages/DenUchitelya";
import DlyaDetey from "../pages/DlyaDetey";
import CandyBary from "../pages/CandyBary";
import Eklery from "../pages/Eklery";
import Macaron from "../pages/Macaron";
import Kombo_nabory from "../pages/Kombo_nabory";
import Karamel from "../pages/Karamel";
import Trubochki from "../pages/Trubochki";
import Cake_pops from "../pages/Cake_pops";
import AssembleSet from "../pages/AssembleSet";
import CreateDesign from "../pages/CreateDesign";
import SingleProduct from "../pages/SingleProduct";
import KaramelOptom from "../pages/karamelOptom";
import KorporatibnyePodarki from "../pages/KorporatibnyePodarki";
import EkleryOptom from "../pages/EkleryOptom";
import Politika from "../pages/Politika";
import Backet from "../pages/Backet";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path={INITIAL_PATH.main_page} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={INITIAL_PATH.backet} element={<Backet/>} />
        <Route path={INITIAL_PATH.guarantee} element={<Guarantee />} />
        <Route
          path={INITIAL_PATH.deserty_dlya_kofejni}
          element={<Supplies />}
        />
        <Route path={INITIAL_PATH.podarochnye_nabory} element={<Gift />} />
        <Route
          path={INITIAL_PATH.catalog_desertov}
          element={<DesertsCatalog />}
        />
        <Route path={INITIAL_PATH.sales_week} element={<Sale />} />
        <Route
          path={INITIAL_PATH.sales_week_page_two}
          element={<SaleSecpndPage />}
        />
        <Route path={INITIAL_PATH.o_nas} element={<About />} />
        <Route path={INITIAL_PATH.delivery} element={<Delivery />} />
        <Route path={INITIAL_PATH.svadNabory} element={<SvadebnoePred />} />
        <Route path={INITIAL_PATH.contacts} element={<Contacs />} />
        <Route path={INITIAL_PATH.news} element={<News />} />
        <Route
          path={INITIAL_PATH.classicMacarons}
          element={<ClassicMacarons />}
        />
        <Route path={INITIAL_PATH.happyBirthday} element={<HappyBirthday />} />
        <Route path={INITIAL_PATH.denUchitelya} element={<DenUchitelya />} />
        <Route path={INITIAL_PATH.dlyaDetey} element={<DlyaDetey />} />
        <Route path={INITIAL_PATH.kendiBary} element={<CandyBary />} />
        <Route path={INITIAL_PATH.kendiBary} element={<CandyBary />} />
        <Route path={INITIAL_PATH.eklery} element={<Eklery />} />
        <Route path={INITIAL_PATH.macaron} element={<Macaron />} />
        <Route path={INITIAL_PATH.kombo_nabory} element={<Kombo_nabory />} />
        <Route path={INITIAL_PATH.karamel} element={<Karamel />} />
        <Route path={INITIAL_PATH.trubochki} element={<Trubochki />} />
        <Route path={INITIAL_PATH.cake_pops} element={<Cake_pops />} />
        <Route path={INITIAL_PATH.sobrat_nabor} element={<AssembleSet />} />
        <Route path={INITIAL_PATH.print} element={<CreateDesign />} />
        <Route path={INITIAL_PATH.product} element={<SingleProduct />} />
        <Route path={INITIAL_PATH.karamell} element={<KaramelOptom />} />
        <Route
          path={INITIAL_PATH.korporativ}
          element={<KorporatibnyePodarki />}
        />
        <Route path={INITIAL_PATH.ekleryOptom} element={<EkleryOptom />} />
        <Route path={INITIAL_PATH.politika} element={<Politika />} />
      </Route>
    </Routes>
  );
};
