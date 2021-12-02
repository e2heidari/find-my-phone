import {
  OutcomeContainer,
  Title,
  FeatureContainer,
  Image,
  Circle,
  Value,
  TypeOfValue,
} from "./styled";
const Outcome = ({ result }) => {
  return (
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
  );
};
export default Outcome;
