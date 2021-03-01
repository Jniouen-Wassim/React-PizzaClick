import React from "react";

 import imgCoin from "../img/coin-pizza.png";//https://urlz.fr/f0S6
 import imgYolo from "../img/yolo-pizza.png";//https://urlz.fr/f0RV
 import imgClick from "../img/click-pizza.png";//https://urlz.fr/f0S0
 import imgExplosion from "../img/explosion.png";//https://urlz.fr/f0SD

export const BonusCookies = (props) => {
  const {
    valueClick,
    valueAutoClick,
    priceValueClick,
    priceAutoClick,
    valueLoloClick,
    priceLoloClick,
    score,
    setScore, 
    setValueClick,
    setValueAutoClick,
    setIsValueAutoClick,
    setPriceValueClick,
    setPriceAutoClick,
    setIsValueLoloClick,
    setValueLoloClick,
    setPriceLoloClick,
  } = props;

  /*----------------------( function addBonusClick )--------------------------*/
  function addBonusClick() {
    setValueClick(valueClick + 1);
    setScore(score - priceValueClick);
    setPriceValueClick(priceValueClick * 2);
  }
  
  /*----------------------( function setAutoClick )--------------------------*/
  function setAutoClick() {
    if (valueAutoClick === 0) {
      setIsValueAutoClick();
    }
    setValueAutoClick(valueAutoClick + 1);
    setScore(score - priceAutoClick);
    setPriceAutoClick(priceAutoClick * 2);
  }

  /*----------------------( function setPriceLoloClick )--------------------------*/
  function setLoloClick() {
    if (valueLoloClick === 0) {
      setIsValueLoloClick();
    }
    setValueLoloClick(valueLoloClick + 1);
    setScore(score - priceLoloClick);
    setPriceLoloClick(priceLoloClick * 2);
  }

  /*-----------------------------------( Btn 1: btnValueClick )-------------------------------------------*/
  const btnValueClick =
    score >= priceValueClick ? (
      <button
        onClick={() => {
          addBonusClick();
        }}
      >
        <h3>Double Pizza Click</h3>
        <img src={imgClick} width="100" height="100" alt="img"/>
        <h4>
           <img className="imgCoin" src={imgCoin} width="20" height="20" alt="img"/>
          Price: {priceValueClick} pizza coin
        </h4>
      </button>
    ) : (
      <button disabled style={{ background: "transparent", opacity: "0.4" }}>
        <h3>Double Pizza Click</h3>
         <img src={imgClick} width="100" height="100" alt="img"/>
        <h4>
           <img className="imgCoin" src={imgCoin} width="20" height="20" alt="img" />
          Price: {priceValueClick} pizza coin
        </h4>
      </button>
    );

  /*-----------------------------------( Btn 2: btnAutoClick )-------------------------------------------*/
  const btnAutoClick =
    score >= priceAutoClick ? (
      <button
        onClick={() => {
          setAutoClick();
        }}
      >
        <h3>Auto Pizza Click</h3>
         <img src={imgYolo} width="100" height="100" alt="img"/>
        <h4>
           <img className="imgCoin" src={imgCoin} width="20" height="20" alt="img"/>
          Price: {priceAutoClick} pizza coin
        </h4>
      </button>
    ) : (
      <button disabled style={{ background: "transparent", opacity: "0.4" }}>
        <h3>Auto Pizza Click </h3>
         <img src={imgYolo} width="100" height="100" alt="img"/>
        <h4>
           <img className="imgCoin" src={imgCoin} width="20" height="20" alt="img"/>
          Price: {priceAutoClick} pizza coin
        </h4>
      </button>
    );

  /*-----------------------------------( Btn 3: btnLoloClick)-------------------------------------------*/
  const btnLoloClick= score>= priceLoloClick ?  (<button
    onClick={() => {
      setLoloClick();
    }}
  >
    <h3>Explosion Pizza Click</h3>
     <img src={imgExplosion} width="100" height="100" alt="img"/>
     <h4> <img className="imgCoin" src={imgCoin} width="20" height="20" alt="img"/>Price: {priceLoloClick} pizza coin</h4> 
  </button>) : (<button disabled style={{background: 'transparent', opacity: '0.4'}}>
    <h3>Explosion Pizza Click </h3>
     <img src={imgExplosion} width="100" height="100" alt="img"/>
     <h4> <img className="imgCoin" src={imgCoin} width="20" height="20" alt="img"/>Price: {priceLoloClick} pizza coin</h4> 
  </button>)

  return (
    <>
      {btnValueClick}
      {btnAutoClick}
      {score>=100 && btnLoloClick}
    </>
  );
};
