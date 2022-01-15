import { Link } from 'react-router-dom'
function Resume() {
    return (
        <div className="Resume">

            <div className="resumeimage">
                <Link to={{ pathname: "https://docs.google.com/document/d/1jPGVf_OpjFeJhmjw2u8IsIWXt2pLWnREY-MpkFXGcHM/edit?usp=sharing" }} target="_blank">
                <button>Link to Resume</button>
                </Link>
                <embed src={process.env.PUBLIC_URL + '/resume.pdf'} type="application/pdf" />
            </div>
        </div>
        );
      }
      
      export default Resume;
      