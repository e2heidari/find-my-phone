import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const Option = ({ commonName, value, onChange, checked }) => {
  return (
    <div>
      <FormControlLabel
        control={<Radio />}
        type="radio"
        value={value}
        id={value}
        checked={checked}
        onChange={onChange}
        name={commonName}
        label={value}
      />
    </div>
  );
};
export default Option;
