import "./dialer.css";
const Dialer = () => {
  return (
    <div className="dialer">
      <h3 type="number" className="display">
      </h3>
      <span className="expression"></span>

      <section className="panel">
        <section className="numbers">
          <button onClick={() =>(1)}>1</button>
          <button onClick={() => (2)}>2</button>
          <button onClick={() => (3)}>3</button>

          <button onClick={() => (4)}>4</button>
          <button onClick={() => (5)}>5</button>
          <button onClick={() => (6)}>6</button>

          <button onClick={() => (7)}>7</button>
          <button onClick={() => (8)}>8</button>
          <button onClick={() => (9)}>9</button>
          <button onClick={() => ("*")}>*</button>
          <button onClick={() => (0)}>0</button>
          <button onClick={() => ("#")}>#</button>
        </section>
        </section>
    </div>
  );
};
export default Dialer;
