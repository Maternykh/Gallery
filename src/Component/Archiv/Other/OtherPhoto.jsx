import React from 'react'
import Items from '../Items';

function OtherPhoto() {
    const photo = [
        {
           id:1,
           title:"Какое-то название1",
           image1:"./2.jpg",
           image2:"./2.jpg",
           image3:"./3.jpg",
           desc:"Какое-то описание1"
        },
        {
            id:2,
            title:"Какое-то название2",
            image1:"./1.jpg",
            image2:"./2.jpg",
            image3:"./3.jpg",
            miniimage:"./2.jpg",
            desc:"Какое-то описание2"
         },
         {
            id:3,
            title:"Какое-то название3",
            image1:"./1.jpg",
            image2:"./2.jpg",
            image3:"./3.jpg",
            miniimage:"./3.jpg",
            desc:"Какое-то описание3"
          },
    ]
  return (
    <div>
        <Items photo={photo}/>
    </div>
  )
}

export default OtherPhoto