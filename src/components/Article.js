import React, { Component } from "react";

import axios from "axios";
import { BLOG_URL, BLOG_KEY } from "../constants/constants";
import renderHTML from "react-render-html";
import MetaTags from "react-meta-tags";
import "../components/css/articlestyle.css";
import Spinner from "react-bootstrap/Spinner";
class Article extends Component {
  state = {
    title: "",
    content: ``,
    feature_image: "",
  };

  componentDidMount() {
    const postId = window.location.pathname.split("/")[2];
    const URL = BLOG_URL + `/posts/${postId}/?key=${BLOG_KEY}`;
    axios
      .get(URL)
      .then((res) => {
        console.log("res.data ", res.data);
        this.setState({
          title: res.data.posts[0].title,
          content: res.data.posts[0].html.replace(
            /<img src="http:/g,
            '<img src="https:'
          ),
          feature_image: res.data.posts[0].feature_image.replace(
            /http:/g,
            "https:"
          ),
        });
      })
      .catch((err) => {
        console.log("err is ", err);
      });
  }

  render() {
    return (
      <div>
        {this.state.content === "" ? (
          <div id="Spinner">
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" />
            <Spinner animation="grow" variant="info" />
          </div>
        ) : (
          <div>
            <div id="brand_art">
              <a href="/blog">
                <img
                  src={`${process.env.PUBLIC_URL}/images/numologo.jpg`}
                ></img>
              </a>
            </div>
            <div id="content_art">
              <MetaTags>
                <title>Numo Uno-{this.state.title}</title>
                <meta id="id" name="title" content="meta_description" />
              </MetaTags>

              <h1> {this.state.title}</h1>
              <div className="social_art">
                <a href="https://www.facebook.com/numounoindia">
                  <i className="fab fa-facebook fa-3x"></i>
                </a>
                <a href="https://www.linkedin.com/company/numouno/">
                  <i class="fab fa-linkedin fa-3x"></i>
                </a>
                <a href="https://www.instagram.com/numo.uno/">
                  <i class="fab fa-instagram fa-3x"></i>
                </a>
              </div>
              <div id="container-img_art">
                <img src={this.state.feature_image}></img>
              </div>
              <div className="text_art">{renderHTML(this.state.content)}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Article;
