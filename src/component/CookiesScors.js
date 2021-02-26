import React from "react";
import "../index.css";
// import imgPizza from "../img/pizza.png";
// import imgCoin from "../img/coin-pizza.png";

const TitrePizza = { textAlign: "center", fontSize: "80px" };
const ImgPizzaStyle = { textAlign: "center", marginBottom: "1vh" };
const PScore = { textAlign: "center", marginTop: "1vh" };

export const CookiesScors = (props) => {
  const { score, setScore, valueClick } = props;

  return (
    <div>
      <h1 style={TitrePizza}> Pizza clicker </h1>

      <p style={PScore}>
        {" "}
        {/* <img className="imgCoin" src={imgCoin} width="20" height="20" /> Pizza */}
        Coin: {score}
      </p>

      <img
        style={ImgPizzaStyle}
        // src={imgPizza}
        width="420"
        height="320"
        className="cookie-btn"
        onClick={() => {
          setScore(score + valueClick);
        }}
      />
    </div>
  );
};
