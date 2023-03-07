import { useState } from "react";

import "./App.css";
import Numpad from "./components/Numpad";
import Screen from "./components/Screen";
import Number from "./components/Number";

const btnValues = [
  ["AC", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, "="],
];

function App() {
  const [calc, setCalc] = useState({
    num: 0,
    res: 0,
    sign: "",
  });

  const handleClick = (e) => {
    if (typeof e === "number") {
      if (calc.num === 0) {
        setCalc({ ...calc, num: e });
      } else {
        setCalc({ ...calc, num: calc.num + "" + e });
      }
    } else if (e === "AC") {
      setCalc({ num: 0, res: 0, sign: "" });
    } else if (e === "=") {
      if (calc.sign === "+") {
        setCalc({ ...calc, res: calc.res + calc.num, sign: "" });
      } else if (calc.sign === "-") {
        setCalc({ ...calc, res: calc.res - calc.num, sign: "" });
      } else if (calc.sign === "X") {
        setCalc({ ...calc, res: calc.res * calc.num, sign: "" });
      } else if (calc.sign === "/") {
        setCalc({
          ...calc,
          res: (calc.res / calc.num).toFixed(2),
          sign: "",
        });
      }
    } else {
      setCalc({ ...calc, res: calc.num, num: 0, sign: e });
    }
  };

  return (
    <div className="App">
      <Screen
        qValue={calc.res ? calc.res + calc.sign : ""}
        ansValue={calc.num}
      />
      <Numpad>
        {btnValues.flat().map((btn, i) => {
          return (
            <Number
              key={i}
              val={btn}
              bgColor={
                typeof btn === "number"
                  ? null
                  : btn === "="
                  ? "#F99417"
                  : "#537FE7"
              }
              onClick={() => handleClick(btn)}
            />
          );
        })}
      </Numpad>
    </div>
  );
}

export default App;
