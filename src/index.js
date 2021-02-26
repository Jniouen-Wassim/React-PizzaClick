import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

import { BonusCookies } from "./component/BonusCookies";
import { useInterval } from "react-use-timeout";
import { CookiesScors } from "./component/CookiesScors";

const App = (props) => {
  const [score, setScore] = useState(0);
  const [valueClick, setValueClick] = useState(1);
  const [valueAutoClick, setValueAutoClick] = useState(0);
  const [isValueAutoClick, setIsValueAutoClick] = useState(false);
  const [priceValueClick, setPriceValueClick] = useState(10);
  const [priceAutoClick, setPriceAutoClick] = useState(50);

  const [valueLoloClick, setValueLoloClick] = useState(0);
  const [isValueLoloClick, setIsValueLoloClick] = useState(false);
  const [priceLoloClick, setPriceLoloClick] = useState(250);

  /*-------------------------------------------( function par Coin/sec )---------------------------------------------------*/
  const autoClickSec = useCallback(() => {
    console.log("autoClickSec");

    setScore(score + valueAutoClick);
  }, [score, valueAutoClick]);

  const LoloClickSec = useCallback(() => {
    console.log("LoloClickSec");

    setScore(score + valueLoloClick);
  }, [score, valueLoloClick]);

  const timeout = useInterval(autoClickSec, 1000);
  const loloTimeout = useInterval(LoloClickSec, 1000);
  

  if (isValueAutoClick) {
    timeout.start();
  }

  if (isValueLoloClick) {
    loloTimeout.start();
  }

  /*-------------------------------------------( function )---------------------------------------------------*/
  return (
    <div>
      {/*-----------------------( function CookiesScors )--------------------------*/}
      <CookiesScors
        score={score}
        setScore={(score) => {
          setScore(score);
        }}
        valueClick={valueClick}
      />{" "}
      {/*-----------------------( function BonusCookies )--------------------------*/}
      <BonusCookies
        valueClick={valueClick}
        setValueClick={(valueClick) => {
          setValueClick(valueClick);
        }}
        valueAutoClick={valueAutoClick}
        setValueAutoClick={(valueAutoClick) => {
          setValueAutoClick(valueAutoClick);
        }}
        isValueAutoClick={isValueAutoClick}
        setIsValueAutoClick={() => {
          setIsValueAutoClick(true);
        }}

        valueLoloClick={valueLoloClick}
        setValueLoloClick={(valueLoloClick) => {
          setValueLoloClick(valueLoloClick);
        }}

        isValueLoloClick={isValueLoloClick}
        setIsValueLoloClick={() => {
          setIsValueLoloClick(true);
        }}

        priceValueClick={priceValueClick}
        priceAutoClick={priceAutoClick}
        priceLoloClick={priceLoloClick}
        score={score}
        setScore={(param) => {
          setScore(param);
        }}
        /*-----------------------( function Price )--------------------------*/

        setPriceValueClick={(newPrice) => {
          setPriceValueClick(newPrice);
        }}
        setPriceAutoClick={(newPrice) => {
          setPriceAutoClick(newPrice);
        }}
        setPriceLoloClick={(newPrice)=>{
          setPriceLoloClick(newPrice)
        }}
      />{" "}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("App"));
