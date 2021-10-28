import React from 'react'

import img1 from '../../../../assets/images/gkqf7e87c59-41dd-45fb-9e0c-3377fee641d1.jpg'
import img2 from '../../../../assets/images/anzkec787e92-b71e-47e0-8e45-adeac1f91a3a.jpg'
import img3 from '../../../../assets/images/p2f5533d6-c104-4019-b1c2-2a4d5849d0c7.jpg'
import ItemTemplate from './ItemTemplate'

const data = [
  [
    {
      title: '하나 된 우리 동요',
      hall: '세종문화회관 M씨어터',

      startDate: '2019.04.05',
      endDate: '2019.04.06',
      img: img1,
    },
    {
      title: 'Mukai Taichi Asia Tour 20',
      hall: '하나투어 V홀',
      startDate: '2019.04.06',
      endDate: '2019.04.06',
      img: img2,
    },
    {
      title: '[서울-중랑구] 가족어린이공연 [공룡애니멀쇼]',
      hall: '중랑구민회관 대극장',
      startDate: '2019.04.06',
      endDate: '2019.04.06',
      img: img3,
    },
  ],
  [],
  [],
  [],
  [],
]

const Location = ({ idx }) => {
  return <ItemTemplate data={data[idx]} />
}

export default Location
