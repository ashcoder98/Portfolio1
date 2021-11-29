import { DoubleArrow } from "@material-ui/icons";
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
<div className="title">
    <h2 className="name">Alexander Harris</h2>
    <h4 className="job">Full-Stack Software Engineer.</h4>
</div>
    <h4>A little about me: </h4>
    <p>Explore my projects <Link to="/portfolio"> <DoubleArrow /> </Link> </p>
    
        </div>
        );
      }
      
      export default Home;
      