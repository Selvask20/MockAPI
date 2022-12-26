import axios from 'axios'
import React from 'react'
import { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router';


function Edit() {
    const navi=useNavigate()
    const[id,setId]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    useEffect(()=>{
     setId(localStorage.getItem('id' ))
     setEmail(localStorage.getItem('email' ))
     setPassword(localStorage.getItem('password' ))
},[])
    function clic(e){
     e.preventDefault();
     axios.put(`https://636e03acb567eed48ad017b5.mockapi.io/crud/${id}`,{
        Email:email,
        password:password
     })
     .then(()=>navi('/table'))
    }
  return (
    <div>
        <form onSubmit={clic}>
            
            Email: <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email}  /><br/>
            Password: <input type='password'onChange={(e)=>setPassword(e.target.value)}value={password}  /><br/>
            <button  type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Edit
