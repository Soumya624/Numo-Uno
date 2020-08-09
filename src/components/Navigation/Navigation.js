import React, { Component } from "react";
import classes from "./Navigation.module.css";
import DropIndi from "./DropIndi/DropIndi";
import Logo from "./ImageAsset/Facebook_BoW - Copy.png";
import Arrow from "./ImageAsset/arrow.svg";
import Active from "./ImageAsset/active.svg";
import Profile from "./ImageAsset/profile.svg";
import UserDrop from "./UserDrop/UserDrop";

class navigationBar extends Component {
  state = {
    ContactDrop: null,
    CircleDrop: null,
    MessageDrop: null,
    DualDrop: null,
    colorStyleContact: {
      color: "#c4cacf",
    },
    colorStyleCircle: {
      color: "#c4cacf",
    },
    colorStyleMessage: {
      color: "#c4cacf",
    },
    colorStyleDual: {
      color: "#c4cacf",
    },
    userDrop: null,
    userIconStyle: {
      color: "#c4cacf",
    },
  };
  unDropToggleHandler = () => {
    let styling = this.state.userIconStyle.color;

    styling = {
      color: "#c4cacf",
    };
    document.getElementById("MainOuter").style.filter = "blur(0px)";
    this.setState({ userDrop: null, userIconStyle: styling });
  };

  userDropToggleHandler = () => {
    let check = this.state.userDrop;

    check = <UserDrop />;

    let styling = this.state.userIconStyle.color;
    document.getElementById("MainOuter").style.filter = "blur(20px)";
    styling = {
      color: "#4DA1FF",
    };

    this.setState({ userDrop: check, userIconStyle: styling });
  };
  unDropContact = () => {
    document.getElementById("MainOuter").style.filter = "blur(0px)";
    let styling = {
      color: "#c4cacf",
    };
    this.setState({ ContactDrop: null, colorStyleContact: styling });
  };
  unDropMessage = () => {
    document.getElementById("MainOuter").style.filter = "blur(0px)";
    let styling = {
      color: "#c4cacf",
    };
    this.setState({ MessageDrop: null, colorStyleMessage: styling });
  };
  unDropCircle = () => {
    document.getElementById("MainOuter").style.filter = "blur(0px)";
    let styling = {
      color: "#c4cacf",
    };
    this.setState({ CircleDrop: null, colorStyleCircle: styling });
  };
  unDropDual = () => {
    document.getElementById("MainOuter").style.filter = "blur(0px)";
    let styling = {
      color: "#c4cacf",
    };
    this.setState({ DualDrop: null, colorStyleDual: styling });
  };
  dropDownHandlerContact = () => {
    let insert = (
      <div className={classes.dropDownContact}>
        <div className={classes.heading}>Profile</div>
        <ul>
          <DropIndi name="My Profile" />
          <DropIndi name="Strength Overview" />
          <DropIndi name="My Details" />
          <DropIndi name="Resume" />
          <DropIndi name="Cover Letter" />
          <DropIndi name="Following" />
        </ul>
      </div>
    );
    document.getElementById("MainOuter").style.filter = "blur(20px)";
    let styling = {
      color: "#4DA1FF",
    };
    this.setState({ ContactDrop: insert, colorStyleContact: styling });
  };
  dropDownHandlerCircle = () => {
    let insert = (
      <div className={classes.dropDownCircle}>
        <div className={classes.heading}>Opportunites</div>
        <ul>
          <DropIndi name="Suggestions" />
          <DropIndi name="My Preferences" />
          <DropIndi name="Internships" />
          <DropIndi name="My Applications" />
          <DropIndi name="Cover Letter" />
          <DropIndi name="Following" />
        </ul>
        <div className={classes.heading}>Career materials</div>
        <ul>
          <DropIndi name="Blog" />
          <DropIndi name="Pod Casts" />
        </ul>
      </div>
    );
    document.getElementById("MainOuter").style.filter = "blur(20px)";
    let styling = {
      color: "#4DA1FF",
    };
    this.setState({ CircleDrop: insert, colorStyleCircle: styling });
  };
  dropDownHandlerMessage = () => {
    let insert = (
      <div className={classes.dropDownMessage}>
        <div className={classes.heading}>Professional groups</div>
        <ul>
          <DropIndi name="Group 1" />
          <DropIndi name="Group 2" />
          <DropIndi name="Group 3" />
          <DropIndi name="Group 4" />
        </ul>
        <div className={classes.heading}>Companies</div>
        <ul>
          <DropIndi name="Company 1" />
          <DropIndi name="Company 2" />
          <DropIndi name="Company 3" />
          <DropIndi name="Company 4" />
        </ul>
      </div>
    );
    document.getElementById("MainOuter").style.filter = "blur(20px)";
    let styling = {
      color: "#4DA1FF",
    };
    this.setState({ MessageDrop: insert, colorStyleMessage: styling });
  };
  dropDownHandlerDual = () => {
    let insert = (
      <div className={classes.dropDownDual}>
        <div className={classes.heading}>Settings</div>
        <ul>
          <DropIndi name="User Preferences" />
          <DropIndi name="Account Settings" />
          <DropIndi name="Privacy Settings" />
        </ul>
      </div>
    );
    document.getElementById("MainOuter").style.filter = "blur(20px)";
    let styling = {
      color: "#4DA1FF",
    };
    this.setState({ DualDrop: insert, colorStyleDual: styling });
  };

