import React from 'react'
import styled from 'styled-components'
import CustomerService from './CustomerService'
import Event from './Event'
import HotClip from './HotClip'
import Notice from './Notice'

const Wrapper = styled.section`
  margin-top: 50px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`

const Etc = () => {
  return (
    <Wrapper>
      <h2 className="a11y-hidden">기타영역</h2>
      <Grid>
        <Notice />
        <Event />
        <HotClip />
      </Grid>
      <CustomerService />
    </Wrapper>
  )
}

export default Etc
