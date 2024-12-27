import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmailAuth = () => {
  const navigate = useNavigate();
  
  return (
    <div className='loginWrapper'>
    <h3>Verify Email</h3>
    <form>
    
    <div className='input-ctrl'> <input type='email' placeholder='Email' />
    <i class="fa-solid fa-envelope"></i></div> 

    <button className='LoginBtn' onClick={()=>navigate('/ForgetPaswrd')}>Next</button> 
    </form>
  </div>
  )
}

export default EmailAuth