import React from "react";
import classes from "./Heading.module.css";

const Heading = (props) => {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <div className={classes.line}></div>
    </React.Fragment>
  );
};

export default Heading;
