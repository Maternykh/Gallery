import React from 'react'
import Items from '../Items'

function HousePhoto() {
    const photo = [
        {
            id:1,
            title1:"Устал",
            title2:"Артурчик в очках",
            title3:"Как же достала эта фезека",
            image1:"./8.jpg",
            image2:"./9.jpg",
            image3:"./10.jpg",
            desc1:"Я задолбался",
            desc2:"А где очки",
            desc3:"Блин мне еще сдавать ее",
            page:1,
        },
        {
            id:2,
            title1:"Зубная щечка для чистки зубов",
            title2:"Турникмен",
            title3:"Араб черный раб на полу",
            image1:"./11.jpg",
            image2:"./12.jpg",
            image3:"./13.jpg",
            desc1:"Во рту землятрясение сиии",
            desc2:"Планка в воздухе",
            desc3:"А потом мы его запинали",
            page:2,
        },
    ]
  return (
    <div>
         <Items photo={photo}/>
    </div>
  )
}

export default HousePhoto