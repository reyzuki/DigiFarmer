import React, { useState } from 'react'
import './style.css'
function SignUp() {

        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
        const [fname, setFirstName] = useState();
        const [lname, setLastName] = useState();
        const [phonenumber, setPhoneNumber] = useState();
        const [conpass, setConfirmPassword] = useState();
        const handleSignUp = () =>{
            alert('Sign Up Successful')
        }

  return (
   <div className='row g-0 vh-100 justify-content-center align-items-center'>
    <div className='col-10 row g-0 align-items-center ' >

    <form action='' className='col-12 col-md-6 col-6 py-4 px-3'>
         <h1 className='signup-title py-2'>Cultivate Your Future: Embrace the Journey of Becoming a <p>Grower</p></h1>
        
        <p>Embark on a Fulfilling Farming Advanture and Reap the Reward of Your Harvest</p><br/>

        <div className='form-floating1 mb-4'>
            First Name <br />
            <input type="text" id="fname" className="form-control" placeholder='Enter your first names' onChange={(e)=>{setFirstName(e.target.value)}}/>
        </div>

        <div className='form-floating1 mb-4 px-3'>
            Last Name
            <input type="text" id="lname" className="form-control" placeholder="Enter your last name" onChange={(e)=>{setLastName(e.target.value)}}/>
        </div>

        <div className='form-floating1 mb-4'>
            Phone Number
            <input type="number" id="phonenumber" className="form-control" placeholder="+233 XX XXX XXXX" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
        </div>

        <div className='form-floating1 mb-4 px-3'>
            Email Address <br />
            <input type="email" id="email" className="form-control" placeholder='Enter your Email Address' onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>

        <div className='form-floating1 mb-4'>
            Password
            <input type="password" id="pass" className="form-control" placeholder="Enter your Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>

        <div className='form-floating1 mb-4 px-3'>
            Confirm Password
            <input type="password" id="conpass" className="form-control" placeholder="Confirm yourPassword" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
        </div>

        <div className='text-center'>
            <button className='signup-btn1 py-2 px-2' onClick={()=>{handleSignUp()}}>Sign Up</button>
        </div>
        
        <div className='text-center mt-3'>
        <button className='signup-btn py-2 px-2'>Already have an account? <a href="/login">Log In</a></button>
           
        </div>

    </form>

    

    <div className='d-none d-md-block col-6 px-5'>
        <img src='/images/im1.png' alt='background' className='img-fluid'/>
    </div>  

    
    </div>



   </div>  
  )
}

export default SignUp
