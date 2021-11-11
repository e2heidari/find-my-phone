import Outcome from "./Outcome";
import { useLocation } from "react-router-dom";
import { Container } from "./styled";

const Result = () => {
  const location = useLocation();
  const results = location.state.phoneFiltered;
  const OutcomeComponent = results.map((result) => (
    <Outcome key={result.id} result={result} />
  ));
  return <Container>{OutcomeComponent}</Container>;
};
export default Result;
