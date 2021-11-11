import {
  OutcomeContainer,
  TextBody,
  Title,
  Camera,
  Price,
  Image,
} from "./styled";
import images from "./images";
const Outcome = ({ result }) => {
  return (
    <OutcomeContainer>
      <div>
        <Image src={images[result.image]} alt={result.image} />
        {/* <Image src={product.image || emptyImage} alt={product.name} /> */}
      </div>
      <TextBody>
        <Title>{result.brandName}</Title>
        <Camera>Camera day score: {result.cameraDayScore}</Camera>
      </TextBody>
      <div>
        <Price>${result.priceRange}</Price>
      </div>
    </OutcomeContainer>
  );
};
export default Outcome;
