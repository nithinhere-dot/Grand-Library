import "../styles/Home.css"
import Footer from "../pages/Footer.jsx"
function About() {
  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">📚 The Grand Library</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Browse Books</li>
          <li>My Profile</li>
          <li className="logout">Logout</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            The Grand Library is a digital haven for book lovers. Since 1892,
            we have been dedicated to preserving knowledge and inspiring readers
            across generations.
          </p>

          <p>
            Our mission is to make literature accessible to everyone, offering
            thousands of books from timeless classics to modern masterpieces.
          </p>

          <div className="stats">
            <div>
              <h2>10,000+</h2>
              <span>Books</span>
            </div>
            <div>
              <h2>500+</h2>
              <span>Members</span>
            </div>
            <div>
              <h2>50+</h2>
              <span>Categories</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
