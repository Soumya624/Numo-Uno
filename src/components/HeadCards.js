import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { BLOG_URL, BLOG_KEY } from "../constants/constants";
import renderHTML from "react-render-html";

class HeadCards extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const URL = BLOG_URL + "/posts/?key=" + BLOG_KEY;
    console.log("URL IS ", URL);
    axios
      .get(URL)
      .then((res) => {
        console.log("res.data is ", res.data);
        this.setState({ posts: res.data.posts.slice(0, 4) }, () =>
          console.log("state is ", this.state.posts)
        );
      })
      .catch((err) => {
        console.log("err in fetch in blog ", err);
        alert("error in fetch the blog");
        console.log("FRONTEND TEAM SHOW ERROR ");
      });
  }

  render() {
    return (
      <div className="headCard">
        <CardDeck id="post_row">
          {this.state.posts.map((post) => {
            return (
              <Card id="shadowa">
                <a href={`/blog/${post.id}`}>
                  <Card.Img
                    id="headStyle"
                    variant="top"
                    src={post.feature_image}
                  />
                  <Card.Body>
                    <Card.Title id="headTitle">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </Card.Title>
                    <Card.Text>{post.custom_excerpt}</Card.Text>
                  </Card.Body>
                </a>
              </Card>
            );
          })}
        </CardDeck>
        {/* <CardDeck id="post_row">
          {this.state.posts1.map((post) => {
            return (
              <Card id="shadowa">
                <a href={`/blog/${post.id}`}>
                  <Card.Img
                    id="headStyle"
                    variant="top"
                    src={post.feature_image}
                  />
                  <Card.Body>
                    <Card.Title id="headTitle">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </Card.Title>
                    <Card.Text>{post.custom_excerpt}</Card.Text>
                  </Card.Body>
                </a>
              </Card>
            );
          })}
        </CardDeck>*/}
      </div>
    );
  }
}

export default HeadCards;
