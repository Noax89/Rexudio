import React from 'react'
import { useNavigate } from 'react-router-dom';

const ForgetPaswrd = () => {
    const navigate = useNavigate();


  return (
    <div className='loginWrapper'>
      <h3>Reset Password</h3>
      <form>
      
      <div className='input-ctrl'> <input type='password' placeholder='Reset Password' />
      <i class="fa-solid fa-lock"></i></div> 

      <div className='input-ctrl'> <input type='password' placeholder='Confirm password' />
        <i class="fa-solid fa-lock"></i></div>

      <button className='LoginBtn' onClick={()=>navigate('/Login')}>Next</button> 
      </form>
    </div>
  )
}

export default ForgetPaswrd