import { Link } from 'react-router-dom'
// import { ExternalLink } from 'react-external-link'
function Portfolio() {
    return (
        <div className="Portfolio">
          <div className="projects">

            <h1>My Projects</h1>
            <div className="projectlist">
              <h2>General Assembly Projects</h2>

              <div className="card">
              <h3>Chef for Hire</h3>
              <p>A Full-stack Full-CRUD app designed to allow people to hire private chefs for various occasions! And vice-versa it allows a private chef to create a user friendly portfolio for clients to hire them.</p>
              <p>Technologies Used - Python, HTML, CSS, Django, PostgreSQL, Heroku, AWS S3</p>
              <div className='links'>
              <Link to={{ pathname: "https://github.com/platosw/chefforhire" }} target="_blank">
               <p>GitHub</p>
              </Link>
              <Link to={{ pathname: "https://chefforhire.herokuapp.com/" }} target="_blank">
               <p>Deployed Site</p>
              </Link>
              </div>
              </div>

              <div className="card">
              <h3>ExoPlanet Logger</h3>
              <p>A Full-stack FULL-CRUD app that can create a new log for a newly discovered planet.</p>
              <p>Technologies Used - HTML, CSS, Node, Express, Mongoose, MongoDB, Heroku</p>
              <div className='links'>
              <Link to={{ pathname: "https://github.com/ashcoder98/ExoPlanet-Logger" }} target="_blank">
               <p>GitHub</p>
              </Link>
              <Link to={{ pathname: "https://exoplanet-logger.herokuapp.com/exoplanets" }} target="_blank">
               <p>Deployed Site</p>
              </Link>
              </div>
              </div>

              <div className="card">
              <h3>Rule of Thumb</h3>
              <p>A Full-stack decoupled message-board app that's purpose is for people to share advice of different topics.</p>
              <p>Technologies Used - React, HTML, CSS, JavaScript, Node, Express, MongoDB, Mongoose, Heroku, Netlify</p>
              <div className='links'>
              <Link to={{ pathname: "https://github.com/ashcoder98/Rule-of-Thumb-FrontEnd" }} target="_blank">
               <p>GitHub</p>
              </Link>
              <Link to={{ pathname: "https://ruleofthumbga.netlify.app/" }} target="_blank">
              <p>Deployed Site</p>
              </Link>
              </div>
              </div>
              
              <div className="card">
              <h3>Giphy Portal</h3>
              <p>An app that displays a random Gif based on a search query.</p>
              <p>Technologies Used - HTML, CSS, JQuery, GIPHY API, JavaScript, Heroku</p>
              <div className='links'>

              <Link to={{ pathname: "https://github.com/ashcoder98/giphy-portal-app" }} target="_blank">
               <p>GitHub</p>
              </Link>
              <Link to={{ pathname: "https://ashcoder98.github.io/giphy-portal-app/" }} target="_blank">
              <p>Deployed Site</p>
              </Link>
              </div>
              </div>
            
          
              




            </div>
          </div>
        </div>
        );
      }
      
      export default Portfolio;
      