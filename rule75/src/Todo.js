import React, { useEffect, useRef, useState } from 'react'
import months from './Monthname';

import { useDispatch,useSelector } from 'react-redux'
import { setdate,selectChosenDate } from './features/counter/Chosendate'


const Todo = () => {
  const chosenDate = useSelector(selectChosenDate);
  // console.log(chosenDate)
  
  const ref = useRef();
  const show = useRef(); 


    const [day,setday]= useState();
    const [mon,setmon]=useState();
    const [curr,setcurr]=useState();
    const [date,setdate]=useState();

    useEffect((e)=>{
           let newdate = new Date(chosenDate);
           var t = newdate.getDate();
           var d = newdate.getMonth();
           var a = newdate.getDay()
            setday(a)
            setmon(d)
            setcurr(t)
            setdate(newdate)
          // localStorage.clear()

    },[chosenDate])


    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]

   
 

  return (
    <div className='todobox'>
    <div className="tod">{days[day]+","+months[mon]+" "+curr}</div>
    
    </div>
  )
}

export default Todo
