import React, { useState } from 'react'
import './style.css'
function Login() {

        const [email, setEmail] = useState();
        const [password,setPassword] = useState();
        const handleLogin = () =>{
            alert('Login Successful')
        }

  return (
   <div className='row g-0 vh-100 justify-content-center align-items-center'>
    <div className='col-10 row g-0 align-items-center ' >

    <form action='' className='col-6 py-4 px-3'>
        <h1 className='login-title py-2'>Log in to Your <p>Grower</p> Dashboard for Cultivation Insights and Farm Mangement</h1>
        
        <p>Embark on a Fulfilling Farming Advanture and Reap the Reward of Your Harvest</p><br/>


        <div className='form-floating1 mb-4'>
            Email Address <br />
            <input type="email" id="email" className="form-control" placeholder='Enter your Email Address' onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>

        <div className='form-floating1 mb-4'>
            Password
            <input type="password" id="pass" className="form-control" placeholder="Enter your Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>

        <div className='text-center'>
            <button className='login-btn py-2 px-2' onClick={()=>{handleLogin()}}>Login</button>
        </div>
        
        <div className='text-center mt-3'>
        <button className='signup-btn py-2 px-2'>Don't have an account? <a href="/signup">Sign Up</a></button>
           
        </div>

    </form>

    <div className='col-6 px-5'>
        <img src='/images/im1.png' alt='background' className='img-fluid'/>
    </div>  

    
    </div>



   </div>  
  )
}

export default Login
