import React, { useState } from 'react'
import WalkPhoto from './WalkPhoto';
const Walk = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      setIsShown(current => !current);
    };
  return (
  <div>
    {!isShown && <div className='Walk' onClick={handleClick}>
        <div className="image">
            <img src="./3.jpg" className='imga'/>
        </div>
        <div className="title">Гулянки</div>
        <div className="podskazka">Жмякни чтобы открыть</div>
    </div>}
    {isShown && <WalkPhoto/>}
  </div>
  )
}

export default Walk