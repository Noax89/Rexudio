import React from 'react'
import Navbar from './Home/Navbar'
import SongCtrl from './Home/SongCtrl'
import TopNavBar from './Home/TopNavBar'

const Discover = () => {
  return (
    <div className='homeContainer'>
      <div className='groupedCont'>
      <Navbar />
      <div className='Display-cont'>
      <div className='songCartDisp'>
        <TopNavBar />
        
      </div>
      </div>
      </div>

      <SongCtrl />
    </div>
  )
}

export default Discover