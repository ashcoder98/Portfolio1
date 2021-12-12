import { Link } from 'react-router-dom'
// import { ExternalLink } from 'react-external-link'
function Portfolio() {
    return (
        <div className="Portfolio">
          <div className="projects">

            <h1>My Projects</h1>
            <div className="projectlist">
              <h2>General Assembly Projects</h2>
              
              <h3>Chef for Hire</h3>
              <p>A Full-stack Full-CRUD app designed to allow people to hire private chefs for various occasions! And vice-versa it allows a private chef to create a user friendly portfolio for clients to hire them.</p>
              <p>Technologies Used - Python, HTML, CSS, Django, PostgreSQL, Heroku</p>
              <Link to={{ pathname: "https://github.com/platosw/chefforhire" }} target="_blank">
               <p>GitHub</p>
              </Link>


              <h3>ExoPlanet Logger</h3>
              <p>Full-stack FULL-CRUD app that can create a new log for a newly discovered planet.</p>
              <p>Technologies Used - HTML, CSS, Node, Express, Mongoose, MongoDB, Heroku</p>

              <h3>Rule of Thumb</h3>
              <p>A Full-stack decoupled message-board app that's purpose is for people to share advice of different topics.</p>
              <p>Technologies Used - React, HTML, CSS, JavaScript, Node, Express, MongoDB, Mongoose, Heroku, Netlify</p>
              
              <h3>Giphy Portal</h3>
              <p>An app that displays a random Gif based on a search query.</p>
              <p>Technologies Used - HTML, CSS, JQuery, GIPHY API, JavaScript, Heroku</p>
            
          
              




            </div>
          </div>
        </div>
        );
      }
      
      export default Portfolio;
      