import React from 'react'
import * as styles from './LuckyTicket.module.scss'

import img1 from '../../../../assets/images/p90f20c17-0c5c-4bdb-a984-b9ff9f6619dc.jpg'
import img2 from '../../../../assets/images/300x3880466a147-92b7-4db9-bd60-b3a141366339.jpg'
import img3 from '../../../../assets/images/p5ec77c8d-f81c-4680-9cca-3dd8b0f78792.jpg'
import img4 from '../../../../assets/images/pb3f708aa-acac-4069-8486-d60d6ee6feae.jpg'

const LuckyTicket = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.heading}>
          <strong>오늘만 할인</strong> 럭키 티켓{' '}
          <span aria-label="10:22:36" className={styles.expiration}>
            <span className={styles.circle}>1</span>
            <span className={styles.circle}>0</span>
            <span style={{ margin: '0 12px' }}>:</span>
            <span className={styles.circle}>2</span>
            <span className={styles.circle}>2</span>
            <span style={{ margin: '0 12px' }}>:</span>
            <span className={styles.circle}>3</span>
            <span className={styles.circle}>6</span>
          </span>
        </h2>
      </header>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#">
            <img src={img1} alt="" className={styles.img} />
            <p className={styles.info}>
              <div className={styles.title}>어린이 뮤지컬 [백설공주]</div>
              <div className={styles.date}>2019.02.09 ~ 2019.04.30</div>
              <div className={styles.price}>
                <span className={styles.before}>24,000 원</span>
                <span className={styles.after}>12,000 원</span>
              </div>
              <div className={styles.discount}>
                50%<span className="a11y-hidden">할인</span>
              </div>
            </p>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <img src={img2} alt="" className={styles.img} />
            <p className={styles.info}>
              <div className={styles.title}>뮤지컬 &lt;프렌쥬&gt;</div>
              <div className={styles.date}>2019.02.16 ~ 2019.05.19</div>
              <div className={styles.price}>
                <span className={styles.before}>40,000 원</span>
                <span className={styles.after}>10,000 원</span>
              </div>
              <div className={styles.discount}>
                75%<span className="a11y-hidden">할인</span>
              </div>
            </p>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <img src={img3} alt="" className={styles.img} />
            <p className={styles.info}>
              <div className={styles.title}>
                동요콘서트 &lt;구름빵&gt; 시즌2
              </div>
              <div className={styles.date}>2018.12.18 ~ 2019.04.30</div>
              <div className={styles.price}>
                <span className={styles.before}>25,000 원</span>
                <span className={styles.after}>10,000 원</span>
              </div>
              <div className={styles.discount}>
                60%<span className="a11y-hidden">할인</span>
              </div>
            </p>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <img src={img4} alt="" className={styles.img} />
            <p className={styles.info}>
              <div className={styles.title}>창의써클 체험전 [거인의 침대]</div>
              <div className={styles.date}>2019.03.26 ~ 2019.06.08</div>
              <div className={styles.price}>
                <span className={styles.before}>35,000 원</span>
                <span className={styles.after}>15,000 원</span>
              </div>
              <div className={styles.discount}>
                57%<span className="a11y-hidden">할인</span>
              </div>
            </p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default LuckyTicket
