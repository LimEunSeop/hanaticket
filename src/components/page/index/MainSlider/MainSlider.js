import React, { useRef, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import * as styles from './MainSlider.module.scss'

import bg1 from '../../../../assets/images/main_lmb31c9c2c2-ef42-4463-bc8d-078164ab0898.jpg'
import bg2 from '../../../../assets/images/main_wide_grease0f24ec66-c21d-4df1-bde9-add640378b09.jpg'
import bg3 from '../../../../assets/images/main_wide_green2ffef6c9-27a4-4c65-a906-287463e45b3e.jpg'
import bg4 from '../../../../assets/images/main_wide_herof4467e76-5bed-44ec-8340-89afb18014ea.jpg'
import bg5 from '../../../../assets/images/main_wide_jang0de3d96d-78c1-45b4-9f05-8616bde834d0.jpg'
import bg6 from '../../../../assets/images/main_wide_jekyllf38acd74-3fe0-4d28-b56d-ae3d102fc5b1.jpg'
import bg7 from '../../../../assets/images/main_wide_starbf17c560-6631-45d9-912a-e42679c13f1d.jpg'
import bg8 from '../../../../assets/images/main_wide_water7c06d151-60f5-4cdd-868d-02439b4d6d49.jpg'
import dot1 from '../../../../assets/images/pb6254dfc-7169-42b6-9c55-01e0b98cffc9.jpg'
import dot2 from '../../../../assets/images/pp79bf9d82-70af-48c6-99f9-cd53e631d62d.jpg'
import dot3 from '../../../../assets/images/rm2f1d7a306-5d2f-4a3a-aee8-2272aec9553a.jpg'
import dot4 from '../../../../assets/images/peba1cb9f-5a7a-45c5-ab14-cb86f320b29c.jpg'
import dot5 from '../../../../assets/images/wjsp03f56d76-2d26-4806-9d29-848db9fbd5b5.jpg'
import dot6 from '../../../../assets/images/pe31c7c67-9c19-49ce-b289-89de93ab54ab.jpg'
import dot7 from '../../../../assets/images/tmxk08b45f9c-ad33-45f2-94a5-af9fd3dee5c7.jpg'
import dot8 from '../../../../assets/images/dnjxj1b27469d-1c7b-495b-9c81-53f3eb59d5b9.jpg'

const sliderData = [
  { bg: bg1, dot: dot1 },
  { bg: bg2, dot: dot2 },
  { bg: bg3, dot: dot3 },
  { bg: bg4, dot: dot4 },
  { bg: bg5, dot: dot5 },
  { bg: bg6, dot: dot6 },
  { bg: bg7, dot: dot7 },
  { bg: bg8, dot: dot8 },
]

const MainSlider = () => {
  const slider = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: styles.slickDots,
    appendDots: (dots) => {
      return (
        <ul>
          {sliderData.map((item, index) => {
            return (
              <li className={index === currentIndex && styles.slickActive}>
                <button
                  type="button"
                  onClick={() => {
                    slider.current.slickGoTo(index)
                  }}
                >
                  <img src={item.dot} className={styles.slickDotImg} />
                </button>
              </li>
            )
          })}
        </ul>
      )
    },
    afterChange: (index) => setCurrentIndex(index),
  }

  return (
    <section className={styles.wrapper}>
      <h2 class="a11y-hidden">메인 슬라이더</h2>
      <Slider ref={slider} {...settings}>
        {sliderData.map((item) => (
          <div>
            <div
              style={{ backgroundImage: `url(${item.bg})` }}
              className={styles.slideItem}
            >
              <a href="#" className={styles.more}>
                자세히 보기
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default MainSlider
