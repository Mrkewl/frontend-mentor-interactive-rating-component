import React from "react";
import { useState } from "react";
import styles from "../app.scss";
const Rating = (props) => {

function clickHandler(e){
e.preventDefault();
window.history.replaceState(null, "New Page Title", "/pathname/goes/here")

}

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
          onClick={()=>props.onClick(1)}
          style={
            props.selected == 2
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
        >
          <a>{props.number[0]}</a>
        </li>
        <li
          className="container-ratings-2"
          onClick={()=>props.onClick(2)}
          style={
            
            props.selected == 2
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
        >
          <a>{props.number[1]}</a>
        </li>
        <li
          className="container-ratings-3"
          onClick={()=>props.onClick(3)}
          style={
            props.selected == 3
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
        >
          {props.number[2]}
        </li>
        <li
          className="container-ratings-4"
          onClick={()=>props.onClick(4)}
          style={
            props.selected == 4
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
        >
          <a>{props.number[3]}</a>
        </li>
        <li
          className="container-ratings-5"
          onClick={()=>props.onClick(5)}
          style={
            props.selected == 5
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
        >
          <a>{props.number[4]}</a>
        </li>
      </ul>

      <a className="buttona" href="/thankyou" onClick= {clickHandler}>
       Click ME
      </a>
    </div>
  );
};

export default Rating;
