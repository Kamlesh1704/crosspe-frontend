import {React,useState,useEffect} from 'react'
import './Home.css'
import ClassCard from './ClassCard';
import Header from './Header';

export default function () {
  const [classData,setClassData] = useState([])

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
