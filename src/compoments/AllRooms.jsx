import React from 'react'
import RoomInfo from './RoomInfo'

export default function AllRooms(props) {


  return (


    <div> 


          {props.roomList.map((ro, idx)=>{

          return <RoomInfo name = {ro.name} color = {ro.color} select = {ro.select} index = {idx} setIndex = {props.setIndex}/>
          
          })}


          


    </div>
  )
}
