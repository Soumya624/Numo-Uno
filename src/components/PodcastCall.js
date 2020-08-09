import React from "react";
import "../components/css/podcast.css";
import Podcast from "./Podcast";
import SubscribeComponent from "./SubscribeComponent";
import FooterComponent from "./FooterComponent";

function PodcastFinal() {
  return (
    <div className="App">
      <Podcast />
      <SubscribeComponent />
      <FooterComponent />
    </div>
  );
}

export default PodcastFinal;
