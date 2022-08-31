import React from "react";
import { useState } from "react";
import styles from "../app.scss";
const Rating = (props) => {

  return (
    <div className="container">
      <div className="container-icon-star">
        <div className="container-icon-star-image"></div>
      </div>
      <div className="container-heading">How did we do?</div>
      <div className="container-paragraph">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>
      <ul className="container-ratings">
        <li
          className="container-ratings-1"
          style={
            props.selected == 2
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
        >
          <a>1</a>
        </li>
        <li
          className="container-ratings-2"
          style={
            props.selected == 2
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
        >
          {/* <a onClick={() => props.num(2)}>2</a> */}
        </li>
        <li
          className="container-ratings-3"
          style={
            props.selected == 3
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
        >
          {/* <a onClick={() => props.num(3)}>3</a> */}
        </li>
        <li
          className="container-ratings-4"
          style={
            props.selected == 4
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
        >
          {/* <a onClick={() =>  props.num(4)}>4</a> */}
        </li>
        <li
          className="container-ratings-5"
          style={
            props.selected == 5
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
        >
          {/* <a onClick={() =>  props.num(5)}>5</a> */}
        </li>
      </ul>

      <a className="buttona" href="/thankyou">
        Click Me
      </a>
    </div>
  );
};

export default Rating;
