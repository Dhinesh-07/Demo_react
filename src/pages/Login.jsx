import '../styles/login.css';
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">

        <div className="title">
          <span>Welcome back</span>
        </div>
        <p className='title_para'>Please enter your details to sign in.</p>

        <form action="#">
          <div className="row">
            <input type="text" placeholder="Enter your email..." required />
          </div>
          <div className="row">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="pass"><Link to href="#">Forgot password?</Link></div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">Not a member?   <Link to="/register">Register</Link></div>
        </form>
      </div>
    </div>
  )
}

export default App