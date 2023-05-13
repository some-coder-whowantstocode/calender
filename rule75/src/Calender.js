import React from 'react';
import Year from './Year';
import './calender.css'
import List from './List';

const Calender = () => {

  
  return (
    <div >
    <div className="calender">
    <Year/>
   
    </div>
   <List/>
    </div>
  )
}

export default Calender
