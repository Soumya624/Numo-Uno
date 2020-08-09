import React from "react";
import classes from "./UserDrop.module.css";

const userDrop = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.item}>Dashboard</div>
      <div className={classes.item}>Settings</div>
      <div className={classes.item}>Log Out</div>
    </div>
  );
};

export default userDrop;
