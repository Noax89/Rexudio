import React from 'react'
import Navbar from './Home/Navbar'
import SongCtrl from './Home/SongCtrl'

const Discover = () => {
  return (
    <div className='homeContainer'>
      <div className='groupedCont'>
      <Navbar />
      <div className='Display-cont'>
      <div className='songCartDisp'>
        
      </div>
      </div>
      </div>

      <SongCtrl />
    </div>
  )
}

export default Discover