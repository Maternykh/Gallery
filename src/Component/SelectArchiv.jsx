import React, { useState } from 'react'
import School from './Archiv/School/School';
import House from './Archiv/House/House';
import Other from './Archiv/Other/Other';
import Walk from './Archiv/Walk/Walk';

const SelectArchiv = () => {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const show1 = event => {
    setIsShown1(current => !current);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
  };
  const show2 = event => {
    setIsShown1(false);
    setIsShown2(current => !current);
    setIsShown3(false);
    setIsShown4(false);
  };
  const show3 = event => {
    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(current => !current);
    setIsShown4(false);
  };
  const show4 = event => {
    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(current => !current);
  };
  return (
    <div>
      <div className='parentselect'>
        <div className='Select' onClick={show1}>Школа</div>
        <div className='Select' onClick={show2}>Дом</div>
        <div className='Select' onClick={show3}>Гулянки</div>
        <div className='Select' onClick={show4}>Другое</div>
      </div>
      {isShown1 && <School/>}
      {isShown2 && <House/>}
      {isShown3 && <Walk/>}
      {isShown4 && <Other/>}
    </div>
  )
}

export default SelectArchiv