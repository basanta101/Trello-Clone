import React from 'react';
import PropTypes from 'prop-types';
import './Input.module.scss'; // Optional, for custom styling

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  name = '',
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className={`input ${className}`}
      {...props}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
