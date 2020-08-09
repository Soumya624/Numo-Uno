import React from "react";
import "../components/css/articlestyle.css";
import Article from "./Article";
import SubscribeComponent from "./SubscribeComponent";
import FooterComponent from "./FooterComponent";

function ArticleFinal() {
  return (
    <div className="App">
      <Article />
      <SubscribeComponent />
      <FooterComponent />
    </div>
  );
}

export default ArticleFinal;
