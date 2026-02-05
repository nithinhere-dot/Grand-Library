import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Welcome to <br />
            <span>The Grand Library</span>
          </h1>

          <p>
            Discover thousands of books across every genre. From timeless
            classics to contemporary masterpieces, your next great read
            awaits.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">
              Explore Collection →
            </button>
            <button className="secondary-btn">
              Become a Member
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h2>10,000+</h2>
              <span>Books Available</span>
            </div>
            <div>
              <h2>500+</h2>
              <span>Active Members</span>
            </div>
            <div>
              <h2>50+</h2>
              <span>Categories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
