import React from "react";
import PropTypes from "prop-types";

const ChildrenComponent = ({ name, value }) => {
  return (
    <div>
      name : {name} <br />
      value : {value}
    </div>
  );
};

ChildrenComponent.defaultProps = {
  name: "(unknown name)",
  value: "(unknown value)",
};

ChildrenComponent.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default ChildrenComponent;
