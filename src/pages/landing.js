import React, { useState } from "react";
import Snowfall from "react-snowfall";

import "../styles/color.css";
import "../styles/layout.css";
import "../styles/typography.css";
import "../styles/animation.css";
import Yalelogo from "../assets/yalelogo.svg";
import Cat from "../assets/cat.gif";
import PaperCard from "../components/papercard";
import { useSelector, useDispatch } from "react-redux";
import { SET_VAL } from "../redux/masterReducer";

const Landing = (props) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.inputReducer.email);

  const [errorMessage, setErrorMessage] = useState(null);

  const validate = (e) => {
    if (email.length === 0) {
      setErrorMessage("Email can't be empty!");
    } else if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address!");
    } else {
      props.history.push("/write");
    }
  };

  return (
    <>
      <Snowfall snowflakeCount={100} />
      <PaperCard>
        <div className="horizontalInbetween">
          <div className="h1 textMain">Dear Yalies ...</div>
          <img
            src={Yalelogo}
            style={{ transform: "rotate(20deg)", width: "30px" }}
          />
        </div>
        <br />
        <div className="body textMain italic">We all miss our friends ...</div>
        <br />
        <div className="body textMain">
          That’s why 3 Yalies built this website, an easy way to send a virtual
          holiday card to the people you miss the most, with stickers and a
          voice message. Happy holidays everyone :){" "}
        </div>
        <br />
        <br />
        <input
          className="inputMain"
          placeholder="Enter recipient's email"
          type="email"
          value={email}
          onChange={(e) => dispatch(SET_VAL("email", e.target.value))}
        />
        <br />
        <button className="buttonMain buttonPrimary" onClick={validate}>
          Continue →
        </button>
        {errorMessage ? (
          <div className="body textMain italic">{errorMessage}</div>
        ) : null}
      </PaperCard>
    </>
  );
};

export default Landing;
