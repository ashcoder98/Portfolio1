import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Portfolio() {
    return (
        <div className="Portfolio">
          <div className="projects">

            <h1>My Work</h1>
            
            <div className="projectlist">
              <h2>General Assembly Projects</h2>
            
              <div className="card">
              <img src={process.env.PUBLIC_URL + '/chefforhire.jpeg'} alt="Chefforhire Landing Page" />
              <div className='card-content'>

              <h2>Chef for Hire</h2>
              <p>Overview: A Full-stack Full-CRUD app designed to allow people to hire private chefs for various occasions! And vice-versa it allows a private chef to create a user friendly portfolio for clients to hire them.</p>
              <p>Technologies Used : Python, HTML, CSS, Django, PostgreSQL, Heroku, AWS S3</p>
              <div className='links'>
              <Link to={{ pathname: "https://github.com/platosw/chefforhire" }} target="_blank">
               {/* <p>GitHub</p> */}
              <FontAwesomeIcon icon={faGithub}  className='github'/>
              </Link>
              
              <Link to={{ pathname: "https://chefforhire.herokuapp.com/" }} target="_blank">
               <p>Visit Wesbite</p>
              </Link>
              </div>
              </div>
              </div>
           
              <div className="card">
              <img src={process.env.PUBLIC_URL + '/exoplanet.jpeg'} alt="Exoplanet Logger Landing Page" />
              <div className='card-content'> 
              <h2>ExoPlanet Logger</h2>
              <p>A Full-stack FULL-CRUD app that can create a new log for a newly discovered planet.</p>
              <p>Technologies Used : HTML, CSS, Node, Express, Mongoose, MongoDB, Heroku</p>
              <div className='links'>
              <Link to={{ pathname: "https://github.com/ashcoder98/ExoPlanet-Logger" }} target="_blank">
              <FontAwesomeIcon icon={faGithub} className='github'/>
              </Link>
              <Link to={{ pathname: "https://exoplanet-logger.herokuapp.com/exoplanets" }} target="_blank">
               <p>Visit Wesbite</p>
              </Link>
              </div>
              </div>
              </div>
           
              <div className="card">
              <img src={process.env.PUBLIC_URL + '/ruleofthumb.jpeg'} alt="Rule of Thumb Landing Page" />
              <div className='card-content'>
              <h2>Rule of Thumb</h2>
              <p>A Full-stack decoupled message-board app that's purpose is for people to share advice of different topics.</p>
              <p>Technologies Used : React, HTML, CSS, JavaScript, Node, Express, MongoDB, Mongoose, Heroku, Netlify</p>
              <div className='links'>
              <Link to={{ pathname: "https://github.com/ashcoder98/Rule-of-Thumb-FrontEnd" }} target="_blank">
              <FontAwesomeIcon icon={faGithub} className='github'/>
              </Link>
              <Link to={{ pathname: "https://ruleofthumbga.netlify.app/" }} target="_blank">
              <p>Visit Wesbite</p>
              </Link>
              </div>
              </div>
              </div>
              
              <div className="card">
              <img src={process.env.PUBLIC_URL + '/giphy.png'} alt="Giphy PortalLanding Page" />
              <div className='card-content'>
              <h2>Giphy Portal</h2>
              <p>An app that utilizes the Giphy API and displays a random Gif based on a search query. </p>
              <p>Technologies Used : HTML, CSS, JQuery, GIPHY API, JavaScript, Heroku</p>
              <div className='links'>
              <Link to={{ pathname: "https://github.com/ashcoder98/giphy-portal-app" }} target="_blank">
              <FontAwesomeIcon icon={faGithub} className='github'/>
              </Link>
              <Link to={{ pathname: "https://ashcoder98.github.io/giphy-portal-app/" }} target="_blank">
              <p>Visit Wesbite</p>
              </Link>
              </div>
              </div>
              </div>
            
          
              




            </div>
          </div>
        </div>
        );
      }
      
      export default Portfolio;
      