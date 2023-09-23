import React, { useState } from 'react'
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'
import SelectArchiv from './SelectArchiv';
const Archiv = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      setIsShown(current => !current);
    };
  return (
    <div className='Archiv'>
        <div className="selectarchiv">Выберите архив</div>
        <div className="buttonshow" onClick={handleClick}>
          {!isShown && <RiArrowDownSLine/>}
          {isShown && <RiArrowUpSLine/>}
        </div>
        {isShown && <SelectArchiv/>}
    </div>
  )
}

export default Archiv