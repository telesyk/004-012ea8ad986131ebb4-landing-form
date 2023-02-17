/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { CgSpinner } from 'react-icons/cg';

function LoadingScreen({ animation }) {
  return (
    <div className="app-loading">
      {animation ? (
        <div className="loading-animation">
          <CgSpinner />
        </div>
      ) : (
        <p>The data is loading...</p>
      )}
    </div>
  );
}

LoadingScreen.propTypes = {
  animation: PropTypes.bool,
};

LoadingScreen.defaultProps = {
  animation: true,
};

export default LoadingScreen;
