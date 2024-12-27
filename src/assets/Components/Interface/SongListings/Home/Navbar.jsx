import React from 'react'
import AppLogo from '../../../AppLogo'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();

  return (
<div className='navBar'>
<AppLogo />
<div className="link-wrap">
<div className="nav-link" onClick={()=>navigate(`/`)}> <i class="fa-solid fa-house"></i>Home</div>
<div className="nav-link" onClick={()=>navigate(`/Discover`)}> <i class="fa-solid fa-globe"></i>Discover</div>
<div className="nav-link"> <i class="fa-solid fa-arrow-trend-up"></i>Trending</div>
<div className="nav-link"> <i class="fa-solid fa-compact-disc"></i>Albums</div>
<div className="nav-link"> <i class="fa-solid fa-podcast"></i>Podcast</div>
</div>

<div class="link-wrap">
<span><h6>Library</h6> <i class="fa-solid fa-chevron-up"></i></span>

<div class="nav-link"> <i class="fa-solid fa-list-check"></i>Recently added</div>
<div class="nav-link"> <i class="fa-solid fa-guitar"></i>Favourite songs</div>
<div class="nav-link"> <i class="fa-solid fa-floppy-disk"></i>Local file</div>
<div class="nav-link"> <i class="fa-solid fa-download"></i>Download</div>
</div>

<div class="link-wrap">
<span><h6>Playlists</h6> <i class="fa-solid fa-chevron-up"></i></span>
</div>

</div>
  )
}

export default Navbar