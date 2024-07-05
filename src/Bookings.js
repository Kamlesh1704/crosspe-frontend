import {React, useState, useEffect} from 'react'
import './Bookings.css'
import Header from './Header';

export default function Bookings() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const getClasses = async () => {
      const url = "https://crosspe-backend.onrender.com/bookings"
      const options = {
        method:'GET',
      }
      const response = await fetch(url, options)
      const data = await response.json()
      setBookings(data)
    }
    getClasses()
  },[])
  const userData = JSON.parse(localStorage.getItem("user"))
  const userName = userData.name
  
  return (
    <div className='containertable'>
      <Header />

      <h1 className='head'>Bookings</h1>
      <table className='table'>
        <tr className='thead'>
          <th>Username</th>
          <th>Class</th>
          <th>status</th>
        </tr>
          {bookings.map((eachBooking) => (
              <tr>
                <td>{userName}</td>
                {eachBooking.class_id === 1 && <td>Yoga</td>}
                {eachBooking.class_id === 2 && <td>Gym</td>}
                {eachBooking.class_id === 3 && <td>Dance</td>}
                {eachBooking.status === 'Booked' && <td className='blue'>{eachBooking.status}</td>}
                {eachBooking.status === 'Waiting' && <td className='red'>{eachBooking.status}</td>}
              </tr>
            ))}
      </table>
    </div>
  )
}
