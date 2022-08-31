import React from "react";
import { useState, useEffect } from "react";
import styles from "./app.scss";
import { Route, Routes } from "react-router-dom";
import Rating from "./Pages/Rating";
import Thankyou from "./Pages/Thankyou";

const App = () => {
  const [number, numberSelected] = useState(0);
  const [count, setCount] = useState(0);



  useEffect(() => {
    if (count > 1) {
      console.log('Threshold of over 1 reached.');
    } else {
      console.log('No threshold reached.');
    }
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };

  // console.log("The number selected is " + number);

  function changeSelectedNumber(numberstate) {
    // numberSelected();
    console.log();
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Rating
              onClick={handleClick}
              number={[1, 2, 3, 4, 5]}
            />
          }
        />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </>
  );
};

export default App;