  render() {
    return (
      <>
        <div className={classes.navContainer}>
          <div className={classes.logoMain}>
            <img src={Logo} alt="Logo"></img>
          </div>
          <div className={classes.space1}></div>
          <div className={classes.innerContainer}>
            <div className={classes.item}>
              <div className={classes.active}>
                <img src={Active} alt="&#8900;"></img>
              </div>
              <div className={classes.icon1}>
                <button
                  onMouseOver={this.dropDownHandlerContact}
                  onMouseLeave={this.unDropContact}
                >
                  <i
                    className="las la-id-card"
                    style={this.state.colorStyleContact}
                  ></i>
                  {this.state.ContactDrop}
                </button>
              </div>
              <div className={classes.arrow}>
                <img src={Arrow} alt="&#8900;"></img>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.active}>
                <img src={Active} alt="&#8900;"></img>
              </div>
              <div className={classes.icon2}>
                <button
                  onMouseOver={this.dropDownHandlerCircle}
                  onMouseLeave={this.unDropCircle}
                >
                  <i
                    className="las la-chart-pie"
                    style={this.state.colorStyleCircle}
                  ></i>
                  {this.state.CircleDrop}
                </button>
              </div>
              <div className={classes.arrow}>
                <img src={Arrow} alt="&#8900;"></img>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.active}>
                <img src={Active} alt="&#8900;"></img>
              </div>
              <div className={classes.icon3}>
                <button
                  onMouseOver={this.dropDownHandlerMessage}
                  onMouseLeave={this.unDropMessage}
                >
                  <i
                    className="lab la-connectdevelop"
                    style={this.state.colorStyleMessage}
                  ></i>
                  {this.state.MessageDrop}
                </button>
              </div>
              <div className={classes.arrow}>
                <img src={Arrow} alt="&#8900;"></img>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.active}>
                <img src={Active} alt="&#8900;"></img>
              </div>
              <div className={classes.icon4}>
                <button
                  onMouseOver={this.dropDownHandlerDual}
                  onMouseLeave={this.unDropDual}
                >
                  <i
                    className="las la-user-cog"
                    style={this.state.colorStyleDual}
                  ></i>
                  {this.state.DualDrop}
                </button>
              </div>
              <div className={classes.arrow}>
                <img src={Arrow} alt="&#8900;"></img>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.outer}>
            <div className={classes.name}>Hello John !</div>
            <div className={classes.avatar}>
              <div className={classes.user}>
                <img src={Profile} alt="&#8900;"></img>
              </div>
              <div className={classes.user}>User Name</div>
              <div className={classes.user}>
                <button
                  className={classes.userDropBtn}
                  onMouseOver={this.userDropToggleHandler}
                  onMouseLeave={this.unDropToggleHandler}
                >
                  <i
                    className="las la-caret-down"
                    style={this.state.userIconStyle}
                  ></i>
                  {this.state.userDrop}
                </button>
              </div>
            </div>
          </div>
          <div className={classes.outerMain} id="MainOuter"></div>
        </div>
      </>
    );
  }
}

export default navigationBar;
