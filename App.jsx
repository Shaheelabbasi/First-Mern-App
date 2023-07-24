
import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const[users,setusers]=useState([])
  const[name,setname]=useState()
  const[age,setage]=useState()
  useEffect(()=>{

    axios.get('http://localhost:5000/users').then((users)=>{
      console.log(users.data)
      setusers(users.data)
    }).catch(error=>console.log(error))

  },[])

  const submit=()=>{
axios.post("http://localhost:5000/createuser",{name,age}).then((users)=>{
  console.log(users)
}).catch(err=>console.log(err))

  }


  return (
    <div>
     <h1>First MERN(Mongo,Express,React,Node) App</h1>
     {
      users.map((user) => (
        <div key={user._id}>
          <h3>{user.name}</h3>
          <h3>{user.age}</h3>
        </div>
      ))
    }
<br />
<input type="text" onChange={(e)=>setname(e.target.value)}/>
<input type="text" onChange={(e)=>setage(e.target.value)} />
<button onClick={submit}>Create User</button>

    </div>
  )
}

export default App
