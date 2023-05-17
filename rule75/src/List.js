import React, { useEffect, useState } from 'react'
import './list.css'
import months from './Monthname';
import { ImBin } from "react-icons/im";
import { useDispatch,useSelector } from 'react-redux'
import { setDateAction,setdate,selectChosenDate } from './features/counter/Chosendate'

const List = () => {

  const dispatch = useDispatch();

  let chosenDate = useSelector(selectChosenDate);
  const[cd,setcd]=useState();
  const[k,setk]=useState();



  useEffect((e)=>{
    const newdate = new Date(chosenDate);
    const d = newdate.getDate();
    const m = newdate.getMonth();
    const y = newdate.getFullYear();
    setcd(months[m]+","+d+"  "+y)
    setk(newdate);

  },[chosenDate])
  // const[data,setdata]=useState([]);


  const delet=(k,key)=>{
    // console.log(localStorage.key.length)

    if(localStorage.key.length ==1){
      localStorage.removeItem(k)
    }else{
      let a = localStorage.getItem(k)
      let b = JSON.parse(a)
      delete b[key];
      let c = JSON.stringify(b);
      localStorage.setItem(k,c)
      console.log(k)
  
     
    }
    
   
    const nd = new Date();
    dispatch(setDateAction({payload:nd.toString() }))
    // chosenDate = k.toString()

  }

 

  const clean=()=>{
    localStorage.removeItem(k);
    const nd = new Date();
   
    dispatch(setDateAction({payload:nd.toString() }))

  }




const getLocalStorageData = () => {
  const items = []
  if(localStorage.getItem(k)!=null){
    const todo = localStorage.getItem(k);
    const b = JSON.parse(todo);
    const keys = Object.keys(b);
    <div>{k}</div>
    keys.map((key) => (
      items.push(<div>
        <li className="l" key={key}>{b[key]}  <ImBin className='icon' onClick={()=>delet(k,key)}/></li>
        </div>)
    ));
  
  return items;

  }
    

};

// onClick={()=>delet(k,key)}

// console.log(localStorage.getItem(k))


 
  return (
    <div className='list'>
   <h2 className='top'>Previously added on {cd} <ImBin className='icon' onClick={()=>clean()}/> 
 </h2>
    {
      getLocalStorageData()
    }
    </div>
  )
}

export default List
