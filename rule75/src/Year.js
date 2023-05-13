import React ,{ useEffect, useState } from 'react'
import './year.css'
import Month from './Month';
import Todo from './Todo';

const Year = () => {

    const[year,setyear]=useState()

    let newdate = new Date();
    let y = newdate.getFullYear()

    useEffect((e)=>{
        setyear(Number(y))

    },[y])

    const changeyear =(index)=>{
        setyear(year + index)
    }

  return (
    <>
    <div className='yearbox'>
      <div className='ye'>
      <button className="back" onClick={()=>changeyear(-1)}>{'<'}</button>
      <div className="year">{year}</div>
      <button className="next" onClick={()=>changeyear(1)}>{'>'}</button>
      </div>
        
      <Todo/>
    </div>
    <Month year={year}/>
    </>
  )
}

export default Year
