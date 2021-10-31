import React, { useState } from 'react'
import styled from 'styled-components'
import arrow_icon from './images/icon_footer_arr.gif'

const Button = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 50px;
  font-weight: 300;
  border: 1px solid #dcdcdc;
  padding: 0 15px;
`

const Title = styled.span``

const ArrowIcon = styled.div`
  display: inline-block;
  width: 9px;
  height: 5px;
  background: url(${arrow_icon}) no-repeat left
    ${({ active }) => (active ? 'top' : 'bottom')};
`

const LinkDropdown = ({ title, items, ...restProps }) => {
  const [active, setActive] = useState(false)
  return (
    <Button onClick={() => setActive(!active)} {...restProps}>
      <Title>{title}</Title>
      <ArrowIcon active={active} />
    </Button>
  )
}

export default LinkDropdown
