import React from 'react'
import Items from '../Items';

function SchoolPhoto() {
    const photo = [
        {
          id:1,
          title1:"Слежка",
          title2:"Дамыр стаит",
          title3:"Учу мучу пэсню",
          image1:"./5.jpg",
          image2:"./6.jpg",
          image3:"./7.jpg",
          desc1:"Черная вяка в телефоне",
          desc2:"Дамыр понторез",
          desc3:"Кому нужны скриншоты",
          page:1,
        },
        {
          id:2,
          title1:"Инвалыд стаит",
          title2:"Инвалыда вяжут",
          title3:"Инвалыда гладят",
          image1:"./14.jpg",
          image2:"./15.jpg",
          image3:"./16.jpg",
          desc1:"Прототип экзоскелета правой ноги",
          desc2:"Лицо сигмы",
          desc3:"Муслим куда ручки тянешь ай ай ай",
          page:2,
        },
    ]
  return (
    <div>
        <Items photo={photo}/>
    </div>
  )
}

export default SchoolPhoto