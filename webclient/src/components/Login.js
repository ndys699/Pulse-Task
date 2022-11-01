import React from 'react'

function Login() {
  return (
    
        <div className='bodyLayout'>
      <img className='logo' src="./logoBRN.png"></img>
      <div className='signInForm alignCenter'>
          <h1 className='text-SignIn'>Sign In</h1>
          <div>
              <input type='email' className='input' placeholder='Enter your Email'></input>
              <input type='password' className='input'placeholder='Password'></input>
          </div>
          <div className='flex-Row alignCenter'>
              <button className='button-SignIn'>LOGIN</button>
              <div className='label-CheckBox'>
                  <input type="checkbox" htmlFor='rem'className='input-CheckBox'/>
                  <label id='rem' className='signInText'>Remember</label>
              </div>
              </div>
              </div>
              </div>
   
  )
}

export default Login