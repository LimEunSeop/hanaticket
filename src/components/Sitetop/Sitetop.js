import React, { useState } from 'react'
import * as styles from './Sitetop.module.scss'
import ExpandableLinks from '../Buttons/ExpandableLinks'

const Sitetop = () => {
  const [activeTabIdx, setActiveTabIdx] = useState(2)

  const handleTabClick = (e) => {
    const currentTarget = e.currentTarget
    const idx = Number(currentTarget.dataset.idx)
    setActiveTabIdx(idx)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {['여행상품', '여행정보', '공연/전시'].map((tabName, index) => (
          <button
            type="button"
            data-idx={index}
            onClick={handleTabClick}
            className={index === activeTabIdx && styles.active}
          >
            {tabName}
          </button>
        ))}
      </div>
      <div className={styles.links}>
        <a href="#" className={styles.item}>
          로그인
        </a>
        <a href="#" className={styles.item}>
          회원가입
        </a>
        <ExpandableLinks
          links={[
            { name: '마이티켓', url: '#' },
            { name: '마이페이지', url: '#' },
            { name: '예매확인/취소', url: '#' },
            { name: '대리점예매확인', url: '#' },
          ]}
          className={styles.item}
        />

        <a href="#" className={styles.item}>
          티켓고객센터
        </a>
        <ExpandableLinks
          links={[
            { name: '하나투어클럽', url: '#' },
            { name: '회원혜택', url: '#' },
            { name: '하나투어카드', url: '#' },
          ]}
          className={styles.item}
        />
        <ExpandableLinks
          links={[
            { name: 'KOR', url: '#' },
            { name: 'ENG', url: '#' },
            { name: 'JPN', url: '#' },
            { name: 'tCHN', url: '#' },
            { name: 'sCHN', url: '#' },
          ]}
          className={styles.item}
        />
      </div>
    </div>
  )
}

export default Sitetop
