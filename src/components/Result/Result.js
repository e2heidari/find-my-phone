import Outcome from "./Outcome";
import { useLocation } from "react-router-dom";
import { Container, Noticetext } from "./styled";
import querystring from "query-string";

const Result = ({ phones }) => {
  var result = {};
  const location = useLocation();
  const parsed = querystring.parse(location.search);
  // const result = phones.filter((ph) => ph.id === parsed.idPhone);
  for (let i = 0; i < phones.length; i++) {
    if (phones[i].id === parsed.idPhone) {
      result = phones[i];
    }
  }
  console.log(result);
  return (
    <Container>
      <Noticetext>
        All data comes from several trusted websites, and a higher number means
        better value
      </Noticetext>
      <Outcome result={result} />
    </Container>
  );
};
export default Result;
