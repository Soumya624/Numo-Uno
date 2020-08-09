import React, { Component } from "react";
import { BACKEND_URL } from "../constants/constants";
import axios from "axios";
class VerifyComponent extends Component {
  componentDidMount() {
    const token = window.location.pathname.split("/")[2];
    console.log("token is ", token)
    const URL = `${BACKEND_URL}/user/verify/${token}/`;

    console.log("URL is ", URL)
    axios
      .get(URL)
      .then((res) => {
        console.log("res.data ", );
        if (res.data.message === "success") {
          window.location.pathname= "/verificationsuccess"
        }
      })
      .catch((err) => {
        if(err.response.status === 410)
          window.location.pathname= "/verificationfailure";
        else
          alert("Server Error! Please try again later")
        
      });
  }
  render() {
    return <h1>Loading ....</h1>;
  }
}

export default VerifyComponent;
