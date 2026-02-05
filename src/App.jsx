import Signup from "./pages/SignupForm"
import Login from "./pages/LoginForm"
import Home from "./pages/Home"
import BookShelf from   "./pages/BookShelf"
import {Routes, Route} from "react-router-dom"
import Hero from "./pages/Hero"
import Profile from "./pages/Profile"

function App() {
  

  return (
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

          <Route path="/home" element={<Home/>}>
             <Route index element={<Hero />} />
            <Route path="books" element={<BookShelf/>}/>
            <Route path="profile" element={<Profile/>}/>
          </Route>
        </Routes>
  )
}

export default App
