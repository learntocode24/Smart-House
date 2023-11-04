import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './compoments/HomePage';
import AddRoom from './compoments/AddRoom';
import AllRooms from './compoments/AllRooms';
import RoomInfo from './compoments/RoomInfo';
import RoomS from './compoments/RoomS';
import Title from './compoments/Title';
import { useState } from 'react';


function App() {


  const [roomArr, setRoomArr] = useState([])

  const [productArr, setProductArr] = useState([])

  const [index, setIndex] = useState(0)




  const addNewRoom = (name, select, color) => {


    let roomTemp = new Room(name, select, color)

    setRoomArr([...roomArr, roomTemp])


  }


  const addNewProduct = () => {

    let productTemp = new Product()

    setProductArr([...productArr, productTemp])


  }



  const addProduct = (name) => {

    let temp = new Product(name)

    roomArr[index].productArr.push(temp)

  }



  const change = () =>  {

    roomArr[index].productArr[0].status = true;

  }


    



  return (

    <div className="App">



      <BrowserRouter>

      <Title/>



      <AllRooms roomList = {roomArr} setIndex = {setIndex}/>

  

    



      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='AddRoom' element={<AddRoom add = {addNewRoom}/>}/>
        <Route path='AllRooms' element={<AllRooms/>}/>
        <Route path='RoomInfo' element={<RoomInfo/>}/>
        <Route path='RoomS' element={<RoomS details = {roomArr[index]} addProduct={addProduct} productArr = {productArr}/>}/>

      </Routes>
      
      
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;






class Room{
    
  productArr = [];

  constructor(name, select, color)
  
  {

  this.name = name;
  this.select = select;
  this.color = color;

  }

}




class Product{

  
  status =  false 

  constructor(name)
  
  {

    this.name = name;

  }

}
