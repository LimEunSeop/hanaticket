import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  gap: 10px 90px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: min(calc((100vw - 100%) / -2), 0px);
    z-index: -1;
    background-color: #fff;
    display: block;
    width: 100vw;
    height: 100%;
    min-width: 100%;
    border-top: 1px solid #dcdcdc;
  }
`

const Heading = styled.h3`
  padding-bottom: 15px;
  border-bottom: 2px solid #000;
`

const SubmenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  a:hover {
    text-decoration: underline;
  }
`

const FullNav = ({ data, opened }) => {
  if (!opened) return null

  return (
    <StyledNav>
      {data.map((menuInfo) => (
        <section>
          <Heading>{menuInfo.menuName}</Heading>
          <SubmenuList>
            {menuInfo.subMenus.map((submenuName) => (
              <li>
                <a href="#">{submenuName}</a>
              </li>
            ))}
          </SubmenuList>
        </section>
      ))}
    </StyledNav>
  )
}

export default FullNav
