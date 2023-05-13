import React, { useEffect, useState, useSyncExternalStore } from 'react'
import './day.css'
import { NavLink } from 'react-router-dom'
import List from './List'

const Days = ({y,m}) => {

    // const[space,setspace]=useState(false)
    const[year,setyear]=useState()
    const[month,setmonth]=useState()
    const[sun,setsun]=useState([])
    const[mon,setmon]=useState([])
    const[tue,settue]=useState([])
    const[wed,setwed]=useState([])
    const[thu,setthu]=useState([])
    const[fri,setfri]=useState([])
    const[sat,setsat]=useState([])
    const[cur,setcur]=useState()
    const[cm,setcm]=useState()
    const[yc,setyc]=useState()
    const[sd,setsd]=useState()

    let d = new Date();

    let cd = d.getDate()
    let mc = d.getMonth();
    let cy = d.getFullYear();

    useEffect((e)=>{
        setyc(Number(cy))
    },[cy])

    useEffect((e)=>{
        setcm(Number(mc))
    },[mc])

    useEffect((e)=>{
        setcur(Number(cd))
    },[cd])

    useEffect((e)=>{
        setyear(y)
        // console.log(y)
        setsun([])
        setmon([])
        settue([])
        setwed([])
        setthu([])
        setfri([])
        setsat([])
    },[y])

    useEffect((e)=>{
        setmonth(m)
        // console.log(m)
        setsun([])
        setmon([])
        settue([])
        setwed([])
        setthu([])
        setfri([])
        setsat([])
    },[m])

    useEffect((e)=>{
        const getDaysArray = (year, month)=> {
            var monthIndex = month ;
            var names = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
            var date = new Date(year, monthIndex, 1);
            var result = [];
            var s = []
            while (date.getMonth() == monthIndex) {
            //   console.log(date.getDate())
            let s =date.getDate()

            switch(names[date.getDay()]){
                case "sun" :
                    setsun((prev)=>[...prev, s]) 
                break;

                case "mon" :
                     setmon((prev)=>[...prev,s]) 
                break;

                case "tue" : settue((prev)=>[...prev,s]) 
                break;

                case "wed" : setwed((prev)=>[...prev,s]) 
                break;

                case "thu" : setthu((prev)=>[...prev,s]) 
                break;

                case "fri" : setfri((prev)=>[...prev,s]) 
                break;

                case "sat" : setsat((prev)=>[...prev,s]) 
                break;
    
                default :
            }
              date.setDate(date.getDate() + 1);
            }
            // console.log( result) ;
            
          }
          getDaysArray(year,month)
    },[month,year])
   
     var space = false;

      const change =(arr)=>{
        if(space == false && arr[0] != 1){
            //cursor: pointer;("ho")
            return <div className='space'> </div>
        }
        if(space == false && arr[0] === 1){
            //cursor: pointer;("hi")
            space = true
        }
      }

      const gd =(i)=>{
        let day = new Date(y,m,i)
        
        return day
      }

      
     
  return (
    <>
    <div className="week">

    
      <div className='sun wd'>
        <div>sun</div>
        {change(sun)}
      {
        sun != undefined && sun.map((e)=>(
          y===yc && cur === Number(e) && m === cm? <NavLink to={'/todo'} state={gd(e)}  className='day red' >{cur}</NavLink>  :<NavLink to='/todo' className='day' state={gd(e)}>{e}</NavLink>
            // console.log(e)
        )) 
      }
      </div>
      <div className='mon wd'>
        <div>mon</div>
        {change(mon)}
      {
      mon != undefined &&  mon.map((e)=>(
         y===yc && Number(e) === cur && m === cm? <NavLink className='day red'  to='/todo'  state={gd(e)}>{e}</NavLink> :<NavLink className='day'  to='/todo'  state={gd(e)}>{e}</NavLink>
            // console.log(e)
        )) 
      }
      </div>
      <div className='tue wd'>
        <div>tue</div>
        {change(tue)}
      {
        tue != undefined && tue.map((e)=>(
             y===yc && Number(e) === cur && m === cm? <NavLink className='day red'  to='/todo'  state={gd(e)}>{e}</NavLink> :<NavLink className='day'  to='/todo'  state={gd(e)}>{e}</NavLink>
            // console.log(e)
        )) 
      }
      </div>
      <div className='wed wd'>
        <div>wed</div>
        {change(wed)}
      {
        wed != undefined && wed.map((e)=>(
             y===yc && Number(e) === cur && m === cm? <NavLink className='day red'  to='/todo'  state={gd(e)}>{e}</NavLink> :<NavLink className='day'  to='/todo'  state={gd(e)}>{e}</NavLink>
            // console.log(e)
        )) 
      }
      </div>
      <div className='thu wd'>
        <div>thu</div>
        {change(thu)}
      {
        thu != undefined && thu.map((e)=>(
             y===yc && Number(e) === cur && m === cm? <NavLink className='day red'  to='/todo'  state={gd(e)}>{cur}</NavLink> :<NavLink className='day'  to='/todo'  state={gd(e)}>{e}</NavLink>
            // console.log(e)
        )) 
      }
      </div>
      <div className='fri wd'>
        <div>fri</div>
        {change(fri)}
      {
        fri != undefined && fri.map((e)=>(
             y===yc && Number(e) === cur && m === cm? <NavLink className='day red'  to='/todo'  state={gd(e)}>{e}</NavLink> :<NavLink className='day'  to='/todo'  state={gd(e)}>{e}</NavLink>
            // console.log(e)
        )) 
      }
      </div>
      <div className='sat wd'>
        <div>sat</div>
        {change(sat)}
      {
        sat != undefined && sat.map((e)=>(
             y===yc && Number(e) === cur && m === cm?<NavLink className='day red'  to='/todo'  state={gd(e)}>{e}</NavLink> :<NavLink className='day'  to='/todo'  state={gd(e)}>{e}</NavLink>
            // console.log(e)
        )) 
      }
      </div>
      </div>
      
    </>
  )
}

export default Days
