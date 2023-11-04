import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AllRooms from './AllRooms';
import "./AddRooms.css"

export default function AddRoom(props) {


    const validName = () =>{


    if(name.length == 0)

    {
      alert("Error")
    }

    else

    {
      props.add(name, select, color)
    }


    }


    
 const [name, setName] = useState("");

 const [select, setSelect] = useState("");
  
 const [color, setColor] = useState("");


  return (


    <div>

        

        <select style={{backgroundColor: "#ff9f00", border: "1px solid black"}} onChange={(e)=>{setSelect(e.target.value)}}>

            <option></option>
            <option>Bedroom</option>
            <option>Toilet</option>
            <option>Kitchen</option>


        </select>

        <br/> <br/>

        <input style={{backgroundColor: "#ff9f00", border: "1px solid black"}} onChange={(e)=>{setName(e.target.value)}} type='text' maxLength={5} placeholder='Name of the room'></input> <br/> <br/>
        <input style={{backgroundColor: "#ff9f00", border: "1px solid black"}} onChange={(e)=>{setColor(e.target.value)}} type='text' placeholder='Color of the room'></input> <br/> <br/>

        <Link to="AllRooms"><button className='btn' onClick={validName} style={{backgroundColor: "#ff9f00"}}>Create</button></Link>



    </div>
  )
}
