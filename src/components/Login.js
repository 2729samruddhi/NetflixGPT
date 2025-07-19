import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[isSignInForm,setIsSignInForm]= useState(true);

    const toggleSignInForm=()=>{
       setIsSignInForm(!isSignInForm)
    };

    return (
        <div >
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg" alt='background logo' />
            </div>

            <form className='w-3/12 absolute p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
             <h1 className='font-bold text-3xl py-4 cursor-pointer'>
                 {isSignInForm? "Sign In":"Sign Up"} 
             </h1>
              {!isSignInForm && (
              <input
               type='text' 
              placeholder='Enter Full Name' 
              className='p-4 my-4 w-full bg-gray-700'/> )}

              <input type='text' placeholder='Email or mobile number'className='p-4 my-4 w-full bg-gray-700'/>
              <input type='password' placeholder='Enter Password' className='p-4 my-4 w-full bg-gray-700'/>

              <button className='p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer'> 
                {isSignInForm? "Sign In":"Sign Up"}  
                </button>
              <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> 
                 {isSignInForm? "New to Netflix? Sign Up Now ":"already registered? Sign In Now"} 
                </p>
            </form>
        </div>


    )
}

export default Login;
