import React from 'react'
import * as styles from './Ranking.module.scss'

import img1 from '../../../../assets/images/pe31c7c67-9c19-49ce-b289-89de93ab54ab.jpg'
import img2 from '../../../../assets/images/pqnssaccb6b7b-f8ca-4e80-b27d-f2d1d7385367.jpg'
import img3 from '../../../../assets/images/peba1cb9f-5a7a-45c5-ab14-cb86f320b29c.jpg'
import img4 from '../../../../assets/images/ppbed5e530-2d40-4978-a5bb-fb8257ed2325.jpg'
import img5 from '../../../../assets/images/qnppa9ee1b78-5f88-42e7-8581-3e69eaaa82fe.jpg'

const data = [
  [
    {
      img: img1,
      title: '뮤지컬 지킬앤하이드 ( ...',
      startDate: '2018.11.16',
      endDate: '2019.05.19',
    },
    {
      img: img2,
      title: '[부산] [Special Seats] ...',
      startDate: '2019.04.11',
      endDate: '2019.05.19',
    },
    {
      img: img3,
      title: '뮤지컬 <영웅> 10주년 ...',
      startDate: '2019.05.31',
      endDate: '2019.06.02',
    },
    {
      img: img4,
      title: '뮤지컬 레미제라블 탄생 ...',
      startDate: '2019.05.08',
      endDate: '2019.05.12',
    },
    {
      img: img5,
      title: '[부산] 넌버벌 퍼포먼스 ...',
      startDate: '2019.03.30',
      endDate: '2019.04.21',
    },
  ],
  [],
  [],
  [],
  [],
  [],
  [],
]

const Ranking = ({ idx }) => {
  if (data[idx].length === 0) return null

  return (
    <ul className={styles.list}>
      {data[idx].map((item) => (
        <li className={styles.item}>
          <a href="#">
            <img src={item.img} alt="" className={styles.img} />
            <p className={styles.info}>
              <div className={styles.title}>{item.title}</div>
              <div
                className={styles.date}
              >{`${item.startDate} ~ ${item.endDate}`}</div>
            </p>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Ranking
