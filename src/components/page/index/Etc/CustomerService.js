import React from 'react'
import styled, { css } from 'styled-components'

import icon_cs from '../../../../assets/icons/icon_cs.png'

const height = 126

const images = {
  paymentMethod: {
    offset: 0,
    width: 44,
    height: 36,
  },
  fee: {
    offset: 48,
    width: 36,
    height: 36,
  },
  refund: {
    offset: 88,
    width: 49,
    height: 36,
  },
  shipment: {
    offset: 141,
    width: 44,
    height: 36,
  },
  faq: {
    offset: 189,
    width: 44,
    height: 43,
  },
  ticketingMethod: {
    offset: 237,
    width: 44,
    height: 39,
  },
}

const ContentWrapper = styled.div`
  border: 1px solid #dcdcdc;

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`

const CustomerLink = styled.a`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  /* vertical-align: top; */

  ${({ imageName }) => css`
    width: ${images[imageName].width}px;
    height: 70px;
    background: url(${icon_cs}) no-repeat ${images[imageName].offset * -1}px top;
  `}
`

const LinkText = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  white-space: nowrap;
  word-break: keep-all;
`

const Links = styled.div`
  float: left;
  display: flex;
  justify-content: space-evenly;
  width: calc(100% - 262px);
  height: ${height}px;
`

const TextContent = styled.div`
  float: left;
  width: 262px;
  height: ${height}px;
  border-left: 1px solid #dcdcdc;
  padding: 25px;
`

const CustomerCenterInfo = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const Phone = styled.span`
  font-size: 26px;
  font-weight: 600;
  color: #c83d7f;
  margin-bottom: 15px;
`

const OfficeHour = styled.span`
  line-height: 1.3;
  color: #888;

  span:nth-of-type(1) {
    display: inline-block;
    width: 60px;
  }
  span:nth-of-type(2) {
  }
`

const Wrapper = styled.section`
  margin-top: 50px;
`

const CustomerService = () => {
  return (
    <Wrapper>
      <h3 className="a11y-hidden">고객지원</h3>

      <ContentWrapper>
        <Links>
          <CustomerLink href="#" imageName={`paymentMethod`}>
            <LinkText>결제방법</LinkText>
          </CustomerLink>
          <CustomerLink href="#" imageName={`fee`}>
            <LinkText>수수료</LinkText>
          </CustomerLink>
          <CustomerLink href="#" imageName={`refund`}>
            <LinkText>취소/환불</LinkText>
          </CustomerLink>
          <CustomerLink href="#" imageName={`shipment`}>
            <LinkText>배송/발권</LinkText>
          </CustomerLink>
          <CustomerLink href="#" imageName={`faq`}>
            <LinkText>FAQ</LinkText>
          </CustomerLink>
          <CustomerLink href="#" imageName={`ticketingMethod`}>
            <LinkText>티켓예매방법</LinkText>
          </CustomerLink>
        </Links>
        <TextContent>
          <CustomerCenterInfo>
            <Phone>
              <span className="a11y-hidden">고객센터 전화번호</span>1566-6668
            </Phone>
            <OfficeHour>
              <span>평일</span>
              <span>09:00 ~ 18:00</span>
            </OfficeHour>
            <OfficeHour>
              <span>토요일</span>
              <span>10:00 ~ 18:00</span>
            </OfficeHour>
          </CustomerCenterInfo>
        </TextContent>
      </ContentWrapper>
    </Wrapper>
  )
}

export default CustomerService
