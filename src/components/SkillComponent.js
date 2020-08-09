import React from "react";

function Skill(props) {
  return (
    <div className="container">
      


      {/* This is the first row */}
      <div className="m-auto" id="skill-container" >
        <div id="side-skill-text">
          <h3 className="center-heading"
          style={{marginTop:"200px"}}>For Companies</h3>
        </div>
        <div className="col-12 col-9" id="skill-box">
        <img
          id="tl"
          
          src={`${process.env.PUBLIC_URL}images/skill1.png`}
          alt="not found"
        />
        <img
          id="tr"
          
          src={`${process.env.PUBLIC_URL}images/skill2.png`}
          alt=" not found"
        />
        
       
        <img
          id="bl"
          src={`${process.env.PUBLIC_URL}/images/skill3.png`}
          alt=" not found"
        />
        <img
          id="br"
          
          src={`${process.env.PUBLIC_URL}/images/skill4.png`}
          alt="not found"
        />
      </div>
    </div>
    </div>
  );
}

export default Skill;
