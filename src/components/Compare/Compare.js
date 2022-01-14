import { useLocation } from "react-router-dom";
import querystring from "query-string";
import {
  OutcomeContainer,
  Title,
  FeatureContainer,
  Image,
  Circle,
  Value,
  TypeOfValue,
  Container,
  Comparepart,
  Noticetext,
} from "./styled";
import Comparephone from "./Comparephone";

const Compare = ({ phones }) => {
  var result = {};
  var secondResult = {};
  const location = useLocation();
  const parsed = querystring.parse(location.search);
  // const result = phones.filter((ph) => ph.id === parsed.idPhone);
  for (let i = 0; i < phones.length; i++) {
    if (phones[i].id === parsed.idPhone) {
      result = phones[i];
    }
  }
  for (let i = 0; i < phones.length; i++) {
    if (phones[i].id === parsed.idPhone2) {
      secondResult = phones[i];
    }
  }
  return (
    <Container>
      <Noticetext>
        All data comes from several trusted websites, and a higher number means
        better value
      </Noticetext>
      <OutcomeContainer>
        <Image src={result.image} alt={result.brandName} />
        <Title>{result.brandName}</Title>
        <FeatureContainer>
          <Circle>
            <Value>{result.os}</Value>
            <TypeOfValue>OS</TypeOfValue>
          </Circle>
          <Circle>
            <Value>${result.priceRange}</Value>
            <TypeOfValue>Price</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{result.cameraDayScore}</Value>
            <TypeOfValue>Camera day</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{result.cameraNightScore}</Value>
            <TypeOfValue>Camera night</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{result.cameraVideoScore}</Value>
            <TypeOfValue>Camera video</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{result.cameraZoomScore}</Value>
            <TypeOfValue>Camera zoom</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{result.cameraSelfieScore}</Value>
            <TypeOfValue>Camera selfie</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{result.batteryScore}</Value>
            <TypeOfValue>Battery</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{result.audioPlaybackQualityScore}</Value>
            <TypeOfValue>Audio playback quality</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{result.audioRecordingQualityScore}</Value>
            <TypeOfValue>Audio recording quality</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{result.displayScore}</Value>
            <TypeOfValue>Display</TypeOfValue>
          </Circle>
          <Circle>
            <Value>{result.performanceScore}</Value>
            <TypeOfValue>Performance</TypeOfValue>
          </Circle>
        </FeatureContainer>
      </OutcomeContainer>
      <Comparepart>
        <Comparephone
          phones={phones}
          result1={result.id}
          secondResult={secondResult}
        />
      </Comparepart>
    </Container>
  );
};
export default Compare;
