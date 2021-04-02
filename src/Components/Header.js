import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClickEvent = () => {
    console.log("Clicked!");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClickEvent} />
    </header>
  );
};

Header.defaultProp = {
  title: "Task Tracker"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
