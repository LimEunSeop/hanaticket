import React from 'react'

import img1 from '../../../../assets/images/300x38845b8bbe6-31fb-4dd6-8969-3ca5ae53bd95.jpg'
import img2 from '../../../../assets/images/pde0a50cc-6882-4425-a6db-dd6a4aca6c2f.jpg'
import img3 from '../../../../assets/images/p5f717fb9-4c1d-44cd-8bf5-cd8e8950093c.jpg'
import ItemTemplate from './ItemTemplate'

const data = [
  [
    {
      title: '오르간 시리즈 XIII. 티에리 에스카이쉬',
      hall: '롯데콘서트홀',
      startDate: '2019.05.21',
      endDate: '2019.05.21',
      img: img1,
    },
    {
      title: '[L Concert] 김정원의 음악신보 : 브람스',
      hall: '롯데콘서트홀',
      startDate: '2019.03.13',
      endDate: '2019.11.13',
      img: img2,
    },
    {
      title: '월트 디즈니 <데케이드 인 콘서트>',
      hall: '롯데콘서트홀',
      startDate: '2019.11.29',
      endDate: '2019.11.30',
      img: img3,
    },
  ],
  [],
  [],
  [],
  [],
]

const Arthall = ({ idx }) => {
  return <ItemTemplate data={data[idx]} />
}

export default Arthall
