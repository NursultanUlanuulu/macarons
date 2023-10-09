import Banner from "../components/baner/Banner"
import Care from "../components/care/Care"
import Features from "../components/features/Features"
import Holidays from "../components/holidays/Holidays"
import News from "../components/news/News"
import Popular from "../components/popular/Popular"
import Stock from "../components/stock/Stock"

const MainPage = () => {
    return (
      <>
        <div >
          <Banner />
          <Features />
          <Stock/>
          <Holidays />
          <Popular />
          <News />
          <Care />
        </div>
      </>
    )
  }
  export default MainPage