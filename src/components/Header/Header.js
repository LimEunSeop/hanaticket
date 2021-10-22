import React from 'react'
import { Link } from 'gatsby'
import TopBanner from '../TopBanner/TopBanner'
import * as styles from './Header.module.scss'

import logo from '../../assets/icons/logo_hanaticket.png'
import search_icon from '../../assets/icons/icon_search.png'
import gnb_banner1 from '../../assets/images/0328weekly_gnb_jekyll14acdab9-ccba-485b-9e85-1ef9ce57220d.jpg'

import UpButton from '../Buttons/UpButton'
import DownButton from '../Buttons/DownButton'
import Navigation from '../Navigation/Navigation'
import Sitetop from '../Sitetop/Sitetop'

const Header = () => {
  return (
    <header>
      <TopBanner />
      <Sitetop />
      <div className={styles.logoArea}>
        <h1>
          <Link to="/" aria-label="하나티켓">
            <img src={logo} alt="" width="130" alt="" />
          </Link>
        </h1>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="하나티켓에서 예매하면 하나투어마일리지 1% 적립!"
          />
          <button type="button">
            <img src={search_icon} alt="검색" />
          </button>
        </div>
        <div className={styles.banner}>
          <a href="#">
            <img src={gnb_banner1} alt="" />
          </a>
          <div className={styles.buttons}>
            <UpButton
              type="button"
              aria-label="이전배너"
              className={styles.button}
            />
            <DownButton
              type="button"
              aria-label="다음배너"
              className={styles.button}
            />
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  )
}

export default Header
