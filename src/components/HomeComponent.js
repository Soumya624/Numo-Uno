import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, Modal } from "reactstrap";
import ReactPlayer from "react-player";
import Header from "./HeaderComponent";
import Blog from "./BlogComponent";
import Subscribe from "./SubscribeComponent";
import Skill from "./SkillComponent";
import Footer from "./FooterComponent";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isMdodalOpen: false,
      isMdodalOpenj: false,
    };

    this.toggleModalj = this.toggleModalj.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
  }

  toggleModalj() {
    this.setState({
      isMdodalOpenj: !this.state.isMdodalOpenj,
    });
  }
  handleJoin(event) {
    this.toggleModalj();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid" id="pad">
          {/* This is the first row */}
          <div id="row1" className="row">
            <div
              id="row-col-1"
              className="col-12 col-md-8"
              style={{ margin: "auto", textAlign: "left" }}
            >
              <h1 className="main-text">Shaping Careers </h1>
              <h1 className="main-text2"> Through </h1>
              <h1 className="main-text">
                Artificial Intelligence
              </h1>
              <h2 className="sub-text">
                Efficient A.I. based hiring solutions{" "}
              </h2>
              {/* <button className="custom-button2" onClick={this.toggleModalj}>
                Get Started
              </button> */}
            </div>
            <div className="col-12 col-md-4 ">
              <img
                id="numounomobile"
                src={`${process.env.PUBLIC_URL}/images/scan.gif`}
                alt="not found"
              />
            </div>
          </div>
        </div>
          {/* This is the second row */}
          <div className="container-fluid" id="pad2">
          <div id="row1" className="row">
            <div className="col-12 col-md-6 mx-auto" style={{padding:"0px 15px 0px 0px"}}>
              <div style={{position:"relative",top:"0vw",left:"0vw",width:"5vw",height:"5vw"}}>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/Path 116.png`}
                  />
              </div>
              <ReactPlayer
                  style={{position:"relative",
                          top:"-2.5vw",left:"2.5vw"
                        ,borderRadius:"10px",padding:"1%",
                        backgroundColor:"black"}}
                  
                  height="25vw"
                  width="auto"
                  controls
                  url="https://www.youtube.com/watch?v=giYeaKsXnsI.mp4"
                />
            </div>
            <div id="center-text" className="col-12 col-md-5 ">
              <p>
                <h3 id="side-heading">B2B </h3>
              
              <div id="side-heading-child">
             - AI based hassle free recruitment platform
                <br />
                </div>
              </p>
              <br/>
              <br/>
              <div>
                <h3 id="side-heading">B2C </h3>
              </div>
              <p id="side-heading-child">
             - Socio-Professional career platform for college students
                <br />
              </p>
              {/* <button className="custom-button2" style={{position:"absolute",left:"20px"}}>Know More</button> */}
            </div>
          </div>
        </div>
          {/* This is the third row */}
        <div className="container-fluid">
          <div  className="row">
          <div className="col-12" style={{padding:"0px",margin:"auto"}}>
            <img 
                    width="75%"
                    style={{opacity:"90%"}}
                    src={`${process.env.PUBLIC_URL}/images/bridge.png`}
                    />
            <div className="col-12 md-col-4"
            style={{
              fontSize: "26px",
              fontWeight: "600",
              color: "#151D41",
              margin: "-5.5vw auto",
            }}>
              Bridging the gap between<br/> Students and Recruiters<br/> with A.I.
            </div>
          </div>
          </div>


   

          {/* This is the Card row */}
          <div  className="row justify-content-center" id="about">
          <div className="col-12" >
            <div className="center-heading" id="row1">
              <h3 id="yellow-heading">WE OFFER</h3>
              <h3 className="center-heading" style={{marginBottom:"50px"}}>For Students</h3>
            </div>
          </div>
          <div  className="col-12" id="data-map"  style={{padding:"0px"}}>
            <div id="card-width" >
              <div id="card-odd" width="100%" >
                <div>
                  <img
                    id="card-img"
                    top
                    src={`${process.env.PUBLIC_URL}/images/stud1.png`}
                    alt="Grey rectangle not found"
                  />
                  {/* <div id="bottom-text">
                    <div id="card-heading">PARCELS</div>
                    <div id="card-text">
                      GET HIRED BY<br/> TOP COMPANIES{" "}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div id="card-width" >
              <div id="card-even" >
                <div>
                  <img
                    id="card-img"
                    top
                    src={`${process.env.PUBLIC_URL}/images/stud2.png`}
                    alt="Grey rectangle not found"
                  />
                  
                </div>
              </div>
            </div>

            <div id="card-width" >
              <div id="card-odd" width="100%">
                <div>
                  <img
                    id="card-img"
                    top
                    src={`${process.env.PUBLIC_URL}/images/stud3.png`}
                    alt="Grey rectangle not found"
                  />
                  
                </div>
              </div>
            </div>

            <div id="card-width" >
              <div id="card-even" width="100%">
                <div>
                  <img
                    id="card-img"
                    top
                    src={`${process.env.PUBLIC_URL}/images/stud4.png`}
                    alt="Grey rectangle not found"
                  />
                  
                </div>
              </div>
            </div>

            <div id="card-width" >
              <div id="card-odd" width="100%">
                <div>
                  <img
                    id="card-img"
                    top
                    src={`${process.env.PUBLIC_URL}/images/stud5.png`}
                    alt="Grey rectangle not found"
                  />
                  
                </div>
              </div>
            </div>

            </div>
            
          </div>
        </div>
        
        <Skill />
        <Blog />
        <Subscribe />
        <Footer />
       
        <Modal
          isOpen={this.state.isMdodalOpenj}
          toggle={this.toggleModalj}
          style={{ marginTop: "150px", letterSpacing: "1px" }}
        >
          <center>
            <div
              className="container"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 0 8px rgba(0,0,0,.15)",
                width: "auto",
              }}
            >
              <form className="cd-signin-modal__form">
                <p
                  style={{
                    fontSize: "35px",
                    textAlign: "center",
                    fontFamily: "Josefin Sans",
                    color: "black",
                  }}
                >
                  Join Numo Uno
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    lineHeight: "18px",
                  }}
                >
                  Create an account to access personalized articles, podcasts,
                  career enhancement services along with interest based
                  professional communication groups.
                </p>
                <br />

                <center>
                  <a
                    href={`${process.env.PUBLIC_URL}/images/cd-logo.svg`}
                    className="fb btn"
                  >
                    <div className="b">
                      <p>.</p>
                    </div>
                    <div className="f">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/un.png`}
                        style={{ width: "40%", marginTop: "2px" }}
                        alt="Logo Missing"
                      />
                    </div>
                    <div
                      className="e"
                      style={{ textAlign: "left", marginTop: "5px" }}
                    >
                      Signin with Linkedin
                    </div>
                  </a>
                </center>
                <center>
                  <a href="http://google.com/" className="twitter btn">
                    <div className="b">
                      <p>.</p>
                    </div>
                    <div className="f">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/abc.svg`}
                        style={{ width: "40%", marginTop: "2px" }}
                        alt="Logo Missing"
                      />
                    </div>
                    <div
                      className="e"
                      style={{ textAlign: "left", marginTop: "5px" }}
                    >
                      Signin with Google
                    </div>
                  </a>
                </center>

                <center>
                  <a href="http://apple.com/" className="google btn">
                    <div className="b">
                      <p>.</p>
                    </div>
                    <div className="f">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/apple.png`}
                        style={{ width: "40%", marginTop: "2px" }}
                        alt="Logo Missing"
                      />
                    </div>
                    <div
                      className="e"
                      style={{ textAlign: "left", marginTop: "5px" }}
                    >
                      Signin with Apple
                    </div>
                  </a>
                </center>
                <p style={{ margin: "1em 0" }}>
                  <center>or</center>
                </p>
                <br />

                <div class="row">
                  <div class="b">
                    <p>.</p>
                  </div>
                  <div class="a">
                    <p class="cd-signin-modal__fieldset">
                      <input
                        class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border"
                        id="signup-userfname"
                        type="text"
                        placeholder="First Name"
                        style={{
                          fontSize: "16px",
                          width: "90%",
                          fontFamily: "Josefin Sans",
                          marginLeft: "5px",
                        }}
                      />
                    </p>
                  </div>
                  <div class="d">
                    <p>.</p>
                  </div>
                  <div class="a">
                    <p class="cd-signin-modal__fieldset">
                      <input
                        class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border"
                        id="signup-userlname"
                        type="text"
                        placeholder="Last Name"
                        style={{
                          fontSize: "16px",
                          width: "90%",
                          fontFamily: "Josefin Sans",
                          marginRight: "5px",
                        }}
                      />
                    </p>
                  </div>
                </div>
                <p style={{ margin: "1em 0" }}>
                  <center>
                    <input
                      className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border"
                      id="signin-email"
                      type="email"
                      placeholder="E-mail"
                      style={{
                        fontSize: "16px",
                        width: "80%",
                        fontFamily: "Josefin Sans",
                      }}
                    />
                    <span className="cd-signin-modal__error">
                      Error message here!
                    </span>
                  </center>
                </p>

                <p style={{ margin: "1em 0" }}>
                  <center>
                    <input
                      className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border"
                      id="signin-password"
                      type="text"
                      placeholder="Password"
                      style={{
                        fontSize: "16px",
                        width: "80%",
                        fontFamily: "Josefin Sans",
                      }}
                    />

                    <span className="cd-signin-modal__error">
                      Error message here!
                    </span>
                  </center>
                </p>

                <div className="row">
                  {/* <div className="b"><p>.</p></div> */}
                  <div
                    className="c"
                    style={{ width: "80%", textAlign: "left" }}
                  >
                    <p style={{ margin: "1em 60px" }}>
                      <input
                        type="checkbox"
                        id="remember-me"
                        checked
                        className="cd-signin-modal__input "
                      />
                      <label
                        for="remember-me"
                        style={{ fontSize: "12px", fontFamily: "Montserrat" }}
                      >
                        I agree to Terms and Conditions
                      </label>
                    </p>
                  </div>
                </div>

                <p style={{ margin: "1em 0" }}>
                  <center>
                    <a
                      href="twitter.com"
                      className="twitter btn"
                      style={{
                        backgroundColor: "black",
                        color: "#ffd700",
                        padding: "8px 12px",
                        fontSize: "20px",
                        textAlign: "center",
                        fontFamily: "Josefin Sans",
                        boxShadow: "0 2",
                        borderRadius: "10px",
                      }}
                    >
                      Continue
                    </a>
                  </center>
                </p>

                <p style={{ fontSize: "14px", fontFamily: "Montserrat" }}>
                  <center>
                    Already Have an Account?
                    <a
                      href="#0"
                      data-signin="signup"
                      style={{ fontSize: "14px", fontFamily: "Montserrat" }}
                    >
                      Signin
                    </a>
                  </center>
                </p>
              </form>
            </div>
          </center>
        </Modal>
      </div>
    );
  }
}

export default Home;
