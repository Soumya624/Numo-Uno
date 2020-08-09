import React from 'react';
function Footer(props) {
    return(
          <div className="footer" id="footer">
          <div className="container">
            <div style={{padding:"0vw 7vw"}}>
            <div className="row">
              <div className="col-12 col-md-4 mr-5" href="/" style={{textAlign:"left"}}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo.png`}
                  height="auto"
                  width="30%"
                  margin="auto"
                  alt="Ristorante Con Fusion"
                />
              </div>
              <div className="col-12 col-md-6 ml-auto" href="/" id="right-text-footer">
                  <p id="footer-heading" style={{paddingTop:"20px"}}>NUMO UNO</p>
                  <p id="footer-sub">Eficient AI based hiring solutions</p> 
          
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 mr-5" href="/" style={{textAlign:"left",
            marginTop:"1vw"}}>
                <p id="footer-heading">EMAIL</p>
                <p id="footer-sub">contact@numouno(dot)tech</p>
              </div>
              <div className="col-12 col-md-6 ml-auto" href="/" id="right-text-footer">
                <p id="footer-heading">GET IN TOUCH</p>
                <p id="footer-sub">Indian Institute of Technology Kharagpur<br/>
West Bengal, India - 731202.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 mr-5" href="/" style={{textAlign:"left"}}>
                <p id="footer-heading">CONTACT NUM.</p>
                <p id="footer-sub">+(91)-(894)6962423</p>
              </div>
              <div
                className="col-12 col-md-6 ml-auto"
                id="right-text-footer"
                style={{ marginTop: "30px" }}
              >
                <a
                  className="social-button"
                  href="http://www.facebook.com/profile.php?id="
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="social-button" href="http://www.linkedin.com/in/">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a className="social-button" href="http://instagram.com/">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-12"
                style={{
                  height: "0px",
                  border: "1px solid #445a64",
                  margin: "10px 0px 10px 0px",
                }}
              ></div>
              <p id="copyright">2020 © Numo Uno Pvt. Ltd. All Rights Reserved</p>
            </div>
          </div>
        </div>
    )
}

export default Footer;
