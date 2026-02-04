import "../styles/LoginForm.css";
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="icon-circle">
          📖
        </div>

        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to continue your literary journey</p>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="******" />
        </div>

        <Link to="/home"><button className="login-btn">Sign In</button></Link>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup"><span>Create one</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
