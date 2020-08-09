import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardDeck,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import {
  BLOG_URL,
  BLOG_KEY,
  POD_URL,
  POD_KEY,
  CHANNEL_ID,
} from "../constants/constants";
import MetaTags from "react-meta-tags";
class Blog extends Component {
  state = {
    posts: [],
    posts3: [],
    videos: [],
  };
  constructor(props) {
    super(props);

    this.scrollTop = this.scrollTop.bind(this);
  }
  scrollTop() {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 1000);
  }
  componentDidMount() {
    const URL = BLOG_URL + "/posts/?key=" + BLOG_KEY;
    console.log("URL IS ", URL);
    axios
      .get(URL)
      .then((res) => {
        console.log("res.data is ", res.data);
        this.setState({ posts: res.data.posts.slice(0, 1) }, () =>
          console.log("state is ", this.state.posts)
        );
      })
      .catch((err) => {
        console.log("err in fetch in blog ", err);
        alert("error in fetch the blog");
        console.log("FRONTEND TEAM SHOW ERROR ");
      });
    const URL1 =
      POD_URL +
      POD_KEY +
      "&channelId=" +
      CHANNEL_ID +
      "&part=snippet,id&order=date&maxResults=20";
    console.log("URL1 IS ", URL1);

    axios
      .get(URL1)
      .then((res) => {
        console.log(res.data);
        this.setState({ videos: res.data.items.slice(0, 2) }, () =>
          console.log("state for videos is ", this.state.videos)
        );
      })
      .catch((err) => {
        if (err.response.status === 404)
          alert(
            "error in fetch the podcast ",
            err.response.status,
            err.response.status
          );
      });
    const URL2 = BLOG_URL + "/posts/?key=" + BLOG_KEY;
    console.log("URL2 IS ", URL2);
    axios
      .get(URL2)
      .then((res) => {
        this.setState({ posts3: res.data.posts.slice(1, 3) }, () =>
          console.log("state for blog is", this.state.posts3)
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
      <div className="container">
        <div id="row1" className="row">
          <div className="col-12">
            <div>
              <h3 className="center-heading">Give it a read & Watch</h3>
            </div>
          </div>
        </div>
        {/* This is the first row */}
        <div className="row" style={{ marginTop: "15px" }}>
          <div
            className="col-12 col-md-7"
            style={{
              borderRadius: "10px",
              marginRight: "auto",
              padding: "0px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.048), 0 6px 20px 0 rgba(0, 0, 0, 0.062)",
            }}
          >
            <div>
              {this.state.videos.slice(0, 1).map((video) => {
                return (
                  <Card
                    style={{
                      border: "0px solid white",
                      borderRadius: "10px",
                    }}
                  >
                    <ReactPlayer
                      width="100%"
                      style={{
                        borderRadius: "10px",
                        padding: "1%",
                        backgroundColor: "black",
                      }}
                      controls
                      url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    />
                    <CardBody id="podText">
                      <CardTitle>
                        <h4>{video.snippet.title}</h4>
                      </CardTitle>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
            {/* <img
              id="blog-main"
              width="100%"
              src={`${process.env.PUBLIC_URL}/images/img_lake.png`}
              alt="notfound"
              style={{
                boxShadow: "-1px 3px 20px rgba(0,0,0,.16)",
                padding: "0px",
                margin: "20px 0px",
                borderRadius: "10px",
              }}
            />
            <div style={{ position: "absolute", bottom: "10px", left: "50px" }}>
              <div id="blog-main">
                Must see places
                <br /> for summer
              </div>
              <div>
                <p id="img-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet
                  ligula, ac elementum risus. Aliquam volutpat ex eget elit
                  venenatis, vel luctus arcu pulvinar.{" "}
                </p>
              </div>
            </div> */}
          </div>

          {this.state.posts.map((post) => {
            return (
              <div className="col-12 col-md-4 " id="shadowa">
                <Card style={{ border: "0px solid white", marginTop: "50px" }}>
                  <a href={`/blog/${post.id}`}>
                    <CardImg
                      id="headStyle"
                      variant="top"
                      src={post.feature_image}
                    />
                    <CardBody>
                      <CardTitle id="headTitle">
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                      </CardTitle>
                      <CardText>{post.custom_excerpt}</CardText>
                    </CardBody>
                  </a>
                </Card>
              </div>
            );
          })}

          {/* <div
              style={{
                boxShadow: "-1px 3px 10px rgba(0,0,0,.16)",
                padding: "0px",
                margin: "20px 0px",
                borderRadius: "10px",
              }}
            >
              <img
                width="100%"
                src={`${process.env.PUBLIC_URL}/images/side_blog.png`}
                alt="notfound"
              />
              <p id="travel">TRAVEL</p>
              <p id="side">Surfing in Maldives</p>
              <p id="blog-text">
                It’s windy. The cool breeze of the ocean. It gives, a sense of
                beauty, in motion. All is flowing, rushing and tide-And I sit in
                wonder
              </p>
            </div> */}
        </div>
        {/* This is the second row */}
        <div className="row" style={{ marginTop: "30px" }}>
          <div
            className="col-12 col-md-7"
            style={{
              boxShadow: "-1px 3px 20px rgba(0,0,0,.16)",
              borderRadius: "10px",
            }}
          >
            <div id="cardPod">
              {this.state.posts3.map((post) => {
                return (
                  <div className="popRowS">
                    <a href={`/blog/${post.id}`}>
                      <div>
                        <img
                          className="popImg"
                          style={{ marginTop: "1vw" }}
                          src={post.feature_image}
                          alt="blog not found"
                        ></img>
                      </div>
                      <div className="popText">
                        <p>
                          <h3>
                            <a href={`/blog/${post.id}`}>{post.title}</a>
                          </h3>
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <div
            className="col-12 col-md-7"
            style={{
              boxShadow: "-1px 3px 20px rgba(0,0,0,.16)",
              padding: "10px",
              marginRight: "auto",
              marginBottom:" 20px",
              borderRadius: "10px",
              display: "inherit",
            }}
          >
            <img
              width="20%"
              src={`${process.env.PUBLIC_URL}/images/bll.png`}
              alt="notfound"
              style={{ margin: " auto 1.0vw", width: "10vw", height: "10vw" }}
            />
            <div
              
              id="blog-bottom-left"
              style={{
                fontSize: "1vw",
                margin: "auto 0px"
              }}
            >
              {" "}
              FOOD & LIFESTYLE
              <p id="blog-text" style={{ margin: "1vw 0vw", lineHeight: ".95" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>{" "}

            <img
              width="20%"
              src={`${process.env.PUBLIC_URL}/images/blr.png`}
              alt="notfound"
              style={{ margin: " auto 1.0vw", width: "10vw", height: "10vw" }}
            />
            <div
              id="blog-bottom-left"
              style={{
                fontSize: "1vw",
                margin: "auto 0px"
                
              }}
            >
              {" "}
              <div style={{color: "rgb(231, 0, 193)"}}>
              FOOD & LIFESTYLE
              </div>
              <p id="blog-text" style={{ margin: "1vw 0vw", lineHeight: ".9" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div> */}
          <div
            className="col-12 col-md-4 ml-auto"
            style={{
              boxShadow: "-1px 3px 20px rgba(0,0,0,.16)",
              padding: "0px",
              margin: "0px",
              borderRadius: "10px",
            }}
          >
            {this.state.videos.slice(1, 2).map((video) => {
              return (
                <Card
                  style={{
                    border: "0px solid white",
                    borderRadius: "10px",
                  }}
                >
                  <ReactPlayer
                    id="podLive"
                    width="100%"
                    height="100%"
                    controls
                    url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  />
                  {/* <CardBody id="podText">
                      <CardTitle>
                        <h4>{video.snippet.title}</h4>
                      </CardTitle>
                    </CardBody> */}
                </Card>
              );
            })}

            {/* <img
              width="100%"
              height="100%"
              src={`${process.env.PUBLIC_URL}/images/blrr.png`}
              alt="notfound"
              style={{boxShadow: "-1px 3px 20px rgba(0,0,0,.16)"}}
            />
            <p style={{
              position:"absolute",
              bottom: "10px",
              padding:"10px",
              color:"white",
              fontSize:"1vw",
            }}>
              This is lake on the side of a river with blue water
            </p> */}
          </div>
          <div className="mx-auto" style={{ marginTop: "20px" }}>
            <NavLink to="/blog" onClick={this.scrollTop}>
              <button className="custom-button-blog-podcast" type="submit">
                Blog
              </button>
            </NavLink>

            <NavLink to="/podcast" onClick={this.scrollTop}>
              <button className="custom-button-blog-podcast" type="submit">
                {" "}
                Podcasts
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
