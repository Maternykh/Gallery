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
        },
    ]
  return (
    <div>
        <Items photo={photo}/>
    </div>
  )
}

export default SchoolPhoto