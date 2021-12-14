import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
      <div className="nav">
        <header>
          <div className="homebutton">
          <Link to="/">
           <FontAwesomeIcon icon={faHome} size='3x'/>
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
              {/* <Link to="/contact">
                <button>Contact</button>
              </Link> */}
        </header>
      </div>
    );
  }
  
  export default Nav;
  