import React from "react";
import "./thankyou.scss";
const Thankyou = () => {
  return (
    <div className="container-thank-you">
      <div className="icon"></div>
      <div className="selected">You Selected 4 out of 5</div>
      <div className="thankyou">Thank you!</div>
      <div className="paragraphthanks">
        We appreciate you taking the time to give a rating. If you ever need
        more support. don't hesitiate to get in touch
      </div>
    </div>
  );
};

export default Thankyou;
