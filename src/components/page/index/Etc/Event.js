import React from 'react'
import styled from 'styled-components'
import MoreLink from '../../../Buttons/MoreLink'

import img from '../../../../assets/images/eve_end6b62245a-b8d3-4769-bfb0-2dd87ef0743d.jpg'

const Header = styled.header`
  position: relative;

  & > a {
    position: absolute !important;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`

const Heading = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`

const Event = () => {
  return (
    <article>
      <Header>
        <Heading>이벤트</Heading>
        <MoreLink href="#" />
      </Header>
      <a href="#">
        <img
          src={img}
          alt="2019 하나티켓 여름 페스테벌 기획전. 하나티켓 혜택 쏙~빨아먹자! 끗빨나는 혜택 이달의 끗빨"
          style={{ width: '100%', height: '170px' }}
        />
      </a>
    </article>
  )
}

export default Event
