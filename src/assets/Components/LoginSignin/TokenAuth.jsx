import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const TokenAuth = () => {
    const navigate = useNavigate();

    const [tokenCount, setTokenCount]= useState(59);

useEffect(()=>{
  setTimeout(()=>{
    setTokenCount(tokenCount=> tokenCount -1)
  }, 1000)
})
  return (
    <div className='loginWrapper'>
    <h3>Verify Token</h3>
    <form>
    
    <div className='input-token-ctrl'> 
    <input type='text' maxLength={1} minLength={1} />
    <input type='text' maxLength={1} minLength={1} />
    <input type='text' maxLength={1} minLength={1} />
    <input type='text' maxLength={1} minLength={1} />
    </div> 
    <button className='LoginBtn' onClick={()=>navigate('/Login')}>Next</button> 
    Token will be expired in {tokenCount} Secs. <a href='#'>Resend</a>

    </form>
  </div>
  )
}

export default TokenAuth
