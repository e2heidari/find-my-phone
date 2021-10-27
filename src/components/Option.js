const Option = ({ commonName, option, onChange, checked }) => {
  return (
    <div>
      <input
        type="radio"
        value={option}
        id={option}
        onChange={onChange}
        name={commonName}
        checked={checked}
      />
      <label htmlFor={option}>{option}</label>
    </div>
  );
};
export default Option;
