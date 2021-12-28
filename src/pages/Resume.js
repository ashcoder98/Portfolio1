import { Link } from 'react-router-dom'
function Resume() {
    return (
        <div className="Resume">

            <div className="resumeimage">
                <Link to={{ pathname: "https://drive.google.com/file/d/1gk3hCqriNDhsCpDHGUKgOfVUjnF18U1y/view?usp=sharing" }} target="_blank">
                <button>Link to Resume</button>
                </Link>
                <embed src={process.env.PUBLIC_URL + '/resume.pdf'} type="application/pdf" />
            </div>
        </div>
        );
      }
      
      export default Resume;
      