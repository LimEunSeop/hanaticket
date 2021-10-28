import React from 'react'
import * as styles from './TicketOpen.module.scss'
import classnames from 'classnames/bind'

import img1 from '../../../../assets/images/300x38802f4bbbc-5fee-4ac6-b8de-ef973a3630fd.jpg'
import img2 from '../../../../assets/images/pp79bf9d82-70af-48c6-99f9-cd53e631d62d.jpg'
import img3 from '../../../../assets/images/pqnssaccb6b7b-f8ca-4e80-b27d-f2d1d7385367.jpg'
import img4 from '../../../../assets/images/pqnssaccb6b7b-f8ca-4e80-b27d-f2d1d7385367.jpg'
import img5 from '../../../../assets/images/pp1e704737-850b-47f1-9660-69fd55bf971b.jpg'
import MoreLink from '../../../Buttons/MoreLink'

const cx = classnames.bind(styles)

const TicketOpen = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.heading}>티켓 오픈 공지</h2>
        <MoreLink href="#" className={styles.more} />
      </header>
      <ul className={styles.list}>
        <li className={cx('item', 'advantage')}>
          <a href="#">
            <img src={img1} alt="" className={styles.img} />
            <p>
              <span className={styles.title}>[Special Seats] ALL NE...</span>
              <span className={styles.date}>2019.04.02 13:00</span>
            </p>
          </a>
        </li>
        <li className={cx('item')}>
          <a href="#">
            <img src={img2} alt="" className={styles.img} />
            <p>
              <span className={styles.title}>All NEW ! 뮤지컬 &lt;...</span>
              <span className={styles.date}>2019.04.02 14:00</span>
            </p>
          </a>
        </li>
        <li className={cx('item')}>
          <a href="#">
            <img src={img3} alt="" className={styles.img} />
            <p>
              <span className={styles.title}>뮤지컬 라이온 킹 인터내...</span>
              <span className={styles.date}>2019.04.03 14:00</span>
            </p>
          </a>
        </li>
        <li className={cx('item', 'advantage')}>
          <a href="#">
            <img src={img4} alt="" className={styles.img} />
            <p>
              <span className={styles.title}>부산 [Special Seats] 뮤...</span>
              <span className={styles.date}>2019.04.03 15:00</span>
            </p>
          </a>
        </li>
        <li className={cx('item')}>
          <a href="#">
            <img src={img5} alt="" className={styles.img} />
            <p>
              <span className={styles.title}>
                뮤지컬 &lt;니진스키&gt; 프...
              </span>
              <span className={styles.date}>2019.04.04 14:00</span>
            </p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default TicketOpen
