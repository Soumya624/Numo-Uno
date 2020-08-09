import React from "react";
import "../components/css/blog.css";
import Land from "./Land";
import Navigate from "./Navigate";
import HeadCards from "./HeadCards";

import SubscribeComponent from "./SubscribeComponent";
import FooterComponent from "./FooterComponent";

import BlogPage from "./Blog";

function BlogFinal() {
  return (
    <div className="App">
      <Land />
      <div className="responsive">
        <a href="/">
          <img
            className="title"
            src={`${process.env.PUBLIC_URL}/images/numologo.jpg`}
            alt="black logo"
          ></img>
        </a>
        <div id="blog-title">
          <h1>NUMO UNO</h1>

          <h3>BLOG</h3>
        </div>
        <Navigate />
      </div>
      <HeadCards />
      <BlogPage />
      <SubscribeComponent />
      <FooterComponent />
    </div>
  );
}

export default BlogFinal;
