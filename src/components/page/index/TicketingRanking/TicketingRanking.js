import React, { useState } from 'react'
import MoreLink from '../../../Buttons/MoreLink'
import Tab from '../../../Tab/Tab'
import Ranking from './Ranking'
import * as styles from './TicketingRanking.module.scss'

const TicketingRanking = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.heading}>티켓 예매 랭킹</h2>
        <MoreLink href="#" className={styles.more} />
      </header>
      <div className={styles.tabs}>
        <Tab
          data={[
            '뮤지컬',
            '콘서트',
            '연극',
            '클래식',
            '레저',
            '전시',
            '가족/어린이',
          ]}
          onTabItemClick={(idx) => setActiveIdx(idx)}
        />
        <Ranking idx={activeIdx} />
      </div>
    </section>
  )
}

export default TicketingRanking
