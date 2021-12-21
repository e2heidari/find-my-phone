import {
  OutcomeContainer,
  Title,
  FeatureContainer,
  Image,
  Circle,
  Value,
  TypeOfValue,
  CompareButton,
} from "./styled";
import { useHistory } from "react-router-dom";

const Outcome = ({ result }) => {
  const history = useHistory();
  const ComparePhones = () => {
    history.push({
      pathname: "/compare",
      search: `?idPhone=${result.id}`,
    });
  };
  return (
    <OutcomeContainer>
      <Image src={result.image} alt={result.brandName} />
      <CompareButton
        onClick={ComparePhones}
        variant="outlined"
        // endIcon={<DoneIcon />}
        style={{
          minWidth: "120px",
          margin: "10px",
        }}
      >
        Compare
      </CompareButton>
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
  );
};
export default Outcome;
