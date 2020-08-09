import React, { Component } from "react";
import { Form, FormGroup, Input, FormFeedback } from "reactstrap";
import { BACKEND_URL } from "../constants/constants";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      touched: {
        loginEmail: false,
        loginPassword: false,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(telnum, loginEmail, loginPassword) {
    const errors = {
      telnum: "",
      loginEmail: "",
      loginPassword: "",
    };

    const reg = /^\d+$/;

    if (
      this.state.touched.loginEmail &&
      this.state.loginEmail.split("").filter((x) => x === "@").length !== 1
    )
      errors.loginEmail = "Email is already registered";
    if (this.state.touched.loginPassword && this.state.loginPassword.length < 6)
      errors.loginPassword = "Password is incorrect";
    return errors;
  }

  handleLogin(event) {
    this.toggleModal();
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
    handleLoginClick = e => {
        e.preventDefault()

        const data = {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        }

        const URL = `${BACKEND_URL}/user/login/`
        console.log("data is ", data)
        console.log("url is ", URL)
        axios
            .post(URL, data)
            .then(res => {
                console.log("res is ", res.data);
                if(res.data.message === "success") {
                    localStorage.setItem("tttoken",res.data.token)
                    window.location.pathname= "/loginsuccess"
                    console.log("FRONTEND TEAM LOGIN SUCES REDIRECT TO LOGIN PAGE")
                    
                }
            })
            .catch(err => {
              console.log("err is ", err)
              if(err.response.status === 401) {
                  alert("invalid credentials");
                  console.log("FRONTEND TEAM SHOW INVALID CREDENTIALS")
              }

          })
      }
            
  scrollToFooter() {
    const anchor = document.querySelector("#footer");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  scrollToAbout() {
    const anchor = document.querySelector("#about");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  render() {
    const errors = this.validate(
      this.state.loginEmail,
      this.state.loginPassword
    );
    return (
      <div className="xyzz">
        <center>
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              height: "auto",
              borderRadius: "15px",
              boxShadow: "0 0 6px rgba(0,0,0,.1)",
              width: "36%",
              backgroundColor: "white",
            }}
          >
            <Form className="cd-signin-modal__form" style={{ padding: "2em" }}>
              <p
                style={{
                  fontSize: "35px",
                  textAlign: "center",
                  fontFamily: "Josefin Sans",
                  color: "black",
                }}
              >
                {" "}
                Welcome Back
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  lineHeight: "18px",
                  letterSpacing: "1px",
                }}
              >
                Signin to access personalized articles, podcasts, career
                enhancement services along with interest based professional
                communication groups.
              </p>
              <br />

              <center>
                <a
                  href="/images/cd-logo.svg"
                  className="fb btn"
                  alt="logo missing"
                  style={{ padding: "10px 12px" }}
                >
                  <div className="b">
                    <p style={{ color: "white" }}>.</p>
                  </div>
                  <div className="f">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/un.png`}
                      style={{ width: "40%", marginTop: "2px" }}
                      alt="Logo missing"
                    />
                  </div>
                  <div
                    className="e"
                    style={{ textAlign: "left", marginTop: "3px" }}
                  >
                    Signin with Linkedin
                  </div>
                </a>
              </center>
              <center>
                <a
                  href="http://google.com/"
                  className="twitter btn"
                  style={{ padding: "10px 12px" }}
                >
                  <div className="b">
                    <p style={{ color: "white" }}>.</p>
                  </div>
                  <div className="f">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/abc.svg`}
                      style={{ width: "40%", marginTop: "2px" }}
                      alt=" twitter logo missing"
                    />
                  </div>
                  <div
                    className="e"
                    style={{ textAlign: "left", marginTop: "3px" }}
                  >
                    Signin with Google
                  </div>
                </a>
              </center>

              <center>
                <a
                  href="http://apple.com/"
                  className="google btn"
                  style={{ padding: "10px 12px" }}
                >
                  <div className="b">
                    <p style={{ color: "white" }}>.</p>
                  </div>
                  <div className="f">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/apple.png`}
                      style={{ width: "40%", marginTop: "2px" }}
                      alt=" twitter logo missing"
                    />
                  </div>
                  <div
                    className="e"
                    style={{ textAlign: "left", marginTop: "3px" }}
                  >
                    Signin with Apple
                  </div>
                </a>
              </center>
              <p style={{ margin: "1em 0" }}>
                <center>or</center>
              </p>

              <p style={{ margin: "1em 0" }}>
                <center>
                  <FormGroup>
                    <Input
                      className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border"
                      id="loginEmail"
                      type="email"
                      placeholder="E-mail"
                      name="loginEmail"
                      value={this.state.loginEmail}
                      valid={
                        errors.loginEmail === "" &&
                        this.state.touched.loginEmail
                      }
                      invalid={errors.loginEmail !== ""}
                      onBlur={this.handleBlur("loginEmail")}
                      onChange={this.handleInputChange}
                      style={{
                        fontSize: "16px",
                        width: "85%",
                        fontFamily: "Josefin Sans",
                        height: "80%",
                      }}
                    onChange={e => this.setState({ loginEmail: e.target.value})}
                    />
                    <span className="cd-signin-modal__error">
                      Error message here!
                    </span>

                    <FormFeedback style={{ fontSize: "14px" }}>
                      {errors.loginEmail}
                    </FormFeedback>
                  </FormGroup>
                </center>
              </p>

              <p style={{ margin: "1em 0 0.5em 0" }}>
                <center>
                  <FormGroup>
                    <Input
                      className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border"
                      id="loginPassword"
                      type="password"
                      placeholder="Password"
                      name="loginPassword"
                      value={this.state.loginPassword}
                      valid={
                        errors.loginPassword === "" &&
                        this.state.touched.loginPassword
                      }
                      invalid={errors.loginPassword !== ""}
                      onBlur={this.handleBlur("loginPassword")}
                      onChange={this.handleInputChange}
                      style={{
                        fontSize: "16px",
                        width: "85%",
                        fontFamily: "Josefin Sans",
                        height: "80%",
                      }}
                    onChange={e => this.setState({ loginPassword: e.target.value})} 
                    />
                    <FormFeedback style={{ fontSize: "14px" }}>
                      {errors.loginPassword}
                    </FormFeedback>
                  </FormGroup>
                  <span className="cd-signin-modal__error">
                    Error message here!
                  </span>
                </center>
              </p>
              <div className="row">
                <div className="b">
                  <p style={{ color: "white" }}>.</p>
                </div>
                <div className="hd4" style={{ textAlign: "left" }}>
                  <p style={{ margin: "1em 0" }}>
                    <input
                      type="checkbox"
                      id="remember-me"
                      
                      className="cd-signin-modal__input "
                    />
                    <label
                      for="remember-me"
                      style={{ fontSize: "15px", fontFamily: "Montserrat" }}
                    >
                      Remember me
                    </label>
                  </p>
                </div>
              </div>

              <p style={{ margin: "0em 0" }}>
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
                    onClick={this.handleLoginClick}
                  >
                    Continue
                  </a>
                </center>
              </p>

              <center>
                <a
                  href="/forgot"
                  style={{ fontSize: "14px", fontFamily: "Montserrat" }}
                >
                  Forgot Password?
                </a>
              </center>
              <br />

              <p style={{ fontSize: "12px", fontFamily: "Montserrat" }}>
                <center>
                  No Account?
                  <a
                    href="/signup"
                    style={{ fontSize: "12px", fontFamily: "Montserrat" }}
                  >
                    Create One
                  </a>
                </center>
              </p>
            </Form>
          </div>
        </center>
      </div>
    );
  }
}

export default Login;
