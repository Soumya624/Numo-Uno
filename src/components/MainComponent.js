import React, { Component } from "react";
import Home from "./HomeComponent";
import BlogFinal from "./SirfBlog";
import { Switch, Route, Redirect } from "react-router-dom";
import ArticleFinal from "./ArticleCall";
import VerifyComponent from "./VerifyComponent";
import PodcastCall from "./PodcastCall";
import Login from "./LoginComponent";
import Signup from "./SignupComponent";
import Forget from "./ForgetComponent";
import Forgot from "./ForgotComponent";
import Resetpassword from "./ResetpasswordComponent";
import Verificationsuccess from "./VerificationsuccessComponent";
import Verificationfailure from "./VerificationfailureComponent";
import Signupsuccess from "./SignupsuccessComponent";
import Loginsuccess from "./LoginsuccessComponent";
import GoogleOAuth from "./GoogleOAuth";
import NavigationBar from "./Navigation/Navigation";
import LinkedinOAuth from './LinkedinOAuth';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div id="root">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forget" component={Forget} />
          <Route exact path="/forgot" component={Forgot} />
          <Route exact path="/resetpassword" component={Resetpassword} />
          <Route
            exact
            path="/verificationsuccess"
            component={Verificationsuccess}
          />
          <Route
            exact
            path="/verificationfailure"
            component={Verificationfailure}
          />
          <Route exact path="/signupsuccess" component={Signupsuccess} />
          <Route exact path="/loginsuccess" component={Loginsuccess} />
          <Route exact path="/Dashboard" component={NavigationBar} />
          <Route exact path="/contact" component={Home} />
          <Route exact path="/blog" component={BlogFinal} />
          <Route exact path="/podcast" component={PodcastCall} />
          <Route path="/blog/:id" component={ArticleFinal} />
          <Route path="/verify/:id" component={VerifyComponent} />
          <Route path="/google/oauth" component={GoogleOAuth} />
          <Route path="/linkedin/oauth" component={LinkedinOAuth} />

        </Switch>
      </div>
    );
  }
}

export default Main;
