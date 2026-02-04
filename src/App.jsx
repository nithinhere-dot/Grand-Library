import Signup from "./pages/SignupForm"
import Login from "./pages/LoginForm"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
function App() {
  

  return (
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
  )
}

export default App
