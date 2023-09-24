import React from 'react'
import Items from '../Items';

function WalkPhoto() {
    const photo = [
        {
           id:1,
           title1:"Да мне это, к татару надо сходить",
           title2:"Вот теперь норм",
           title3:"Кстати трава та вкусная была",
           image1:"./17.jpg",
           image2:"./18.jpg",
           image3:"./19.jpg",
           desc1:"Вот здесь бока подровнять",
           desc2:"А то че я нефор чтоли",
           desc3:"Это чо за сорт",
           page:1,
        },
        {
            id:2,
            title1:"Эшпощьмак с горящим щаем",
            title2:"ЭТАААА ЛАДА ПРИОРАААА",
            title3:"Становая тяга",
            image1:"./20.jpg",
            image2:"./21.jpg",
            image3:"./22.jpg",
            desc1:"5 по китайскому",
            desc2:"Ласточка",
            desc3:"Ни один негр не пострадал",
            page:2,
         },
    ]
  return (
    <div>
        <Items photo={photo}/>
    </div>
  )
}

export default WalkPhoto