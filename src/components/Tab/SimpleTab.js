import React, { useState } from 'react'
import styled from 'styled-components'

const TabList = styled.ul`
  text-align: center;
`

const TabItem = styled.li`
  display: inline-block;

  & + li {
    margin-left: 25px;
  }
`
const Button = styled.button`
  height: 35px;
  line-height: 35px;
  padding: 0;
  color: #888;

  &.active {
    color: #000;
    border-bottom: 2px solid #000;
  }
`

const SimpleTab = ({ data, onTabItemClick }) => {
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

export default SimpleTab
