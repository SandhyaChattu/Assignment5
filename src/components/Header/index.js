import {Link} from 'react-router-dom'
import './index.css'

const Header = () =>  (
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Jobs">
          <li>Jobs</li>
        </Link>
      </ul>
      <button className="logout-btn">Logout</button>
    </nav>
  )

export default Header
