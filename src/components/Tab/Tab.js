import React, { useState } from 'react'
import styled from 'styled-components'

const TabList = styled.ul`
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`

const TabItem = styled.li`
  float: left;
  width: ${({ width }) => width}%;
  text-align: center;
`
const Button = styled.button`
  position: relative;
  width: 100%;
  height: 45px;
  line-height: 45px;
  border: 1px solid #dcdcdc;
  border-bottom: 1px solid #000;

  &.active {
    z-index: 999;
    border: 1px solid #000;
    border-bottom: none;
  }
`

const Tab = ({ data, onTabItemClick }) => {
  const [activeIdx, setActiveIdx] = useState(0)

  const handleTabButtonClick = (i, e) => {
    setActiveIdx(i)

    onTabItemClick && onTabItemClick(i)
  }

  return (
    <TabList>
      {data.map((item, i) => (
        <TabItem width={100 / data.length} key={item}>
          <div style={{ marginLeft: '-1px' }}>
            <Button
              type="button"
              onClick={handleTabButtonClick.bind(null, i)}
              className={i === activeIdx && 'active'}
            >
              {item}
            </Button>
          </div>
        </TabItem>
      ))}
    </TabList>
  )
}

export default Tab
