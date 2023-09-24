import React, { useState } from 'react'
import SchoolPhoto from './SchoolPhoto';
const School = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      setIsShown(current => !current);
    };
  return (
  <div>
    {!isShown && <div className='School' onClick={handleClick}>
        <div className="image">
            <img src="./1.jpg" className='imga'/>
        </div>
        <div className="title">Школа</div>
        <div className="podskazka">Жмякни чтобы открыть</div>
    </div>}
    {isShown && <SchoolPhoto/>}
  </div>
  )
}

export default School