import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        <div className="footer-col">
          <h3 className="footer-logo">📖 The Grand Library</h3>
          <p>
            Your gateway to endless knowledge and literary adventures since 1892.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Browse Books</li>
            <li>Sign In</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li>Fiction</li>
            <li>Science Fiction</li>
            <li>Romance</li>
            <li>Fantasy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Visit Us</h4>
          <p>123 Library Lane</p>
          <p>Booktown, BK 12345</p>
          <p>Open Mon–Sat: 9AM – 8PM</p>
        </div>

      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        © 2024 The Grand Library. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
