import React from 'react'
import styled from 'styled-components'
import MoreLink from '../../../Buttons/MoreLink'

const NoticeList = styled.div`
  font-size: 14px;
  margin-top: 10px;
`

const NoticeItem = styled.a`
  display: block;
  margin: 0;
  padding: 20px 0;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;

  & + a {
    margin-top: -1px;
  }
`

const Category = styled.span`
  display: inline-block;
  width: 120px;
  font-weight: 500;
  color: #c83d7f;

  &::before {
    content: '[';
  }
  &::after {
    content: ']';
  }
`

const Title = styled.span`
  width: calc(100% - 120px);
  overflow: hidden;
  text-overflow: ellipsis;
`

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
`

const Notice = () => {
  return (
    <article>
      <Header>
        <Heading>공지사항</Heading>
        <MoreLink href="#" />
      </Header>

      <NoticeList>
        <NoticeItem href="#">
          <Category>기타</Category>
          <Title>2019년 4월 카드사 업종 무이자 이벤...</Title>
        </NoticeItem>
        <NoticeItem href="#">
          <Category>시스템점검</Category>
          <Title>ENTI SSL 작업으로 인한 연동 판매 ...</Title>
        </NoticeItem>
        <NoticeItem href="#">
          <Category>시스템점검</Category>
          <Title>카카오페이 결제 서비스 장비 교체...</Title>
        </NoticeItem>
      </NoticeList>
    </article>
  )
}

export default Notice
