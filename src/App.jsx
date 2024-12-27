import DisplayHome from "./assets/Components/Interface/SongListings/Home/DisplayHome"
import Login from "./assets/Components/LoginSignin/Login"
import ForgetPaswrd from "./assets/Components/LoginSignin/ForgetPaswrd";
import EmailAuth from "./assets/Components/LoginSignin/EmailAuth";
import { Routes, Route } from "react-router-dom"
import TokenAuth from "./assets/Components/LoginSignin/TokenAuth";
import Discover from "./assets/Components/Interface/SongListings/Discover";

function App() {

  return (
  <>
  <div className="appContainer">
    <Routes>
      <Route path='/' element={<DisplayHome />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/ForgetPaswrd' element={<ForgetPaswrd />} />
      <Route path='/EmailAuth' element={<EmailAuth />} />
      <Route path='/TokenAuth' element={<TokenAuth />} />
      <Route path='/Discover'  element={<Discover />} />
    </Routes>

  </div>
  </>
  )
}

export default App
