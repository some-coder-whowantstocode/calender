import React, { useEffect, useState } from 'react'
import './list.css'
import months from './Monthname';
import { ImBin } from "react-icons/im";

const List = () => {

  const[data,setdata]=useState(0);


  const delet=(k,key)=>{
    // localStorage.removeItem(k)
    let a = localStorage.getItem(k)
    let b = JSON.parse(a)
    delete b[key];
    let c = JSON.stringify(b);
    localStorage.setItem(k,c)
    window.location.reload(true);

  }

  const getLocalStorageData = () => {
    const items = []
     for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      let newdate = new Date(k)
      let date = newdate.getDate();
      let month = newdate.getMonth();
      let year = newdate.getFullYear();
      const todo = localStorage.getItem(k);
      const b = JSON.parse(todo);
      const keys = Object.keys(b);
      <div>{k}</div>
      keys.map((key) => (
        items.push(<div>
          <div className='listhead'><div>{ months[month] + ","+date+ "  "+year} </div><ImBin className='icon' onClick={()=>delet(k,key)}/></div>
          <div className="l" key={key}>{b[key]}</div>
          </div>)
      ));
    }
    return items;
    // setdata(items)

  };

  const clean=()=>{
    localStorage.clear();
    window.location.reload(true);

  }



 
  return (
    <div className='list'>
   <h2 className='top'>Previously added <ImBin className='icon' onClick={()=>clean()}/></h2>
    <div >
    {getLocalStorageData()}
    </div>
    </div>
  )
}

export default List
