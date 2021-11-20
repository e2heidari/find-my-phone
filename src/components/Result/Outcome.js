import {
  OutcomeContainer,
  TextBody,
  Title,
  Camera,
  Price,
  Image,
} from "./styled";
import defaultImage from "../../pictureOfPhones/iPhone-12.png";
const Outcome = ({ result }) => {
  const img = result.image
    ? require("../../pictureOfPhones/" + result.image).default
    : defaultImage;
  console.log(img);
  return (
    <OutcomeContainer>
      <div>
        <Image src={img} alt={result.brandName} />
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
