import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [loginState, setLoginState] = useState(true);
  const navigate = useNavigate();
  
  function HandleLoginState(){
    setLoginState(!loginState)
  }

  return (
    <div className='loginWrapper'>
      <h3>{loginState? "Login" : "Signin"}</h3>
      <form>
      {loginState ? <div className='input-ctrl'>
      <input type='text' placeholder='Username/Email' />
      <i class="fa-solid fa-user"></i>
      </div> 
      : <div className='input-ctrl'>
      <input type='text' placeholder='Username' />
      <i class="fa-solid fa-user"></i>
      </div>}

      {!loginState ? <div className='input-ctrl'> <input type='email' placeholder='Email' />
        <i class="fa-solid fa-envelope"></i></div> : <></>}

      
      <div className='input-ctrl'> <input type='password' placeholder='Password' />
      <i class="fa-solid fa-lock"></i></div> 

      {!loginState ? <div className='input-ctrl'> <input type='password' placeholder='Confirm password' />
        <i class="fa-solid fa-lock"></i></div> : <></>}
      
      {loginState? <div className='forget-remember'>
      <label>
      <input type='checkbox' /> Remember password
      </label>
      <a onClick={()=>navigate('/EmailAuth')}> Forget?</a>
      </div> 
      : <div className='forget-remember'>
      <label>
      <input type='checkbox' /> Accept Terms & Conditions
      </label>
      </div> }
      
      {loginState? <button className='LoginBtn' >Login</button>
      : <button className='LoginBtn' onClick={()=>navigate('/TokenAuth')}>Signin</button>}

      {loginState? <div className='haveAcct'>
      Don't have an acct? <a href='#' onClick={HandleLoginState}>Signin</a>
      </div>
      : <div className='haveAcct'>
      Have an acct? <a href='#' onClick={HandleLoginState}>Login</a>
      </div> }
      
      
      </form>
    </div>


  )
}

export default Login