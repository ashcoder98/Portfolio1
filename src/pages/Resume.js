function Resume() {
    return (
        <div className="Resume">
            <div className="resumeimage">
                <embed src={process.env.PUBLIC_URL + '/resume.pdf'} type="application/pdf" />
                {/* <iframe src={process.env.PUBLIC_URL + '/resume.png'} title="Resume" frameBorder="500"></iframe> */}
            {/* <img src= alt="Resume" /> */}
            </div>
        </div>
        );
      }
      
      export default Resume;
      