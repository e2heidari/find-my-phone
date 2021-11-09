import { OutcomeContainer, TextBody, Title, Camera, Price } from "./styled";

const Outcome = ({ result }) => {
  return (
    <OutcomeContainer>
      <div>
        {/* <Image src={product.image || emptyImage} alt={product.name} /> */}
      </div>
      <TextBody>
        <Title>{result.brandName}</Title>
        <Camera>{result.cameraDayScore}</Camera>
      </TextBody>
      <div>
        <Price>${result.priceRange}</Price>
      </div>
    </OutcomeContainer>
  );
};
export default Outcome;
