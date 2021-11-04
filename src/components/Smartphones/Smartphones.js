import questions from "../../jsonFiles/question.json";
import options from "../../jsonFiles/options.json";
import Question from "./Question";
import Option from "./Option";
import { useState } from "react";
import React from "react";
import phoneData from "../../jsonFiles/phoneData.json";
import { FormContainer, Form } from "./styled";
import { useHistory } from "react-router-dom";

function Smartphones() {
  const history = useHistory();
  const count = questions.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const optionComponent = options[current].selections.map((item) => (
    <Option
      key={item}
      commonName={options[current].commonName}
      value={item}
      checked={answers[current] === item ? "checked" : null}
      onChange={(e) => {
        const newAnswers = [...answers];
        newAnswers[current] = e.target.value;
        setAnswers(newAnswers);
      }}
    />
  ));
  console.log(answers);
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
      var newMainFilter = phoneData.filter((goal) => goal.priceRange === "1");
    }
    console.log(newMainFilter);
    history.push({
      pathname: "/result",
      search: `?idPhone1=${newMainFilter[0].id}&idPhone2=${newMainFilter[1].id}`,
      state: {
        newMainFilter: newMainFilter,
      },
    });
  };
  return (
    <FormContainer>
      <Form>
        <Question question={questions[current].question} />
        <div>{optionComponent}</div>
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
      </Form>
    </FormContainer>
  );
}
export default Smartphones;
