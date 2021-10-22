import React from 'react'
import icon_more from './images/icon_more.gif'
import styled from 'styled-components'

const StyledLink = styled.a`
  position: relative;
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 1px solid #dcdcdc;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const MoreLink = ({ to, ...props }) => {
  return (
    <StyledLink href={to} {...props}>
      <img src={icon_more} alt="" />
    </StyledLink>
  )
}

export default MoreLink
