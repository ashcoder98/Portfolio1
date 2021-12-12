import { Link } from 'react-router-dom';
import { Home } from "@material-ui/icons";

function Nav() {
    return (
      <div className="nav">
        <header>
          <div className="homebutton">
          <Link to="/">
            < Home />
          </Link>
          </div>
          <nav>
            <ul className="navlinks">
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/portfolio">
                <li>Portfolio</li>
              </Link>
              <Link to="/resume">
                <li>Resume</li>
              </Link>
            </ul>
          </nav>
              <Link to="/contact">
                <button>Contact</button>
              </Link>
        </header>
      </div>
    );
  }
  
  export default Nav;
  