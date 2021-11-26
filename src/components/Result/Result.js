import Outcome from "./Outcome";
import { useLocation } from "react-router-dom";
import { Container } from "./styled";
import querystring from "query-string";
import phoneData from "../../jsonFiles/phoneData.json";

const Result = () => {
  var result = {};
  const location = useLocation();
  const parsed = querystring.parse(location.search);
  // const result = phoneData.filter(ph=>ph.id===parsed.idPhone);
  for (let i = 0; i < phoneData.length; i++) {
    if (phoneData[i].id === parsed.idPhone) {
      result = phoneData[i];
    }
  }
  console.log(phoneData[0]);
  return (
    <Container>
      <Outcome result={result} />
    </Container>
  );
};
export default Result;
