import axios from 'axios';
// import React, { useState } from 'react'
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router';


function Table() {
    // const[edit,setedit]=useState('')
    const navi=useNavigate()
    const[count,setcount]=useState([]) 
    useEffect(()=>{
        axios.get('https://636e03acb567eed48ad017b5.mockapi.io/crud')
        .then(function (res) {  
        setcount(res.data)
        },[]) 
    })
    const deleteuser=(id)=>{
        axios.delete(`https://636e03acb567eed48ad017b5.mockapi.io/crud/${id}`)
        .then(()=>callGetAPI())
        
    }
    const callGetAPI=()=>{
         axios.get('https://636e03acb567eed48ad017b5.mockapi.io/crud')
        .then((res)=>
        {setcount(res.data)})

 
    }
    function edituser(id,Email,password){
        localStorage.setItem('id',id)
        localStorage.setItem('email',Email)
        localStorage.setItem('password',password)
         navi('/update')

    }
    
  return (
    <div>
        <table className=' table table-dark mt-3 '>
            <thead>
            <tr>
                <th>email</th>
                <th>password</th>
                <th>delete</th>
                <th>edit</th>
            </tr>
            </thead>
            {count.map((data,index)=><tbody  key={index}>
                <tr><td>{data.Email}</td>
                <td>{data.password}</td>
                <td><button  onClick={()=>deleteuser(data.id)}>delete</button></td>
                <td><button  onClick={()=>edituser(data.id ,data.Email ,data.password)}>edit</button></td>
                </tr></tbody>)}    
        </table>

      
    </div> 
  )
}

export default Table
