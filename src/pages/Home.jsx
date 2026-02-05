import "../styles/Home.css"
import Footer from "../pages/Footer.jsx"
import {Link,Outlet} from "react-router-dom"
import Hero from "./Hero.jsx";

function About() {
  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">📚 The Grand Library</div>
        <ul className="nav-links">
          <Link to="">
            <li>Home</li>
          </Link>
          <Link to="books">
            <li>Browse Books</li>
          </Link>
          <Link to="profile">
            <li>My Profile</li>
          </Link>
          <li className="logout">Logout</li>
        </ul>
      </nav>

      {/* Hero Section or Books*/}
      <Outlet/>

      <Footer/>
    </div>
  );
}

export default About;
