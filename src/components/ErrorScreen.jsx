/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import LoadingScreen from './LoadingScreen';

function ErrorScreen({ error }) {
  const { status, statusText } = error;
  return (
    <>
      <div className="app-error">
        <p className="app-error-title">
          <strong>There is an error:</strong>
        </p>
        <pre className="app-error-message">
          <code>
            {status} {statusText}
          </code>
        </pre>
      </div>
      <LoadingScreen />
    </>
  );
}

ErrorScreen.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorScreen;
