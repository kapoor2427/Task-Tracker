import PropTypes from "prop-types";
const Button = ({ color, text, onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
  text: "Add"
};

Button.protoTypes = {
  text: PropTypes.string,
  onClickEvent: PropTypes.func,
  color: PropTypes.string
};

export default Button;
