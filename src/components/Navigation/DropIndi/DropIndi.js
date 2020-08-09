import React from "react";
import classes from "./DropIndi.module.css";
import PointArrow from "../ImageAsset/pointarrow.svg";

const dropIndi = (props) => {
  return (
    <li>
      <div className={classes.textLink}>{props.name}</div>
      <div className={classes.arrowImage}>
        <img src={PointArrow} alt="&#8900;"></img>
      </div>
    </li>
  );
};

export default dropIndi;
