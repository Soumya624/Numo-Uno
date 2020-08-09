import React, { Component } from "react";

import "./components/css/demo.css";
import "./components/css/reset.css";
import "./components/css/style.css";
import "./App.css";
import "./components/css/blog.css";
import "./components/css/articlestyle.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";

class App extends Component {
  
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
