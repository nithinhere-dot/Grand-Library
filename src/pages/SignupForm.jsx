import "../styles/SignupForm.css"
import {Link} from "react-router-dom"

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="icon-circle">
          📖
        </div>

        <h2>Join Our Library</h2>
        <p className="subtitle">Create an account to start your literary journey</p>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="******" />
        </div>

        <button className="signup-btn">Create Account</button>

        <p className="login-text">
         
          Already have an account?  <Link to="/"><span>Sign in</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
