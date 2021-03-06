import React, { useState } from 'react'
import SimpleTab from '../../../Tab/SimpleTab'
import Arthall from './Arthall'
import Location from './Location'

const wrapperStyle = { display: 'flex', justifyContent: 'space-between' }
const sectionStyle = { width: '525px' }
const headingStyle = {
  textAlign: 'center',
  fontSize: '24px',
  marginTop: '40px',
}

const TicketCategory = () => {
  const [locationIdx, setLocationIdx] = useState(0)
  const [arthallIdx, setArthallIdx] = useState(0)

  return (
    <section style={wrapperStyle}>
      <h2 className="a11y-hidden">티켓 카테고리</h2>
      <section style={sectionStyle}>
        <h3 style={headingStyle}>지역</h3>
        <SimpleTab
          data={['서울/경기권', '강원/충청권', '경상권', '전라권', '제주']}
          onTabItemClick={(idx) => setLocationIdx(idx)}
        />
        <Location idx={locationIdx} />
      </section>
      <section style={sectionStyle}>
        <h3 style={headingStyle}>공연장</h3>
        <SimpleTab
          data={['롯데콘서트홀', '세종문화회관', '하나투어V홀', '예술의전당']}
          onTabItemClick={(idx) => setArthallIdx(idx)}
        />
        <Arthall idx={arthallIdx} />
      </section>
    </section>
  )
}

export default TicketCategory
