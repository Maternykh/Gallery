import React, { useState } from 'react'
import OtherPhoto from './OtherPhoto';



const Other = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      setIsShown(current => !current);
    };
  return (
  <div>
    {!isShown && <div className='Other' onClick={handleClick}>
        <div className="image">
            <img src="./4.jpg" className='imga'/>
        </div>
        <div className="title">Другое</div>
    </div>}
    {isShown && <OtherPhoto/>}
  </div>
  )
}

export default Other