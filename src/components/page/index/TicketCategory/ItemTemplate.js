import React from 'react'
import * as styles from './ItemTemplate.module.scss'

const ItemTemplate = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li className={styles.item}>
          <a href="#">
            <img src={item.img} alt="" className={styles.img} />
            <p className={styles.info}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.hall}>{item.hall}</div>
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

export default ItemTemplate
