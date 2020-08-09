import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import ReactPlayer from "react-player";
import axios from "axios";
import {
  BLOG_URL,
  BLOG_KEY,
  POD_URL,
  POD_KEY,
  CHANNEL_ID,
  BACKEND_URL,
} from "../constants/constants";
import MetaTags from "react-meta-tags";

class Podcast extends Component {
  state = {
    posts3: [],
    videos: [],
  };

  componentDidMount() {
    axios
      .get(`${BACKEND_URL}/profile/podcast/`)
      .then((res) => {
        console.log("youtub error print", res.data);
      })
      .catch((err) => {
        console.log("err inyoutube ", err);
        console.log("error error ");
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
        this.setState({ videos: res.data.items.slice(0, 3) }, () =>
          console.log("state for videos is ", this.state.videos)
        );
      })
      .catch((err) => {
      if(err.response.status === 404) 
        alert("error in fetch the podcast");
      });
    const URL2 = BLOG_URL + "/posts/?key=" + BLOG_KEY;
    console.log("URL2 IS ", URL2);
    axios
      .get(URL2)
      .then((res) => {
        this.setState({ posts3: res.data.posts.slice(0, 3) }, () =>
          console.log("state for blog is", this.state.posts3)
        );
      })
      .catch((err) => {
        console.log("err in fetch in blog ", err);
        alert("an error in fetch the blog");
        console.log("FRONTEND TEAM SHOW ERROR ");
      });
  }
  render() {
    return (
      <div className="podCast">
        <div className="podHead">
          <div className="ninja-header">
            <a href="/podcast">
              <button href="" id="custom-buttonb2">
                Podcast
              </button>
            </a>
            <a href="/blog">
              <button href="" id="custom-buttonb1">
                Blog
              </button>
            </a>
          </div>
          <a href="/about">
            <div className="podtitle">
              <img src="../images/numologo.jpg"></img>
            </div>
          </a>
          <div id="podTitle">
            <h1>NUMO UNO</h1>
            <h3>PODCAST</h3>
          </div>
        </div>
        <MetaTags>
          <title>Numo Uno-Podcast</title>
          <meta
            name="Numo Uno-Podcast"
            content="We present to you Numo Uno-Podcast. For college students, job-seekers, and the insatiably curious. "
          />
        </MetaTags>

        <div className="first" id="podRow">
          {this.state.videos.map((video) => {
            return (
              <Card id="podCard">
                <ReactPlayer
                  id="podLive"
                  controls
                  url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                />
                <Card.Body id="podText">
                  <Card.Title>
                    <h4>{video.snippet.title}</h4>
                  </Card.Title>
                  <Card.Text>{video.snippet.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>

        {/*<Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              style
              url="https://www.youtube.com/watch?v=yqc9zX04DXs"
            />
            <Card.Body id="podText">
              <Card.Title>
                <h4>
                  The history of our world in 18 minutes | David Christian
                </h4>
              </Card.Title>
              <Card.Text>
                David Christian narrates a complete history of the universe,
                from the Big Bang to the Internet, in a riveting 18 minutes.
                This is "Big History": an enlightening, wide-angle look at
                complexity, life and humanity.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body id="podText">
              <Card.Title>
                <h4>
                  Elon Musk: Tesla Autopilot | Artificial Intelligence (AI)
                  Podcast
                </h4>
              </Card.Title>
              <Card.Text>
                Elon Musk is the CEO of Tesla, SpaceX, Neuralink, and a
                co-founder of several other companies. This is our first
                conversation on the podcast.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck id="podRow">
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body id="podText">
              <Card.Title>
                <h4>
                  Elon Musk: Tesla Autopilot | Artificial Intelligence (AI)
                  Podcast
                </h4>
              </Card.Title>
              <Card.Text>
                Elon Musk is the CEO of Tesla, SpaceX, Neuralink, and a
                co-founder of several other companies. This is our first
                conversation on the podcast.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body id="podText">
              <Card.Title>
                <h4>
                  Elon Musk: Tesla Autopilot | Artificial Intelligence (AI)
                  Podcast
                </h4>
              </Card.Title>
              <Card.Text>
                Elon Musk is the CEO of Tesla, SpaceX, Neuralink, and a
                co-founder of several other companies. This is our first
                conversation on the podcast.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="podCard">
            <ReactPlayer
              id="podLive"
              controls
              url="https://www.youtube.com/watch?v=dEv99vxKjVI"
            />
            <Card.Body id="podText">
              <Card.Title>
                <h4>
                  Elon Musk: Tesla Autopilot | Artificial Intelligence (AI)
                  Podcast
                </h4>
              </Card.Title>
              <Card.Text>
                Elon Musk is the CEO of Tesla, SpaceX, Neuralink, and a
                co-founder of several other companies. This is our first
                conversation on the podcast.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        */}

        <div className="Poppost">
          <h2>Give It A Read</h2>
          <div id="cardPod">
            {this.state.posts3.map((post) => {
              return (
                <div className="popRow">
                  <a href={`/blog/${post.id}`}>
                    <div>
                      <img
                        className="popImg"
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
      </div>
    );
  }
}

export default Podcast;
