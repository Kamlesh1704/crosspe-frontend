import {React, useState, useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import './Register.css';

export default function Register(props) {
  const [name, setName]  = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

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


  const storeUserData = async (event) => {
    event.preventDefault()
    const userData = {
        id:uuidv4(),
        name,
        email
    }
    const url = "http://localhost:3000/register"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if(response.ok === true){
        notifyB("Registration Successfull")
        localStorage.setItem("user",JSON.stringify(userData))
        navigate("/")
    }else{
        notifyA(data.error)
    }

}

  return (
    <div className='registercontainer'>
        <Form className='form' onSubmit={storeUserData}>
        <h1>Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='lable'>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(event) => {setName(event.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='lable'>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}/>
        </Form.Group>

        <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
    </div>
  )
}
