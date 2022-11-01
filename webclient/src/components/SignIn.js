import React from 'react'

// import logo from "./images/logoBRN.png";

function SignIn() {
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
              {/* <BrowserRouter>
              <nav className='hover'>
              <Link  to='' style={{textDecoration:"none"}} className='signInText'> Forgot Password?</Link>
              </nav>
              </BrowserRouter>  */}
          </div>      
          {/* <div className='createAccount'>
              <BrowserRouter>
              <nav className='hover'>
                <Link to='' style={{textDecoration:"none"}} className='signInText'> CREATE AN ACCOUNT</Link>
              </nav>
              </BrowserRouter>
          </div> */}
      </div>
    </div>

  )
}

export default SignIn;