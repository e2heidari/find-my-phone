const Question = ({ question, value, onChange }) => {
  return (
    <div>
      <div>{question}</div>
      <div>
        <input value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default Question;
