import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import RoomS from './RoomS';

export default function RoomInfo(props) {

 
  return (


    <Link to="RoomS">


   <div onClick={()=>{props.setIndex(props.index)}} style={{backgroundColor: props.color, width: "200px", height: "200px", border: "1px solid black"}}>

    <h2>{props.name}</h2>
    <h2>{props.color}</h2>
    <h2>{props.select}</h2>
    <h2>{props.productArr}</h2>

      



    </div>


   </Link>

  )
  
}
