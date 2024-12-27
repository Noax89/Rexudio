import React from 'react'
import SongCategories from './SongCategories'
import Navbar from './Navbar'
import SongCtrl from './SongCtrl'

const DisplayHome = () => {
  return (
    <div className='homeContainer'>
    <div className='groupedCont'>
    <Navbar />
    <SongCategories />
    </div>

    <SongCtrl />
  </div>
  )
}

export default DisplayHome