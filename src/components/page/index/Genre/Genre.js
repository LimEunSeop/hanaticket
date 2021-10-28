import React from 'react'
import * as styles from './Genre.module.scss'

import img1 from '../../../../assets/images/recom_fuerzbb893d3f-fb4b-49eb-a928-eea47dd068b3.jpg'
import img2 from '../../../../assets/images/recom_king92e62344-abd4-4f37-b051-51bde1376d3e.jpg'
import img3 from '../../../../assets/images/recom_sskde1a99d5-394a-45fb-8923-493d2d78574f.jpg'
import img4 from '../../../../assets/images/recom_dinnerdf2b36f7-3bda-4c19-832e-ec8e3b3ee605.jpg'
import img5 from '../../../../assets/images/recom_gumy4fec2300-fe86-4418-b94e-d813e370cd41.jpg'
import img6 from '../../../../assets/images/recom_tayoc8c80c59-5286-405f-9e1a-961d62e6d873.jpg'
import img7 from '../../../../assets/images/recom_nabilf3b11587-4af7-46c4-9881-c94335b0982c.jpg'
import img8 from '../../../../assets/images/recom_pink99dfdc88-4e9d-4376-b862-f1b74496e41c.jpg'

const Genre = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>장르별 추천</h2>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <a href="#">
            <img src={img1} alt="내한공연 - 푸에르자 부르타. 웨이라 인 서울" />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="#">
            <img
              src={img2}
              alt="뮤지컬 - 킹아더. 맞이하라, 전설의시작. 마침내 만나는 새로운 프랑스 뮤지컬"
            />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="#">
            <img
              src={img3}
              alt="콘서트 - 성시경 소극장 콘서트 노래. 오늘 당신의 하루 그 곁에 함께 할게요"
            />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="#">
            <img
              src={img4}
              alt="콘서트 - 어버이날 디너쇼. 어버이날을 맞이하여 특별한 디너쇼를 준비했습니다"
            />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="#">
            <img
              src={img5}
              alt="콘서트 - 거미 투어 콘서트. This is Gummy. 청주, 성남, 제주."
            />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="#">
            <img
              src={img6}
              alt="테마/체험 - 타요 키즈카페. 꼬마버스 타요 키즈카페 30개 지점!"
            />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="#">
            <img
              src={img7}
              alt="창작가무극 - 나빌레라. 화제의 웹툰! 무대에 오르다"
            />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="#">
            <img
              src={img8}
              alt="클래식 - 핑크퐁 클래식 나라. 우리 아이 첫 번째 클래식 공연. 뚜띠를 찾아라"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Genre
