import styled from 'styled-components'
import img from './images/icon_gnb_open.png'

const GnbButton = styled.button`
  box-sizing: content-box;
  background: url(${img}) no-repeat 15px 16px/12px 22px;
  background-clip: content-box;
  border: 1px solid #dcdcdc;
  width: 12px;
  height: 10px;
  padding: 16px 15px;

  &.clicked {
    background: url(${img}) no-repeat 15px 4px / 12px 22px;
    background-clip: content-box;
  }
`

export default GnbButton
