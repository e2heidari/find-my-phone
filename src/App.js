import "./App.css";
import questions from "./jsonFiles/question.json";
import Question from "./components/Question";
import { useState } from "react";

function App() {
  const count = questions.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Question
          question={questions[current].question}
          value={answers[current] || ""}
          onChange={(e) => {
            const newAnswers = [...answers];
            newAnswers[current] = e.target.value;
            setAnswers(newAnswers);
          }}
        />

        <div>
          <button
            onClick={() => (current - 1 >= 0 ? setCurrent(current - 1) : null)}
          >
            Previous
          </button>
          Question {current + 1}
          <button
            onClick={() =>
              current + 1 < count ? setCurrent(current + 1) : null
            }
          >
            Next
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
