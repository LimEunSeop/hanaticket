import React from 'react'
import styled, { css } from 'styled-components'
import img from './images/icon_util_arr_2.gif'

const borderSize = 1
const padding = 6

const Wrapper = styled.div`
  position: relative;
  white-space: nowrap;
`

const PrimaryLink = styled.a`
  &::after {
    content: '';
    display: inline-block;
    width: 5px;
    height: 4px;
    background: ${({ opened }) =>
      opened
        ? css`url(${img}) no-repeat center bottom`
        : css`url(${img}) no-repeat center top`};
    vertical-align: middle;
    margin-left: 9px;
  }
`

const StyledUl = styled.ul`
  display: none;
  color: #333;
  background-color: #fff;
  border: ${borderSize + 'px'} solid #000;
  padding: ${padding + 'px'};
  li + li {
    margin-top: 8px;
  }

  ${Wrapper}:hover & {
    display: block;
    position: absolute;
    top: ${(padding + borderSize) * -1 + 'px'};
    left: ${(padding + borderSize) * -1 + 'px'};
    z-index: 999;

    ${PrimaryLink}, a:hover {
      color: #c83d7f;
    }
  }
`

const ExpandableLinks = ({ links, ...props }) => {
  return (
    <Wrapper {...props}>
      <PrimaryLink href={links[0].url} opened={false}>
        {links[0].name}
      </PrimaryLink>
      <StyledUl>
        {links.map((link, index) =>
          index === 0 ? (
            <li>
              <PrimaryLink href={link.url} opened={true}>
                {link.name}
              </PrimaryLink>
            </li>
          ) : (
            <li>
              <a href={link.url}>{link.name}</a>
            </li>
          )
        )}
      </StyledUl>
    </Wrapper>
  )
}

ExpandableLinks.defaultProps = {
  links: [{ name: '', url: '' }],
}

export default ExpandableLinks
