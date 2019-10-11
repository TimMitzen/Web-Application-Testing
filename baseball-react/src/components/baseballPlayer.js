import React, { useState } from "react";

const BaseBall = () => {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);
  const [out, setOut] = useState(0);
  const [foul, setFoul] = useState(0);
  const [score, setScore] = useState(0);
  const strikes = () => {
    setStrike(strike + 1);
    strike === 2 &&
      setStrike(
        0,
        alert("your out"),
        setOut(out + 1),
        out === 2 && setOut(0, alert("next team up"), reset()),
        out === 2 && setScore(0)
      );
  };
  const balls = () => {
    setBall(ball + 1);
    ball === 3 &&
      setBall(0,  setHit(hit + 1), setStrike(0));
      hit === 3 && ball === 3 && setScore(score + 1, setHit(0));  
      // hit === 3 && ball === 3 ; 
      // hit === 3 && setScore(score + 1)
  };
  const hits = () => {
    setHit(hit + 1);
    hit === 3 && setScore(score + 1, alert("1 Run scored"), setHit(0));
    out === 3 && setOut(0, alert("Next team up"));
    hit === 0 && resetStrikeBalls();
  };

  const fouls = () => {
    setFoul(foul + 1);
    foul === 2 && setStrike(2);
    foul > 2 && setStrike(2);
  };

  const reset = () => {
    setStrike(0);
    setBall(0);
    setScore(0);
    setOut(0);
    setHit(0);
  };

  const resetStrikeBalls = () => {
    setStrike(0);
    setBall(0);
  };

  return (
    <div className="batter">
      <p className="strikes">Strikes {strike}</p>
      <button className="strikeButton" onClick={strikes}>
        Strike
      </button>
      <p className="balls">Balls {ball}</p>
      <button className="ballButton" onClick={balls}>
        Ball
      </button>
      <p className="hits">Hits {hit}</p>
      <button className="hitButton" onClick={hits}>
        Hit
      </button>

      <p className="outs"> Outs {out}</p>
      <button className="foul" onClick={fouls}>
        Foul{" "}
      </button>
      <p className="Score">Score {score}</p>
      <button className="reset" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default BaseBall;
