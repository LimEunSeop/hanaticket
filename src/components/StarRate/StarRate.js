import React from 'react'
import styled from 'styled-components'
import star from './img_star_review.png'

const Wrapper = styled.div`
  display: inline-block;
  width: 106px;
  white-space: nowrap;
  overflow: hidden;
`

const ColoredStars = styled.div`
  display: inline-block;
  width: ${({ rate }) => rate * 22}px;
  height: 18px;
  background: url(${star}) no-repeat left bottom;
  vertical-align: top;
`

const NonColoredStars = styled.div`
  display: inline-block;
  width: ${({ rate }) => (5 - rate) * 22}px;
  height: 18px;
  background: url(${star}) no-repeat left top;
  vertical-align: top;
`

const StarRate = ({ rate, ...restProps }) => {
  return (
    <Wrapper aria-label={`${rate}점`} {...restProps}>
      <ColoredStars rate={rate} />
      <NonColoredStars rate={rate} />
    </Wrapper>
  )
}

export default StarRate
