const Option = ({ commonName, value, onChange, checked }) => {
  return (
    <div>
      <input
        type="radio"
        value={value}
        id={value}
        checked={checked}
        onChange={onChange}
        name={commonName}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};
export default Option;
