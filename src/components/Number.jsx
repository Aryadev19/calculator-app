const Number = ({ val, bgColor, onClick }) => {
  return (
    <button
      className="number"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {val}
    </button>
  );
};

export default Number;
