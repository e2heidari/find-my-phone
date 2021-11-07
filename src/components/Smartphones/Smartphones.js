import questions from "../../jsonFiles/question.json";
import options from "../../jsonFiles/options.json";
import Question from "./Question";
import Option from "./Option";
import { useState } from "react";
import React from "react";
import phoneData from "../../jsonFiles/phoneData.json";
import { FormContainer, Form, Image } from "./styled";
import { useHistory } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DoneIcon from "@mui/icons-material/Done";
import smartphonePage from "../../picture of phones/smartphonePage.jpg";
import RadioGroup from "@mui/material/RadioGroup";

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
      <Image src={smartphonePage} />
      <Form>
        Question {current + 1}
        <Question question={questions[current].question} />
        <RadioGroup name="radio-buttons-group">{optionComponent}</RadioGroup>
        <div>
          <Button
            onClick={() => (current - 1 >= 0 ? setCurrent(current - 1) : null)}
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
          >
            Previous
          </Button>
          {count !== current + 1 ? (
            <Button
              onClick={() =>
                current + 1 < count ? setCurrent(current + 1) : null
              }
              variant="outlined"
              endIcon={<ArrowForwardIosIcon />}
            >
              Next
            </Button>
          ) : (
            <Button onClick={choose} variant="outlined" endIcon={<DoneIcon />}>
              Submit
            </Button>
          )}
        </div>
      </Form>
    </FormContainer>
  );
}
export default Smartphones;
