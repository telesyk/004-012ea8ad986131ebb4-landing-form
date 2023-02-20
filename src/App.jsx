/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
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
  const [isLoadedFetch, setIsLoadedFetch] = useState(null);

  const { isLoading, data, error } = useFetch(dataUrl);
  const isError = error && error.status;

  useEffect(() => {
    const delayContent = setInterval(
      () => setIsLoadedFetch(!isLoading && !isError && data),
      1750
    );
    return () => clearInterval(delayContent);
  }, [isLoading, isError, data]);

  const handleFormSubmit = event => {
    event.preventDefault();

    const dataValidation = checkValidation([
      { email: emailValue },
      { option: selectedOption?.value },
    ]);
    const { captions } = data;

    const dataIsValid = dataValidation.map(d => d.isValid);

    if (!dataIsValid.includes(false)) {
      setNotification('');
      return setIsSuccessResponse(true);
    }

    // eslint-disable-next-line array-callback-return, consistent-return
    dataValidation.map(({ name, isValid }) => {
      if (!isValid) return setNotification(captions.error[name]);
    });

    return setNotificationType('error');
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
      {!isLoadedFetch && <LoadingScreen />}

      {isError && !data && <ErrorScreen error={error} />}

      {isLoadedFetch && (
        <Content
          data={data}
          optionValue={selectedOption}
          emailValue={emailValue}
          isSuccessResponse={isSuccessResponse}
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
