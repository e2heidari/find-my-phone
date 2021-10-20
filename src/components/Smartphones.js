import "../App.css";
import questions from "../jsonFiles/question.json";
import options from "../jsonFiles/options.json";
import Question from "./Question";
import Option from "./Option";
import { useState } from "react";
import React from "react";

function Smartphones() {
  const count = questions.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const optionComponent = options[current].selections.map((item) => (
    <Option
      key={options[current].id + item}
      commonName={options[current].commonName}
      option={item}
      onChange={(e) => {
        const newAnswers = [...answers];
        newAnswers[current] = e.target.value;
        setAnswers(newAnswers);
      }}
    />
  ));
  console.log(answers);
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
          {count != current + 1 ? (
            <button
              onClick={() =>
                current + 1 < count ? setCurrent(current + 1) : null
              }
            >
              Next
            </button>
          ) : (
            <button>Submit</button>
          )}
        </div>
      </header>
    </div>
  );
}

export default Smartphones;
