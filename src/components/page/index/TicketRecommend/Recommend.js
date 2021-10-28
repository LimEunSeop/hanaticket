import React from 'react'
import * as styles from './Recommend.module.scss'

import img1 from '../../../../assets/images/300x3885e277be4-0f2e-4e9f-a3c6-7b8fe3bd566a.jpg'
import img2 from '../../../../assets/images/p849509f5-0722-49ab-88c4-f1acb4f2a798.jpg'
import img3 from '../../../../assets/images/300x3886810c71e-3e7b-4f1c-9166-8191b67da0af.jpg'
import img4 from '../../../../assets/images/300x388f9daf5d2-aaf3-4b8b-a9a6-d28cbdf94b7c.jpg'
import img5 from '../../../../assets/images/300x3883354a889-c0c4-462e-894b-ecf48f6f76a4.jpg'

const data = [
  [
    {
      img: img1,
      title: '[수원] 연국 [운빨로맨스]',
      startDate: '2019.03.09',
      endDate: '2019.04.21',
    },
    {
      img: img2,
      title: '국민뮤지컬 [사랑은 비를...',
      startDate: 'Open Run',
      endDate: null,
    },
    {
      img: img3,
      title: '[대구] 연극 [ 하트시그널 ]',
      startDate: '2019.02.28',
      endDate: '2019.04.21',
    },
    {
      img: img4,
      title: '그남자 그여자',
      startDate: '2018.12.21',
      endDate: '2019.04.30',
    },
    {
      img: img5,
      title: '●리얼공감 로맨틱 코메...',
      startDate: '2016.03.01',
      endDate: '2019.04.30',
    },
  ],
  [],
  [],
  [],
  [],
]

const Recommend = ({ idx }) => {
  if (data[idx].length === 0) return null

  return (
    <ul className={styles.list}>
      {data[idx].map((item) => (
        <li className={styles.item}>
          <a href="#">
            <img src={item.img} alt="" className={styles.img} />
            <p className={styles.info}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.date}>{`${item.startDate}${
                item.endDate ? ` ~ ${item.endDate}` : ''
              }`}</div>
            </p>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Recommend
