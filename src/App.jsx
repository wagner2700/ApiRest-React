import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [item , setItem] = useState([])


    async function getItem(){

      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
        const data = await response.json()
        console.log(data)
        setItem(data)
      }catch{
        console.log("erro")
      }
    }
  
    useEffect(()=>{
      getItem()
    }, [])


return (
    <div>
      <ul >
        {item.map((item)=>(
          <li 
          key={item.id} 
          style={{border:"1px solid red"}}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>

)}

export default App
