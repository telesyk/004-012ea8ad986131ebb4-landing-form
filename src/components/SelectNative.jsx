/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function SelectNative({ options }) {
  return (
    <select
      className="form-select-native"
      name="roleList"
      id="roleList"
      required
      defaultValue={options[0].value}
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
};

export default SelectNative;
