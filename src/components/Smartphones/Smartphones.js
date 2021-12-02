import questions from "../../jsonFiles/question.json";
import options from "../../jsonFiles/options.json";
import Question from "./Question";
import Option from "./Option";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import {
  PageContainer,
  Form,
  FormWrapper,
  RadioGroupDiv,
  Image,
  ButtonContainer,
} from "./styled";
import { useHistory } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DoneIcon from "@mui/icons-material/Done";
import smartphonePage from "../../pictureOfPhones/smartphonePage.jpg";
import RadioGroup from "@mui/material/RadioGroup";

function Smartphones() {
  const history = useHistory();
  const count = questions.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [phones, setPhones] = useState([]);
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
  // useEffect(() => {
  //   window.localStorage.setItem(current, JSON.stringify(answers[current]));
  //   console.log(current, answers[current]);
  // }, [answers]);
  // () => {
  //   const saved = window.localStorage.getItem("current");
  //   const previousValue = JSON.parse(saved);
  //   return previousValue || "";
  // }
  useEffect(() => {
    const callContentful = async () => {
      const result = await axios.get(
        process.env.REACT_APP_CONTENTFUL_GRAPHQL_URL +
          "?access_token=" +
          process.env.REACT_APP_ACCESS_TOKEN
      );
      console.log(result);
      if (result.status === 200) {
        setPhones(
          result.data.items.map((item) => {
            return {
              id: item.sys.id,
              brandName: item.fields.brandName,
              priceRange: item.fields.priceRange,
              os: item.fields.os,
              cameraDayScore: item.fields.cameraDayScore,
              cameraNightScore: item.fields.cameraNightScore,
              cameraVideoScore: item.fields.cameraVideoScore,
              cameraZoomScore: item.fields.cameraZoomScore,
              cameraSelfieScore: item.fields.cameraSelfieScore,
              batteryScore: item.fields.batteryScore,
              audioPlaybackQualityScore: item.fields.audioPlaybackQualityScore,
              audioRecordingQualityScore:
                item.fields.audioRecordingQualityScore,
              displayScore: item.fields.displayScore,
              performanceScore: item.fields.performanceScore,
              image: result.data.includes.Asset.find(
                (object) => item.fields.image.sys.id === object.sys.id
              ).fields.file.url,
            };
          })
        );
      } else {
        console.log("Error in phones request");
      }
    };
    callContentful();
  }, []);
  const choose = () => {
    if (answers[0] === "High-range") {
      var phoneFiltered = phones.filter(
        (goal) => Number(goal.priceRange) >= 1200
      );
    } else if (answers[0] === "Mid-range") {
      phoneFiltered = phones.filter(
        (goal) =>
          Number(goal.priceRange) < 1200 && Number(goal.priceRange) >= 800
      );
    } else {
      phoneFiltered = phones.filter((goal) => Number(goal.priceRange) < 800);
    }
    if (answers[1] === "Yes") {
      var pointOfPhones1 = phoneFiltered.map((phone) =>
        Number(phone.cameraDayScore)
      );
    } else {
      pointOfPhones1 = phoneFiltered.map((phone, idx) => (phone[idx] = 0));
    }

    if (answers[2] === "Yes") {
      var pointOfPhones2 = phoneFiltered.map((phone) =>
        Number(phone.performanceScore)
      );
    } else {
      pointOfPhones2 = phoneFiltered.map((phone, idx) => (phone[idx] = 0));
    }
    if (answers[3] === "Yes") {
      var pointOfPhones3 = phoneFiltered.map((phone) =>
        Number(phone.audioPlaybackQualityScore)
      );
    } else {
      pointOfPhones3 = phoneFiltered.map((phone, idx) => (phone[idx] = 0));
    }
    if (answers[4] === "Yes") {
      var pointOfPhones4 = phoneFiltered.map((phone) =>
        Number(phone.cameraSelfieScore)
      );
    } else {
      pointOfPhones4 = phoneFiltered.map((phone, idx) => (phone[idx] = 0));
    }
    const finalPointOfPhones = pointOfPhones1.map((pointOfPhone, idx) => {
      return (
        pointOfPhone +
        pointOfPhones2[idx] +
        pointOfPhones3[idx] +
        pointOfPhones4[idx]
      );
    });
    console.log(finalPointOfPhones);
    var largestPointOfPhone = 0;
    for (var i = 0; i < finalPointOfPhones.length; i++) {
      if (finalPointOfPhones[i] >= largestPointOfPhone) {
        largestPointOfPhone = finalPointOfPhones[i];
      }
    }
    var finalChoose =
      phoneFiltered[finalPointOfPhones.indexOf(largestPointOfPhone)];

    history.push({
      pathname: "/result",
      search: `?idPhone=${finalChoose.id}`,
      state: { phones: phones },
    });
  };
  return (
    <PageContainer>
      <Image src={smartphonePage} />
      <FormWrapper>
        <Question question={questions[current].question} />
        <Form>
          <RadioGroupDiv
            style={{
              height: "120px",
            }}
          >
            <RadioGroup name="radio-buttons-group">
              {optionComponent}
            </RadioGroup>
          </RadioGroupDiv>
          <ButtonContainer>
            <Button
              onClick={() =>
                current - 1 >= 0 ? setCurrent(current - 1) : null
              }
              variant="outlined"
              startIcon={<ArrowBackIosIcon />}
              style={{
                minWidth: "120px",
                margin: "10px",
              }}
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
                style={{
                  minWidth: "120px",
                  margin: "10px",
                }}
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={choose}
                variant="outlined"
                endIcon={<DoneIcon />}
                style={{
                  minWidth: "120px",
                  margin: "10px",
                }}
              >
                Submit
              </Button>
            )}
          </ButtonContainer>
        </Form>
      </FormWrapper>
    </PageContainer>
  );
}
export default Smartphones;
