import React from 'react'
import styled from 'styled-components'
// import MoreLink from '../../../Buttons/MoreLink'

import thumbnail from '../../../../assets/images/mqdefault (1).jpg'
import playIcon from '../../../../assets/icons/icon_popup_mov.png'

const imageHeight = 170

const Header = styled.header`
  position: relative;

  /* & > a {
    position: absolute !important;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  } */
`

const Heading = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`

const ContentWrapper = styled.div`
  border: 1px solid #dcdcdc;

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`

const ThumbnailWrapper = styled.div`
  position: relative;
  float: left;

  &::after {
    content: url(${playIcon});
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    line-height: 220px;
  }
`

const Thumbnail = styled.img`
  position: relative;
  width: 150px;
  height: ${imageHeight}px;
`

const TextContent = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 150px);
  height: ${imageHeight}px;
  padding: 20px;

  span:nth-of-type(2) {
    font-size: 14px;
    color: #888;
  }
`

const HotClip = () => {
  return (
    <article>
      <Header>
        <Heading>Hot Clip</Heading>
        {/* <MoreLink href="#" /> */}
      </Header>
      <a href="#">
        <ContentWrapper>
          <ThumbnailWrapper>
            <Thumbnail src={thumbnail} alt="맥북이 책상에 올려져 있음" />
          </ThumbnailWrapper>
          <TextContent>
            <span>하나티켓 영상 보기</span>
            <span>Open Run</span>
          </TextContent>
        </ContentWrapper>
      </a>
    </article>
  )
}

export default HotClip
