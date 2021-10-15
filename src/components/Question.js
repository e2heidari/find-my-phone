const Question = ({ question, value, onChange }) => {
  return (
    <div>
      <div>{question}</div>
      {/* <div>
        <input value={value} onChange={onChange} />
      </div> */}
      <div>
        <form>
          <input
            type="radio"
            value={value}
            id="iOS"
            onChange={onChange}
            name="OS"
          />
          <label for="iOS">iOS</label>

          <input
            type="radio"
            value={value}
            id="Android"
            onChange={onChange}
            name="OS"
          />
          <label for="Android">Android</label>
        </form>
      </div>
    </div>
  );
};

export default Question;
