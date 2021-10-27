import "../App.css";
import questions from "../jsonFiles/question.json";
import options from "../jsonFiles/options.json";
import Question from "./Question";
import Option from "./Option";
import { useState } from "react";
import React from "react";
import phoneData from "../jsonFiles/phoneData.json";

function Smartphones() {
  const count = questions.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState([]);
  const [checked, setChecked] = useState(false);
  const optionComponent = options[current].selections.map((item) => (
    <Option
      key={options[current].id + item}
      commonName={options[current].commonName}
      option={item}
      checked={checked}
      onChange={(e) => {
        setChecked(true);
        const newAnswers = [...answers];
        if (checked === false) {
          newAnswers[current] = e.target.value;
        } else {
          e.target.value = newAnswers[current];
        }
        setAnswers(newAnswers);
      }}
    />
  ));
  // useEffect(() => {
  //   window.localStorage.setItem(current, JSON.stringify(answers[current]));
  //   console.log(current, answers[current]);
  // }, [answers]);
  // () => {
  //   const saved = window.localStorage.getItem("current");
  //   const previousValue = JSON.parse(saved);
  //   return previousValue || "";
  // }
  const choose = () => {
    if (answers[0] === "High-range") {
      const newMainFilter = phoneData.filter((goal) => goal.priceRange === "1");
      setResult(newMainFilter);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Question question={questions[current].question} />
        <form>{optionComponent}</form>
        <div>
          <button
            onClick={() => (current - 1 >= 0 ? setCurrent(current - 1) : null)}
          >
            Previous
          </button>
          Question {current + 1}
          {count !== current + 1 ? (
            <button
              onClick={() =>
                current + 1 < count ? setCurrent(current + 1) : null
              }
            >
              Next
            </button>
          ) : (
            <button onClick={choose}>Submit</button>
          )}
        </div>
      </header>
    </div>
  );
}
export default Smartphones;
