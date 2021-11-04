import { useLocation } from "react-router-dom";
const Result = () => {
  const location = useLocation();
  const result = location.state.newMainFilter;
  console.log(result);

  return "Hello world";
};
export default Result;
