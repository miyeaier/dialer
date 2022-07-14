import React, { useState } from "react";
import "./dialer.css";
const Dialer = () => {
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);
  const handleClick = (value) => {
    setDisplay(value);
    setExpression([...expression, value]);
  };
  const handleResult = () => {
    const result = expression
      .filter(Number)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    setDisplay(result);
    setExpression("");
  };

  return (
    <div className="dialer">
      <h3 type="number" className="display">
        {display}
      </h3>
      <span className="expression">{expression}</span>

      <section className="panel">
        <section className="numbers">
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>

          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>

          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick(0)}>0</button>
          <button onClick={() => handleClick("#")}>#</button>
        </section>
        <section className="operators">
          <button onClick={() => handleResult()}>Sum</button>
        </section>
      </section>
    </div>
  );
};
export default Dialer;
