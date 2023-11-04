import React, { useState } from 'react';
import "./RoomS.css"


export default function RoomS(props) {

  const [bgColor, setBgColor] = useState('red');


  const changeBgColor = () => {

    setBgColor(bgColor === 'red' ? 'green' : 'red');

  };


  const [selectProducts, setSelectProducts] = useState('');

  const [roomProducts, setRoomProducts] = useState([]);

  const [stereoS, setStereoS] = useState(false);

  const [bathroom, setBathroom] = useState(false);

  const [waterHeater, setWaterHeater] = useState(false);


  const addProduct = () => {

    if (roomProducts.length >= 5) {

      alert("Error: you can 5 products only!");

      return;

    }


    if (selectProducts === stereoS) {

      alert('ERROR: only one stereo allowed!');

      return;

    }


    if (selectProducts === waterHeater && !bathroom) {

      alert('ERROR: waterHeater can only be added to a bathroom.');

      return;

    }


    const newProduct = { name: selectProducts, status: false };


    setRoomProducts([...roomProducts, newProduct]);


    setSelectProducts('');



    if (selectProducts === stereoS) {

      setStereoS(true);

    }

  };


  const toggleProductStatus = (index) => {


    const newProducts = [...roomProducts];


    newProducts[index].status = !newProducts[index].status;


    setRoomProducts(newProducts);


  };

  const resetRoom = () => {

    setRoomProducts([]);

    setStereoS(false);

    setBathroom(false);

    setWaterHeater(false);

  };

  return (

    <div>
      
      <div>

        <button className='btn2' style={{backgroundColor: "#ff9f00"}} onClick={addProduct}>Add Product</button>

        <h3>{props.details.name}</h3>

        <h2>{props.productArr.productArr}</h2>

        <h3>{props.details.select}</h3>

        <button className='btn3' style={{backgroundColor: "#ff9f00"}} onClick={resetRoom}>Reset</button> <br/> <br/>



        {roomProducts.map((product, index) => (

          <li key={index} onClick={() => toggleProductStatus(index)} style={{ backgroundColor: product.status ? 'green' : 'red',}}>


            {product.name} - {product.status ? "ON" : "OFF"}

          </li>

        ))}

        <select style={{backgroundColor: "#ff9f00", border: "1px solid black"}} onChange={(e) => setSelectProducts(e.target.value)}>

               <option/>
    
               <option>Air Conditioner</option>
    
                <option>Water heater</option>
    
                <option>Stereo system</option>
    
                <option>Lamp</option>

        </select>

      </div>

    </div>

  );

}







 








  



