import React from 'react'

const SongCtrl = () => {
  return (
    <div className='ctrl-bar'>
        <div className='current-Song-Playing-Sec'>

        <div className='img-song-grp'>
          <div className='group'>
        <img src="" alt />
        <div className='SongInf-grp'>
        <span className='songName'>Song Name</span>
        <span className='artist-name'>Artist Name</span>
        </div>
        </div>
      
        <span className='add-remove'>
        <span><i class="fa-solid fa-minus"></i></span>
        <span><i class="fa-solid fa-plus"></i></span>
        </span>
        </div>

        <span className='progressBar'>
        <span className='progress-value'>
          </span>
        </span>
        </div>

        <div className='controls-sec'>
        <span><i class="fa-solid fa-shuffle"></i></span>
        <div className='play-pause-ctrls'>
        <i class="fa-solid fa-backward"></i>
        <i class="fa-solid fa-play"></i>
        <i class="fa-solid fa-forward"></i>
        </div>
        <span><i class="fa-solid fa-repeat"></i></span>
        </div>

        <div className='song-share-list-sec'>
        <i class="fa-solid fa-share"></i>
        <i class="fa-solid fa-list"></i>
        </div>
      </div>
  )
}

export default SongCtrl