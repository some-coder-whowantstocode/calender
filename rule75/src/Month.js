import React,{useState,useEffect} from 'react'
import './months.css'
import Days from './Days';
import months from './Monthname';

const Month = ({year}) => {
    const[month,setmonth]=useState()

    let newdate = new Date();
    let m = newdate.getMonth()

    useEffect((e)=>{
        setmonth(Number(m))
    },[m])

    const changemonth =(index)=>{
        if(month + index > 11){
            setmonth(0)
        }
        else if(month + index < 0){
        setmonth(11)
        }
        else{
            setmonth(month + index)
        }
    }
  return (
    <>
       <div className='monthbox'>
        <button className="back" onClick={()=>changemonth(-1)}>{'<'}</button>
      <div className="month">{months[month ]}</div>
      <button className="next" onClick={()=>changemonth(1)}>{'>'}</button>
    </div>
    <Days y={year} m={month}/>
    </>
  )
}

export default Month
