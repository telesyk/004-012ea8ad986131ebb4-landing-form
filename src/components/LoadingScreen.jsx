/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { CgSpinner } from 'react-icons/cg';
import classNames from 'classnames';

function LoadingScreen({ animation, withBackground }) {
  return (
    <div
      className={classNames('app-loading', {
        'app-loading-bg': withBackground,
      })}
    >
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
  withBackground: PropTypes.bool,
};

LoadingScreen.defaultProps = {
  animation: true,
  withBackground: false,
};

export default LoadingScreen;
