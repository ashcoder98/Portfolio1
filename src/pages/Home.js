import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';


function Home() {
    return (
        <div className="home" >

<div className="title" >
    <h2 className="name" >Alexander Harris</h2>
    <h4 className="job">Full-Stack Software Engineer.</h4>
</div>
    <h4>A little about me: </h4>
    {/* <img src={process.env.PUBLIC_URL + '/background.jpeg'} alt="Chefforhire Landing Page" /> */}
    <p>Explore my projects <Link to="/portfolio"> <FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon> </Link> </p>
    
        </div>
        );
      }
      
      export default Home;
      