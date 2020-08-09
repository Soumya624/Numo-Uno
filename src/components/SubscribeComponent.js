import React, { Component } from "react";
import { Form, FormGroup, Input, FormFeedback } from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      lastname: "",
      telnum: "",
      email: "",
      contactType: "Tel.",
      touched: {
        fullname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  validate(fullname, lastname, telnum, email) {
    const errors = {
      fullname: "",
      lastname: "",
      telnum: "",
      email: "",
    };
    if (this.state.touched.fullname && fullname.length < 3)
      errors.fullname = "Name should be >= 3 characters";
    else if (this.state.touched.fullname && fullname.length >= 15)
      errors.fullname = "First name shoubld be <=15 characters";
    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = "Last name should be >= 3 characters";
    else if (this.state.touched.lastname && lastname.length >= 10)
      errors.fullname = "Last name shoubld be <=10 characters";

    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum))
      errors.telnum = "Tel number should contain only numbers";

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    )
      errors.email = "Email should contain a @ sign";

    return errors;
  }
  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }
  render() {
    const errors = this.validate(
      this.state.fullname,
      this.state.lastname,
      this.state.telnum,
      this.state.email,
    );
    return (
      <div className="container">
        <div className="row row-content" style={{ marginTop:"25px",
            paddingBottom:"25px"}}>
          <div className="col-12" id="bottom">
            <div>
              <h3 id="subs" className="center-heading">
                Subscribe to keep Updated
              </h3>
            </div>
          </div>
          <div className="col-12" id="subscribe1">
            <Form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-12 col-md-5 ">
                  <FormGroup row id="form-padding">
                    <Input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Full Name"
                      value={this.state.fullname}
                      valid={errors.fullname === ""&&this.state.touched.fullname}
                      invalid={errors.fullname !== ""}
                      onBlur={this.handleBlur("fullname")}
                      onChange={this.handleInputChange}
                      style={{ fontSize: "18px",borderColor: "rgb(53, 53, 53)",
                      height: "64px",borderRadius:"5px",paddingLeft: "20px" ,
                      margin:"0px"}}
                    />
                    <FormFeedback style={{ fontSize: "14px" }}>
                      {errors.fullname}
                    </FormFeedback>
                  </FormGroup>
                </div>
                <div className="col-12 col-md-5 ml-auto">
                  <FormGroup row id="form-padding">
                    <Input
                      type="tel"
                      id="telnum"
                      name="telnum"
                      placeholder="Contact"
                      value={this.state.telnum}
                      valid={
                        errors.telnum === "" && this.state.touched.lastname
                      }
                      invalid={errors.telnum !== ""}
                      onBlur={this.handleBlur("telnum")}
                      onChange={this.handleInputChange}
                      style={{ fontSize: "18px",
                              borderColor: "rgb(53, 53, 53)",
                              height: "64px",
                              borderRadius:"5px"
                              ,paddingLeft: "20px",
                              margin:"0px"}}
                    />
                    <FormFeedback style={{ fontSize: "14px" }}>
                      {errors.telnum}
                    </FormFeedback>
                  </FormGroup>
                </div>

                <div className="col-12">
                  <FormGroup row id="form-padding">
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Id"
                      value={this.state.email}
                      valid={errors.email === "" && this.state.touched.email}
                      invalid={errors.email !== ""}
                      onBlur={this.handleBlur("email")}
                      onChange={this.handleInputChange}
                      style={{ fontSize: "18px",borderColor: "rgb(53, 53, 53)",
                      height: "64px",borderRadius:"5px",
                      margin:"0px" ,paddingLeft: "20px"}}
                    />
                    <FormFeedback style={{ fontSize: "14px" }}>
                      {errors.email}
                    </FormFeedback>
                  </FormGroup>
                </div>

                <div className="mx-auto">
                  <button className="custom-button2" type="submit">
                    Continue
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
