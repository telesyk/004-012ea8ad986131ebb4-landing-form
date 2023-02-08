/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function SelectNative({ options, className, id, onChange }) {
  const handleChange = event => {
    const result = {
      value: event.target.value,
      label: event.target.value,
    };
    onChange(result);
  };

  return (
    <select
      className={className}
      name={id}
      id={id}
      required
      defaultValue={options[0].value}
      onChange={handleChange}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

SelectNative.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SelectNative.defaultProps = {
  className: '',
  id: '',
};

export default SelectNative;
