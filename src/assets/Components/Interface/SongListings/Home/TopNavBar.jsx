import React from 'react'
import { useState } from 'react'

const TopNavBar = () => {
  const [showBackBtn, setShowBackBtn] = useState(true);

  function handleShowBackBtn(){
    setShowBackBtn(!showBackBtn)
  }

  return (
    <div className='top-nav'>
        <div className={showBackBtn ? "backBtn" :"user-acct-wrapper"}>
        <div className="user-btn"><i className="fa-solid fa-chevron-left"></i></div>
        </div>

        <div className="search-cont">
        <input type="text" placeholder="Search by songs, artists, genres ...." />
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div className="user-acct-wrapper">
            <div className="user-btn"><i className="fa-solid fa-bell"></i></div>
            <div className="user-btn"><i className="fa-solid fa-user"></i></div>
        </div>
    </div>
  )
}

export default TopNavBar