/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import useFetch from 'react-fetch-hook';
import { dataUrl } from './constants';
import { checkValidation } from './helpers';
import ErrorScreen from './components/ErrorScreen';
import LoadingScreen from './components/LoadingScreen';
import Content from './components/Content';
import Notification from './components/Notification';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [emailValue, setEmailValue] = useState('');
  const [isSuccessResponse, setIsSuccessResponse] = useState(null);
  const [notification, setNotification] = useState('');
  const [notificationType, setNotificationType] = useState('info');

  const { isLoading, data, error } = useFetch(dataUrl);

  const handleFormSubmit = event => {
    event.preventDefault();
    const isValidData = checkValidation([emailValue, selectedOption?.value]);

    if (isValidData) {
      /**
       * Send data to server
       *
       * add [code] down here
       */

      setIsSuccessResponse(prev => !prev);
    } else {
      setNotification(data?.captions.error.email);
      setNotificationType('error');
    }
  };

  const handleEmail = event => {
    setEmailValue(event.target.value.trim());
  };

  const handleSelectChange = option => {
    setSelectedOption(option);
  };

  const handleNotificationClose = () => setNotification('');

  return (
    <div className="app">
      {isLoading && <LoadingScreen />}

      {error && !data && <ErrorScreen error={error} />}

      {!error && !isLoading && (
        <Content
          data={data}
          optionValue={selectedOption}
          emailValue={emailValue}
          isSuccessResponse={isSuccessResponse}
          isLoaded={!isLoading}
          handleEmailChange={handleEmail}
          handleFormSubmit={handleFormSubmit}
          handleSelectChange={handleSelectChange}
        />
      )}

      {notification && notification !== '' && (
        <Notification
          message={notification}
          type={notificationType}
          onClose={handleNotificationClose}
        />
      )}
    </div>
  );
}

export default App;
