import Outcome from "./Outcome";
import { useLocation } from "react-router-dom";
import { Container } from "./styled";
import querystring from "query-string";
import phoneData from "../../jsonFiles/phoneData.json";

const Result = () => {
  var result = {};
  const location = useLocation();
  const parsed = querystring.parse(location.search);
  const phones = location.state;
  // const result = phoneData.filter(ph=>ph.id===parsed.idPhone);
  for (let i = 0; i < phoneData.length; i++) {
    if (phones[i].id === parsed.idPhone) {
      result = phones[i];
    }
  }
  console.log(phones[0]);
  return (
    <Container>
      <Outcome result={result} />
    </Container>
  );
};
export default Result;
