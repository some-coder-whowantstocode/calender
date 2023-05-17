import React from 'react';
import Year from './Year';
import './calender.css'
import List from './List';
import Csd from './Csd';


const Calender = () => {

  
  return (
    <div className='fapp'>
      <div className='topapp'>
      <div className="calender">
    <Year/>
    
    </div>
    <Csd/>
      </div>
    <div className="botapp">
   <List/>
    </div>
    </div>
  )
}

export default Calender
