import React, { useState } from 'react'

function Items(props) {
  const [isImage1, setIsImage1] = useState(true);
  const [isImage2, setIsImage2] = useState(false);
  const [isImage3, setIsImage3] = useState(false);
  const image1 = event => {
    setIsImage1(true);
    setIsImage2(false);
    setIsImage3(false);
  };
  const image2 = event => {
    setIsImage1(false);
    setIsImage2(true);
    setIsImage3(false);
  };
  const image3 = event => {
    setIsImage1(false);
    setIsImage2(false);
    setIsImage3(true);
  };
  return (
    <div>
    {props.photo.map(photo => (
        <div className='posts' >
          <div>
            {isImage1 && <img src={photo.image1} className="photophoto"/>}
            {isImage2 && <img src={photo.image2} className="photophoto"/>}
            {isImage3 && <img src={photo.image3} className="photophoto"/>}
          </div>
          <div className="minifotka">
            <div className="minifotochka" onClick={image1}>1</div>
            <div className="minifotochka" onClick={image2}>2</div>
            <div className="minifotochka" onClick={image3}>3</div>
          </div>
          {isImage1 && <div className="titlephoto">{photo.title1}</div>}
          {isImage2 && <div className="titlephoto">{photo.title2}</div>}
          {isImage3 && <div className="titlephoto">{photo.title3}</div>}
          {isImage1 && <div className="descphoto">{photo.desc1}</div>}
          {isImage2 && <div className="descphoto">{photo.desc2}</div>}
          {isImage3 && <div className="descphoto">{photo.desc3}</div>}
        </div>))}
    </div>
  )
}

export default Items