import React, { useState } from 'react'
import GnbButton from '../Buttons/GnbButton'
import * as styles from './Navigation.module.scss'
import classnames from 'classnames/bind'
import NavDetail from './NavDetail'
import recommendImgs from './recommendImgs'

import header_icon1 from '../../assets/icons/header_icon1.png'
import header_icon2 from '../../assets/icons/header_icon2.png'
import header_icon3 from '../../assets/icons/header_icon3.png'
import bannerImg1 from '../../assets/images/nijin89ae89e0-ab30-4283-abd9-0dea3af85aad.jpg'
import bannerImg2 from '../../assets/images/jangb186ed7a-d1fe-4bd1-9d84-73312e4dbdd9.jpg'
import bannerImg3 from '../../assets/images/mother34e49be5-a1b2-43c5-adc5-606ae7f28632.jpg'
import bannerImg4 from '../../assets/images/pinkpong53b280aa-3389-4663-9c56-4edc42f6bb58.jpg'
import bannerImg5 from '../../assets/images/tayoc3bee26b-41d2-4adb-8519-0a09644a9bde.jpg'
import bannerImg6 from '../../assets/images/face3308b250-e02f-4bb5-b886-3e1f37937fe3.jpg'
import bannerImg7 from '../../assets/images/hobi49fcd503-3283-4bcb-a0d8-4891671181e3.jpg'
import FullNav from './FullNav'

const data = [
  {
    menuName: '뮤지컬',
    subMenus: [
      '라이센스',
      '창작뮤지컬',
      '넌버벌 퍼포먼스',
      '오리지널 / 내한공연',
    ],
    // bannerTitle: '뮤지컬 [ 니진스키 ]',
    // bannerContent: '나는 모든사람을 사랑했지만, 아무도 나를 사랑하지 않는다.',
    // bannerEtc: '2019.05.28 ~ 2019.08.18',
    bannerImg: bannerImg1,
    recommendImgs: recommendImgs[0],
  },
  {
    menuName: '콘서트',
    subMenus: [
      '국내가수',
      '해외가수',
      '페스티벌',
      '매직',
      '개그',
      '토크/강연',
      '추천 콘서트',
    ],
    // bannerTitle: '2019 장범준 전국공연',
    // bannerContent: '노래방에서',
    // bannerEtc: '부산 / 전주 / 대전 / 광주 / 천안 / 여수',
    bannerImg: bannerImg2,
    recommendImgs: recommendImgs[1],
  },
  {
    menuName: '연극',
    subMenus: ['정극', '코믹', '스릴러', '멜로'],
    // bannerTitle: '연극 [ 친정엄마와 2박3일 ]',
    // bannerContent: '2009년 초연이래 누적관객 64만 명 동원!',
    // bannerEtc: '대전 / 목포 / 당진',
    bannerImg: bannerImg3,
    recommendImgs: recommendImgs[2],
  },
  {
    menuName: '클래식',
    subMenus: ['클래식', '오페라', '발레/무용', '국악'],
    // bannerTitle: '핑크퐁 클래식 나라',
    // bannerContent: '뚜띠를 찾아라',
    // bannerEtc: '2019.05.06 ~ 2019.05.06',
    bannerImg: bannerImg4,
    recommendImgs: recommendImgs[3],
  },
  {
    menuName: '레저',
    subMenus: ['스키/골프', '테마/체험', '워터파크'],
    // bannerTitle: '꼬마버스 타요 키즈카페',
    // bannerContent: '타요 키즈카페 30개 지점 오픈',
    // bannerEtc: 'OpenRun',
    bannerImg: bannerImg5,
    recommendImgs: recommendImgs[4],
  },
  {
    menuName: '전시/행사',
    subMenus: ['전시/체험', '행사/축제'],
    // bannerTitle: '영화의 얼굴창조展',
    // bannerContent: '분장사 조태희, 한국 영화 분장의 방대한 기록',
    // bannerEtc: '2018.12.29 ~ 2019.04.23',
    bannerImg: bannerImg6,
    recommendImgs: recommendImgs[5],
  },
  {
    menuName: '아동/가족',
    subMenus: ['연극', '뮤지컬', '체험', '클래식/무용/국악'],
    // bannerTitle: '어린이율동놀이뮤지컬[호비쇼]',
    // bannerContent: '냠냠 구슬의 비밀',
    // bannerEtc: '서울/경기광주/창원/천안/인천/수원/대구/부산',
    bannerImg: bannerImg7,
    recommendImgs: recommendImgs[6],
  },
]

const cx = classnames.bind(styles)

const Navigation = () => {
  const [activeDetailIdx, setActiveDetailIdx] = useState(null)
  const [fullNavOpened, setFullnavOpened] = useState(false)

  const handleNavMouseEnter = (e) => {
    const currentTarget = e.currentTarget
    const menuIdx = Number(currentTarget.dataset.index)
    setActiveDetailIdx(menuIdx)
  }
  const handleNavMouseLeave = () => {
    setActiveDetailIdx(null)
  }
  const handleEtcNavMouseEnter = () => {
    setActiveDetailIdx(null)
  }
  const handleFullNavButtonClick = () => {
    setFullnavOpened(!fullNavOpened)
  }

  return (
    <section onMouseLeave={handleNavMouseLeave} className={styles.wrapper}>
      <h2 className="a11y-hidden">네비게이션</h2>
      <nav className={styles.primaryMenu}>
        <GnbButton
          type="button"
          aria-label={fullNavOpened ? '네비게이션 펼치기' : '네비게이션 닫기'}
          className={fullNavOpened && 'clicked'}
          onClick={handleFullNavButtonClick}
          onMouseEnter={handleEtcNavMouseEnter}
          style={{ marginBottom: '-1px' }}
        />
        <ul>
          {[
            '뮤지컬',
            '콘서트',
            '연극',
            '클래식',
            '레저',
            '전시/행사',
            '아동/가족',
          ].map((menuName, index) => (
            <li
              className={cx('first', index === activeDetailIdx && 'active')}
              data-index={index}
              onMouseEnter={handleNavMouseEnter}
            >
              <a href="#">{menuName}</a>
            </li>
          ))}

          {['Hani', '위클리픽', '이벤트/혜택'].map((menuName, index) => (
            <li
              className={cx('second', index === 0 && 'hasBorder')}
              onMouseEnter={handleEtcNavMouseEnter}
            >
              <a href="#">{menuName}</a>
            </li>
          ))}

          {[
            { menuName: '랭킹', icon: header_icon1 },
            { menuName: '지역', icon: header_icon2 },
            { menuName: '공연장', icon: header_icon3 },
          ].map((item, index) => (
            <li
              className={cx('third', index === 0 && 'hasBorder')}
              onMouseEnter={handleEtcNavMouseEnter}
            >
              <a href="#">
                <img src={item.icon} alt="" />
                <span>{item.menuName}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <NavDetail data={activeDetailIdx !== null && data[activeDetailIdx]} />
      <FullNav data={data} opened={fullNavOpened} />
    </section>
  )
}

export default Navigation
