import {React,useState,useEffect} from 'react'
import './Home.css'
import ClassCard from './ClassCard';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

export default function () {
  const [classData,setClassData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getClasses = async () => {
      const url = "https://crosspe-backend.onrender.com/"
      const options = {
        method:'GET',
      }
      const response = await fetch(url, options)
      const data = await response.json()
      setClassData(data)
    }
    
    getClasses()
  },[])
  
  const realTimeData = async () => {
      const url = "https://crosspe-backend.onrender.com/"
      const options = {
        method:'GET',
      }
      const response = await fetch(url, options)
      const data = await response.json()
      setClassData(data)
    
  }
  console.log(localStorage.getItem('user'))
  if(localStorage.getItem('user') === null){
    return navigate("/register");
  }

  return (
    <div className='container'>
      <Header />
      <h1 className='clas'>Classes</h1>
      <ul className='classcontainer'>
        {classData.map((eachData) => <ClassCard details={eachData} key ={eachData.id} realTimeData={realTimeData}/>)}
      </ul>
        </div>
  )
}
