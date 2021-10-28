import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  margin-top: 55px;
  width: 100%;
`

const MainBanner = ({ img, href }) => {
  return (
    <a href={href}>
      <Img src={img} alt="" />
    </a>
  )
}

export default MainBanner
