import React from "react";
import "./Clickables.css";

const Clickables = props => (
  <div className="characterBox" onClick={() => props.handleClick(props.id)}>
    <img 
          aria-label="click item"
          src={props.image}
          className="characters"
    />
  </div>

);

export default Clickables;
