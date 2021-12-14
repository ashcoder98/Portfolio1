import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';


function Home() {
    return (
        <div className="home" >

<div className="title" >
    <h2 className="name" >Alexander Harris</h2>
    <h4 className="job">Full-Stack Software Engineer</h4>
</div>
    {/* <h4 className='static-txt'>I'm a</h4>
    <ul cla></ul> */}

    <p>Explore my projects <Link to="/portfolio"> <FontAwesomeIcon icon={faChevronCircleRight} size='3x'></FontAwesomeIcon> </Link> </p>
    
        </div>
        );
      }
      
      export default Home;
      