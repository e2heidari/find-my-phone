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
  CompareAutocomplete,
} from "./styled";
import { useHistory } from "react-router-dom";

const ComparePhone = ({ phones, result1, secondResult }) => {
  var secondresult = [];
  var result2 = {};
  const [showup, setShowup] = useState(false);
  const history = useHistory();
  const phonesName = phones.map((phone) => phone.brandName);
  const selectPhone = (e) => {
    setShowup(true);
    const phoneSlected = e.currentTarget.innerText;
    secondresult = phones.filter((phone) => phone.brandName === phoneSlected);
    // console.log(result2.id);
    for (let i = 0; i < phones.length; i++) {
      if (phones[i].id === secondresult[0].id) {
        result2 = phones[i];
      }
    }
    console.log(result2);
    history.push({
      pathname: "/compare",
      search: `?idPhone=${result1}&idPhone2=${result2.id}`,
    });
  };
  return (
    <div>
      <CompareAutocomplete>
        <Autocomplete
          onInputChange={selectPhone}
          disablePortal
          id="combo-box-demo"
          options={phonesName}
          sx={{ width: 300 }}
          color="white"
          renderInput={(params) => <TextField {...params} label="Phone" />}
        />
      </CompareAutocomplete>

      <OutcomeContainer>
        <Image src={secondResult.image} alt={secondResult.brandName} />
        <Title>{secondResult.brandName}</Title>
        <FeatureContainer>
          <Circle>
            <Value>{secondResult.os}</Value>
            <TypeOfValue>OS</TypeOfValue>
          </Circle>
          <Circle>
            <Value>${secondResult.priceRange}</Value>
            <TypeOfValue>Price</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{secondResult.cameraDayScore}</Value>
            <TypeOfValue>Camera day</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{secondResult.cameraNightScore}</Value>
            <TypeOfValue>Camera night</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{secondResult.cameraVideoScore}</Value>
            <TypeOfValue>Camera video</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{secondResult.cameraZoomScore}</Value>
            <TypeOfValue>Camera zoom</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{secondResult.cameraSelfieScore}</Value>
            <TypeOfValue>Camera selfie</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{secondResult.batteryScore}</Value>
            <TypeOfValue>Battery</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{secondResult.audioPlaybackQualityScore}</Value>
            <TypeOfValue>Audio playback quality</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{secondResult.audioRecordingQualityScore}</Value>
            <TypeOfValue>Audio recording quality</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{secondResult.displayScore}</Value>
            <TypeOfValue>Display</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{secondResult.performanceScore}</Value>
            <TypeOfValue>Performance</TypeOfValue>
          </Circle>
        </FeatureContainer>
      </OutcomeContainer>
    </div>
  );
};
export default ComparePhone;
