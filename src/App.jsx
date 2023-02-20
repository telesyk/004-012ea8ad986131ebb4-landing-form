/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useReducer, useState } from 'react';
import useFetch from 'react-fetch-hook';
import { DATA_URL, INITIAL_STATE } from './constants';
import { checkValidation } from './helpers';
import reducer from './reducer';
import {
  SET_NOTIFICATION,
  SET_NOTIFICATION_TYPE,
  SET_SELECTED_OPTION,
  SET_EMAIL_VALUE,
} from './actions';
import ErrorScreen from './components/ErrorScreen';
import LoadingScreen from './components/LoadingScreen';
import Content from './components/Content';
import Notification from './components/Notification';

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [isSuccessResponse, setIsSuccessResponse] = useState(null);
  const [isLoadedFetch, setIsLoadedFetch] = useState(null);

  const { notification, notificationType, selectedOption, emailValue } = state;

  const { isLoading, data, error } = useFetch(DATA_URL);
  const isError = error && error.status;

  useEffect(() => {
    const delayContent = setInterval(
      () => setIsLoadedFetch(Boolean(!isLoading && !isError && data)),
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
      dispatch({ type: SET_NOTIFICATION, payload: { notification: '' } });
      return setIsSuccessResponse(true);
    }

    // eslint-disable-next-line array-callback-return, consistent-return
    dataValidation.map(({ name, isValid }) => {
      if (!isValid)
        dispatch({
          type: SET_NOTIFICATION,
          payload: { notification: captions.error[name] },
        });
    });

    return dispatch({
      type: SET_NOTIFICATION_TYPE,
      payload: { notificationType: 'error' },
    });
  };

  const handleEmail = event => {
    dispatch({
      type: SET_EMAIL_VALUE,
      payload: { emailValue: event.target.value.trim() },
    });
  };

  const handleSelectChange = option => {
    dispatch({
      type: SET_SELECTED_OPTION,
      payload: { selectedOption: option },
    });
  };

  const handleNotificationClose = () =>
    dispatch({ type: SET_NOTIFICATION, payload: { notification: '' } });

  return (
    <div className="app">
      {!isLoadedFetch && <LoadingScreen />}

      {isError && !data && <ErrorScreen error={error} />}

      {isLoadedFetch && (
        <Content
          data={data}
          option={selectedOption}
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
