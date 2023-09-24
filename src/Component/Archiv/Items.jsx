import React, { useState } from 'react'
function Items(props) {
  const [isImage1, setIsImage1] = useState(true);
  const [isImage2, setIsImage2] = useState(false);
  const [isImage3, setIsImage3] = useState(false);
  const [isPage1, setIsPage1] = useState(true);
  const [isPage2, setIsPage2] = useState(false);
  const [isOpenImage1, setIsOpenImage1] = useState(false);
  const [isOpenImage2, setIsOpenImage2] = useState(false);
  const [isOpenImage3, setIsOpenImage3] = useState(false);
  const open1 = event => {
    setIsOpenImage1(current => !current);
    setIsOpenImage2(false);
    setIsOpenImage3(false);
  };
  const open2 = event => {
    setIsOpenImage1(false);
    setIsOpenImage2(current => !current);
    setIsOpenImage3(false);
  };
  const open3 = event => {
    setIsOpenImage1(false);
    setIsOpenImage2(false);
    setIsOpenImage3(current => !current);
  };
  const page1 = event => {
    setIsPage1(true);
    setIsPage2(false);
  };
  const page2 = event => {
    setIsPage1(false);
    setIsPage2(true);
  };
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
    {isPage1 && <div>
    {props.photo.map(photo => {if(photo.page === 1) {return(
        <div className='posts' key={photo.id}>
          <div>
            {isImage1 && <img src={photo.image1} className="photophoto" onClick={open1}/>}
            {isImage2 && <img src={photo.image2} className="photophoto" onClick={open2}/>}
            {isImage3 && <img src={photo.image3} className="photophoto" onClick={open3}/>}
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
          {isOpenImage1 && <img src={photo.image1} className="fullphoto" onClick={open1}/>}
          {isOpenImage2 && <img src={photo.image2} className="fullphoto" onClick={open2}/>}
          {isOpenImage3 && <img src={photo.image3} className="fullphoto" onClick={open3}/>}
        </div>)}})}
    </div>}
    {isPage2 && <div>
    {props.photo.map(photo => {if(photo.page === 2) {return(
        <div className='posts' key={photo.id}>
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
          {isOpenImage1 && <img src={photo.image1} className="fullphoto" onClick={open1}/>}
          {isOpenImage2 && <img src={photo.image2} className="fullphoto" onClick={open2}/>}
          {isOpenImage3 && <img src={photo.image3} className="fullphoto" onClick={open3}/>}
        </div>)}})}
    </div>}
          <div className="containerpage">
            <div className="pageselec" onClick={page1}>1</div>
            <div className="pageselec" onClick={page2}>2</div>
          </div>
    </div>
  )
}

export default Items