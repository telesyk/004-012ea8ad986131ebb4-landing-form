/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Notification({ message, type, onClose }) {
  const classes = classNames('notification', {
    'notification-info': type === 'info',
    'notification-error': type === 'error',
  });

  return (
    <div className={classes}>
      <div className="notification-content">{message}</div>
      <button type="button" className="notification-close" onClick={onClose}>
        x
      </button>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'error']),
  onClose: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  type: 'info',
};

export default Notification;
