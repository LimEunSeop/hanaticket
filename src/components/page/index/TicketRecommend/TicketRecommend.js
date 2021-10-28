import React, { useState } from 'react'
import Tab from '../../../Tab/Tab'
import Recommend from './Recommend'
import * as styles from './TicketRecommend.module.scss'

const TicketRecommend = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.heading}>하나티켓 추천</h2>
        {/* <MoreLink href="#" className={styles.more} /> */}
      </header>
      <div className={styles.tabs}>
        <Tab
          data={[
            '연인 추천',
            '좌석우위 공연',
            '덕후추천',
            'Hani 할인공연 추천',
            '지역 공연 추천',
          ]}
          onTabItemClick={(idx) => setActiveIdx(idx)}
        />
        <Recommend idx={activeIdx} />
      </div>
    </section>
  )
}

export default TicketRecommend
