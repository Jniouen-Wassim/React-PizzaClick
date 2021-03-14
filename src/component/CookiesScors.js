import React from "react";
import "../index.css";
 import imgPizza from "../img/pizza.png";//https://urlz.fr/f0SR
 import imgCoin from "../img/coin-pizza.png";//https://urlz.fr/f0S6

const TitrePizza = { textAlign: "center", fontSize: "80px" };
const ImgPizzaStyle = { textAlign: "center", marginBottom: "1vh" };
const PScore = { textAlign: "center", marginTop: "1vh" };

export const CookiesScors = (props) => {
  const { score, setScore, valueClick } = props;

  return (
    <div>
      <h1 style={TitrePizza}> Pizza clicker </h1>

      <p style={PScore}>
        <img className="imgCoin" src={imgCoin} width="20" height="20" alt="img"/> Pizza 
        Coin: {score}
      </p>

      <img  style={ImgPizzaStyle} src={imgPizza} width="420" height="320" className="imgPizza" alt="img"
        onClick={() => {
          setScore(score + valueClick);
        }}
      />
    </div>
  );
};
