import React from "react";
import { useState, useEffect } from "react";
import styles from "./app.scss";
import { Route, Routes } from "react-router-dom";
import Rating from "./Pages/Rating";
import Thankyou from "./Pages/Thankyou";

const App = () => {
  const [number, numberSelected] = useState(0);

  // console.log("The number selected is " + number);

useEffect(()=>{


}[number])


   function changeSelectedNumber(numberstate) {
     numberSelected(numberstate );
  
  }
   console.log(number);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Rating onClick={changeSelectedNumber} number={[1, 2, 3, 4, 5]} />
          }
        />
        <Route path="/thankyou" element={<Thankyou  number={number} />} />
      </Routes>
    </>
  );
};

export default App;
