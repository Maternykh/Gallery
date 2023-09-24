import React from 'react'
import Items from '../Items';

function OtherPhoto() {
    const photo = [
        {
          id:1,
          title1:"Симпл",
          title2:"Толик щебень",
          title3:"На мозги не давит зато",
          image1:"./23.jpg",
          image2:"./24.jpg",
          image3:"./25.jpg",
          desc1:"Дайте ему авп он все сделает",
          desc2:"Чето молодо он выглядит для ребенка 90-х",
          desc3:"Да там давить нечего",
          page:1,
        },
        {
          id:2,
          title1:"Домашний",
          title2:"Толик щебень2",
          title3:"У него дела по бизнесу",
          image1:"./26.jpg",
          image2:"./27.jpg",
          image3:"./28.jpg",
          desc1:"Уютно тебе на диванчике",
          desc2:"Сиквел",
          desc3:"ахахахахахахахахахаах",
          page:2,
         },
    ]
  return (
    <div>
        <Items photo={photo}/>
    </div>
  )
}

export default OtherPhoto