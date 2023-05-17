import React, { useEffect, useRef, useState } from 'react'
import { json, useLocation } from 'react-router-dom'
import months from './Monthname';
import './todo.css'
import { BiSave } from "react-icons/bi";

import { useDispatch,useSelector } from 'react-redux'
import { setDateAction,selectChosenDate } from './features/counter/Chosendate'
const Csd = () => {

    const dispatch = useDispatch()
    

    const chosenDate = useSelector(selectChosenDate);
    // console.log(chosenDate)
    
    const ref = useRef();
    const show = useRef(); 
  
      const location = useLocation();
      const [day,setday]= useState();
      const [mon,setmon]=useState();
      const [curr,setcurr]=useState();
      const [year,setyear]=useState();
      const [date,setdate]=useState();
      const [index,setindex]=useState();
  
      useEffect((e)=>{
             let newdate = new Date(chosenDate);
             var y = newdate.getFullYear()
             var t = newdate.getDate();
             var d = newdate.getMonth();
             var a = newdate.getDay()
              setday(a)
              setmon(d)
              setcurr(t)
              setyear(y)
              setdate(newdate)
            // localStorage.clear()
  
      },[chosenDate])
  
  
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
  
     
     const transfer =()=>{
      let text = ref.current.value;
  
      show.current.innerText = text;
     }
  
     const save = () => {
      let i ;
      let text = localStorage.getItem(date)
              
  
      if(text != null){
        if(ref.current.value != ""){
          let sho = JSON.parse(text);
          let keys = Object.keys(sho)
        //   console.log(keys.length)
          i = keys.length;
          sho[`${i}`]=ref.current.value;
          let message = JSON.stringify(sho);
          
          localStorage.setItem(date, message);
          ref.current.value = '';
          show.current.innerText='';
          const nd = new Date();
   
          dispatch(setDateAction({payload:nd.toString() }))
        }
      
      }else{
        if(ref.current.value != ''){
          let message = JSON.stringify({0:ref.current.value});
          localStorage.setItem(date, message);
          ref.current.value = '';
          show.current.innerText='';
          const nd = new Date();
   
          dispatch(setDateAction({payload:nd.toString() }))
        }
  
      }
       
        
      }
     




  return (
    <div>
       <div className="target">
      <div className="addbox">
      <div className="date">
            {'your selected day' +" /  " + days[day]+","+months[mon]+" "+curr+" "+ ","+" "+year}
        </div>
        <div className="add">+</div>
      </div>
   
      
      <label  className="content" htmlFor="text">
      <input type="text" id='text' placeholder='Add something...' onKeyUp={transfer} ref={ref}/>
      <BiSave className='icon' onClick={save}/>
      </label>
      <label htmlFor='text' className="preview">
        <h4>Preview</h4>
      <div   ref={show}></div>
      </label>
      
     </div>
    </div>
  )
}

export default Csd
