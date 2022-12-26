import { useState } from 'react';
import  axios from 'axios';
import { useNavigate } from 'react-router';
function Form() {
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    let navigate=useNavigate()



    function changeemail(event){
        setemail(event.target.value)
    }
    function changepassword(event){
        setpassword(event.target.value)
    }
    function clic(event){
        event.preventDefault();
      
        
        axios.post('https://636e03acb567eed48ad017b5.mockapi.io/crud',{
            Email:email, password:password

        })
        .then(function () {
            navigate('/table')
            
        })
        setemail('')
        setpassword('')
     
        
        
    }
  


  return (
    <div>
        <form onSubmit={clic}>
            
            Email: <input type='email' onChange={changeemail} value={email}  /><br/>
            Password: <input type='password' onChange={changepassword} value={password}  /><br/>
            <button  type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Form
