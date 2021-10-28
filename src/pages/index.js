import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Genre from '../components/page/index/Genre/Genre'
import MainSlider from '../components/page/index/MainSlider/MainSlider'
import ManiaNote from '../components/page/index/ManiaNote/ManiaNote'
import TicketingRanking from '../components/page/index/TicketingRanking/TicketingRanking'
import TicketOpen from '../components/page/index/TicketOpen/TicketOpen'
import MainBanner from '../components/Buttons/MainBanner'

import banner1 from '../assets/images/line_eli4cbf43a3-2782-47f4-b78f-339af33f1205.jpg'
import banner2 from '../assets/images/line_pororoe52bb2f2-8269-4c1d-9cfd-5ce654e2cea6.jpg'
import TicketRecommend from '../components/page/index/TicketRecommend/TicketRecommend'
import LuckyTicket from '../components/page/index/LuckyTicket/LuckyTicket'
import TicketCategory from '../components/page/index/TicketCategory/TicketCategory'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="하나투어티켓">
      <MainSlider />
      <TicketOpen />
      <MainBanner img={banner1} href="#" />
      <Genre />
      <ManiaNote />
      <TicketingRanking />
      <MainBanner img={banner2} href="#" />
      <TicketRecommend />
      <LuckyTicket />
      <TicketCategory />
    </Layout>
  )
}

export default IndexPage
