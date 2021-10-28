import React from 'react'
import MoreLink from '../../../Buttons/MoreLink'
import * as styles from './ManiaNote.module.scss'
import StarRate from '../../../StarRate/StarRate'

import img1 from '../../../../assets/images/duan32ba3251-003b-4783-9e07-e842feadf5dd.jpg'
import img2 from '../../../../assets/images/EA34D92F-979A-4FAE-B3E6-7C6EBA8717A9edd3b392-cfbf-43f4-9e06-80dc7ca131ea.jpeg'
import img3 from '../../../../assets/images/KakaoTalk_20190329_153145535298a897a-bb0d-48de-be55-9a459134266d.jpg'
import img4 from '../../../../assets/images/15538437728804a509250-8bdf-420d-92a3-d36cadb70c45.jpg'

const ManiaNote = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.heading}>
          매니아 <span className={styles.highlight}>NOTE</span>
        </h2>
        <MoreLink href="#" className={styles.more} />
      </header>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.img}>
              <img src={img1} alt="" />
            </div>
            <p className={styles.info}>
              <div className={styles.title}>
                드라마뮤지컬 - &lt; 여명의 눈동자 &gt;
              </div>
              <div className={styles.rate}>
                <StarRate rate={4} />
              </div>
              <div className={styles.description}>
                드라마가 다시 생각나는, 깊은 한...
              </div>
            </p>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.img}>
              <img src={img2} alt="" style={{ objectPosition: 'center top' }} />
            </div>
            <p className={styles.info}>
              <div className={styles.title}>
                뮤지컬 지킬앤하이드 ( MUSICAL...
              </div>
              <div className={styles.rate}>
                <StarRate rate={5} />
              </div>
              <div className={styles.description}>은지킬도 나름 매력있어</div>
            </p>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.img}>
              <img src={img3} alt="" />
            </div>
            <p className={styles.info}>
              <div className={styles.title}>
                뮤지컬 지킬앤하이드 ( MUSICAL...
              </div>
              <div className={styles.rate}>
                <StarRate rate={5} />
              </div>
              <div className={styles.description}>역시 지킬앤하이드~!</div>
            </p>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.img}>
              <img src={img4} alt="" />
            </div>
            <p className={styles.info}>
              <div className={styles.title}>
                뮤지컬 킹아더 ( Musical King ...
              </div>
              <div className={styles.rate}>
                <StarRate rate={4} />
              </div>
              <div className={styles.description}>
                증세의 아더왕 vs 21세기 아더왕
              </div>
            </p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default ManiaNote
