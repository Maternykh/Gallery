import React, { useState } from 'react'
import HousePhoto from './HousePhoto';

const House = () => {
  const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      setIsShown(current => !current);
    };
  return (
  <div>
    {!isShown && <div className='House' onClick={handleClick}>
        <div className="image">
            <img src="./2.jpg" className='imga'/>
        </div>
        <div className="title">Дом</div>
        <div className="podskazka">Жмякни чтобы открыть</div>
    </div>}
    {isShown && <HousePhoto/>}
  </div>
  )
}

export default House