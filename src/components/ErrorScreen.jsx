/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function ErrorScreen({ error }) {
  const { status, statusText } = error;
  return (
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
  );
}

ErrorScreen.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number,
    statusText: PropTypes.string,
  }).isRequired,
};

export default ErrorScreen;
