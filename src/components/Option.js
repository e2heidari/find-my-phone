const Option = ({ commonName, option, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        value={option}
        id={option}
        onChange={onChange}
        name={commonName}
      />
      <label for={option}>{option}</label>
    </div>
  );
};
export default Option;
