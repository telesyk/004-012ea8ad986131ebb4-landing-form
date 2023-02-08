/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function SelectNative({ options, onChange }) {
  const handleChange = event => {
    const result = {
      value: event.target.value,
      label: event.target.value,
    };
    onChange(result);
  };

  return (
    <select
      className="form-select-native"
      name="roleList"
      id="roleList"
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
  onChange: PropTypes.func.isRequired,
};

export default SelectNative;
