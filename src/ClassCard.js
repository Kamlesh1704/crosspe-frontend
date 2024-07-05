import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import './ClassCard.css'

export default function ClassCard(props) {
    const {details,realTimeData} = props
    const {id, type, capacity} = details

    const notifyA = msg => toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  
    const notifyB = msg => toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    const bookClassFunc =async () => {
      const user_data = JSON.parse(localStorage.getItem("user"));
      const user_id = user_data.id
      
      const putData = {
        primaryId: uuidv4(),
        user_id,
      }
      
      const url = `https://crosspe-backend.onrender.com/book/${id}`

      const options = {
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(putData)
      }

      const response = await fetch(url, options)
      const dataa = await response.json()

      if( dataa.status === 'Booked'){
        notifyB(`${type} class Booking Successfull`)
        realTimeData()
      }else{
        notifyA("Added in Waiting List")
        realTimeData()
      }

    }

  return (
    <li style={{border:"3px solid #a76541",borderRadius:"5px",backgroundColor:"#FDC2C9"}}>
      <Card style={{ width: '18rem'}} >
        {id === 1 && <Card.Img variant="top" className="image"  src="https://t4.ftcdn.net/jpg/04/26/31/85/360_F_426318586_41NrVwrYw5fYtxi51OD1qDx82BU57AE2.jpg" />}
        {id === 2 && <Card.Img variant="top" className="image" src="https://cdn.vectorstock.com/i/1000v/98/64/fitness-gym-logo-with-strong-athlete-and-barbell-vector-24189864.jpg" />}
        {id === 3 && <Card.Img variant="top" className="image" src="https://static.vecteezy.com/system/resources/thumbnails/010/968/880/small/cute-girl-dancing-silhouette-vector.jpg" />}
        <hr/>
        <Card.Body style={{backgroundColor:"#FFE3E5"}}>
            <Card.Title className='type'>{type}</Card.Title>
            <Card.Text className='capacity'>
            Capacity: <span>{capacity}</span>
            </Card.Text>
            <Button variant="primary" onClick={bookClassFunc}>Book Class</Button>
        </Card.Body>
     </Card>
    </li>
  )
}
