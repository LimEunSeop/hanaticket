import React from 'react'
import LinkDropdown from '../Buttons/LinkDropdown'
import * as styles from './Footer.module.scss'

import icon_info_arr from '../../assets/icons/icon_info_arr.gif'

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <h2 className="a11y-hidden">사이트 푸터</h2>
      <div className={styles.footerTop}>
        <div className={styles.links}>
          <a href="#">공연등록문의</a>
          <a href="#">공연예매문의</a>
          <a href="#">회사소개</a>
          <a href="#" className={styles.highlight}>
            개인정보처리방침
          </a>
          <a href="#">여행약관</a>
          <a href="#">이용약관</a>
          <a href="#">광고/제휴</a>
        </div>
        <div className={styles.dropdowns}>
          <LinkDropdown
            title="글로벌 네트워크"
            style={{ marginRight: '-1px' }}
          />
          <LinkDropdown title="패밀리 사이트" />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.left}>
          <address className={styles.address}>
            <span>
              (주)하나투어대표:김진국 주소:서울특별시 종로구 인사동5길 41
            </span>
            <span>
              사업자 등록번호: 102-81-39440 통신판매업신고번호: 종로 01-1806호
              사업자정보확인 관광사업자 등록번호: 제1993-000006호
            </span>
            <span>
              고객센터: 1577-1233 팩스: 02-734-0392 개인정보 보호책임자: 박영학
            </span>
            <span>
              부득이한 사정에 의해 여행일정이 변경되는 경우 여행자의 사전 동의를
              받습니다.
            </span>
          </address>
          <p className={styles.copyright}>
            COPYRIGHT(C) HANATOUR SERVICE INC. ALL RIGHT RESERVED.
          </p>
        </div>
        <div className={styles.right}>
          <b>하나은행 구매안전 서비스</b>
          <p>
            고객님은 안전거래를 위해 현금으로 결제시 (주)하나투어에서 가입한
            하나은행으로 구매안전서비스를 이용하실 수 있습니다.
          </p>
          <a href="#">
            <span>서비스 가입사실 확인</span>
            <img src={icon_info_arr} alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
