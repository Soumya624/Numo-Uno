import React, { Component } from "react";

class Land extends Component {
  render() {
    return (
      <div className="ninja-header">
        <a href="/podcast">
          <button className="custom-buttona2">Podcast</button>
        </a>
        <a href="/blog">
          <button className="custom-buttona1">Blog</button>
        </a>
      </div>
    );
  }
}

export default Land;
