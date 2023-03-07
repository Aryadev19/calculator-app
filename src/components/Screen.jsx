const Screen = ({ qValue, ansValue }) => {
  return (
    <div className="screen">
      <div className="question">
        {qValue.toString().length < 8 ? qValue : "Error"}
      </div>
      <div className="answer">
        {ansValue.toString().length < 8 ? ansValue : "Error"}
      </div>
    </div>
  );
};

export default Screen;
