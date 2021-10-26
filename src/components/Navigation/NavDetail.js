import React from 'react'
import * as styles from './NavDetail.module.scss'
import classnames from 'classnames/bind'
import MoreLink from '../Buttons/MoreLink'

const cx = classnames.bind(styles)

const NavDetail = ({ data }) => {
  if (data)
    return (
      <div className={styles.wrapper}>
        <div className={cx('info')}>
          <section className={styles.subMenu}>
            <header>
              <h3>{data.menuName}</h3>
              <MoreLink to="#" className={styles.moreLink} />
            </header>
            <ul>
              {data.subMenus.map((subMenu) => (
                <li>
                  <a href="#">{subMenu}</a>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.recommend}>
            <h3>추천 {data.menuName}</h3>
            <ul>
              {data.recommendImgs.map((img) => (
                <li>
                  <a href="#">
                    <img src={img} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.banner}>
            <h3 className="a11y-hidden">{`${data.menuName}관련 배너`}</h3>
            <img src={data.bannerImg} alt="" />
          </section>
        </div>
      </div>
    )

  return null
}

export default NavDetail
