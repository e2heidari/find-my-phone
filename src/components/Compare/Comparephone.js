import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  OutcomeContainer,
  Title,
  FeatureContainer,
  Image,
  Circle,
  Value,
  TypeOfValue,
} from "./styled";
import { useHistory } from "react-router-dom";

const ComparePhone = ({ phones, result1 }) => {
  const history = useHistory();
  const phonesName = phones.map((phone) => phone.brandName);
  const [value, setValue] = useState("");
  const selectPhone = (e) => {
    const phoneSlected = e.currentTarget.innerText;
    var finalChoose2 = phones.filter(
      (phone) => phone.brandName === phoneSlected
    );
    console.log(finalChoose2);
    history.push({
      pathname: "/compare",
      search: `?idPhone=${result1}&idphone2=${finalChoose2[0].id}`,
    });
  };
  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onInputChange={selectPhone}
        disablePortal
        id="combo-box-demo"
        options={phonesName}
        sx={{ width: 300 }}
        color="white"
        renderInput={(params) => <TextField {...params} label="Phone" />}
      />
      <OutcomeContainer>
        <Image src={finalChoose2[0].image} alt={finalChoose2[0].brandName} />
        <Title>{finalChoose2[0].brandName}</Title>
        <FeatureContainer>
          <Circle>
            <Value>{finalChoose2[0].os}</Value>
            <TypeOfValue>OS</TypeOfValue>
          </Circle>
          <Circle>
            <Value>${finalChoose2[0].priceRange}</Value>
            <TypeOfValue>Price</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{finalChoose2[0].cameraDayScore}</Value>
            <TypeOfValue>Camera day</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{finalChoose2[0].cameraNightScore}</Value>
            <TypeOfValue>Camera night</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{finalChoose2[0].cameraVideoScore}</Value>
            <TypeOfValue>Camera video</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{finalChoose2[0].cameraZoomScore}</Value>
            <TypeOfValue>Camera zoom</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{finalChoose2[0].cameraSelfieScore}</Value>
            <TypeOfValue>Camera selfie</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{finalChoose2[0].batteryScore}</Value>
            <TypeOfValue>Battery</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{finalChoose2[0].audioPlaybackQualityScore}</Value>
            <TypeOfValue>Audio playback quality</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{finalChoose2[0].audioRecordingQualityScore}</Value>
            <TypeOfValue>Audio recording quality</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{finalChoose2[0].displayScore}</Value>
            <TypeOfValue>Display</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{finalChoose2[0].performanceScore}</Value>
            <TypeOfValue>Performance</TypeOfValue>
          </Circle>
        </FeatureContainer>
      </OutcomeContainer>
    </div>
  );
};
export default ComparePhone;
