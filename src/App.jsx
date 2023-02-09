/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import useFetch from 'react-fetch-hook';
import { dataUrl } from './constants';
import SelectNative from './components/SelectNative';
import logotype from './assets/logotype.svg';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [emailValue, setEmailValue] = useState('');
  const [isSuccessResponse, setIsSuccessResponse] = useState(null);

  const { isLoading, data, error } = useFetch(dataUrl);

  // eslint-disable-next-line no-unused-vars
  const checkValidation = data => {
    /**
     * Check data for validation
     *
     * return Boolean
     *
     * write [code] here
     */
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (emailValue !== '' && selectedOption) {
      /**
       * Send data to server
       *
       * add [code] here
       */

      setIsSuccessResponse(prev => !prev);
    }
  };

  const handleEmail = event => {
    setEmailValue(event.target.value.trim());
  };

  const handleSelectChange = option => {
    setSelectedOption(option);
  };

  const renderLoading = () => (
    <div className="app-top">
      <div className="app-loading">
        <p>The data is loading...</p>
      </div>
    </div>
  );

  const renderError = err => (
    <div className="app-top">
      <div className="app-error">
        <p className="app-error-title">
          <strong>There is an error:</strong>
        </p>
        <pre className="app-error-message">
          <code>{err}</code>
        </pre>
      </div>
    </div>
  );

  const renderContent = allData => {
    const { options, captions } = allData;
    return (
      <>
        <div className="app-top">
          <div className="app-container">
            <div className="app-logotype">
              <img src={logotype} alt={captions.logo.text} />
            </div>
            {!isSuccessResponse ? (
              <>
                <p className="app-top-description">
                  {captions.form.description}
                </p>
                <form onSubmit={handleFormSubmit} className="app-form form">
                  <p className="form-text-top">{captions.form.topText}</p>
                  <div className="form-main">
                    <div className="form-controls">
                      {isMobile ? (
                        <div className="form-control-panel form-select-native__container">
                          <SelectNative
                            options={options}
                            className="form-select-native"
                            id="roleList"
                            onChange={handleSelectChange}
                          />
                        </div>
                      ) : (
                        <div className="form-control-panel">
                          <Select
                            className="form-select"
                            classNamePrefix="form-select"
                            placeholder={captions.placeholder.select}
                            defaultValue={selectedOption}
                            onChange={handleSelectChange}
                            options={options}
                          />
                        </div>
                      )}
                      <div className="form-control-panel">
                        <input
                          className="form-control"
                          type="email"
                          placeholder={captions.placeholder.email}
                          required
                          onChange={handleEmail}
                          value={emailValue}
                        />
                      </div>
                    </div>
                    <p className="form-text-bottom">
                      This form is protected by reCAPTCHA, and the Google{' '}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Terms of Service
                      </a>{' '}
                      apply.
                    </p>
                    <button
                      className="form-submit"
                      type="submit"
                      onClick={handleFormSubmit}
                    >
                      {captions.form.submitText}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <p className={classNames('app-top-description', 'is-success')}>
                {captions.form.successResponse}
              </p>
            )}
          </div>
        </div>
        <div className="app-bottom">
          <div className="app-container">
            <div className="app-bottom-description">
              <p>{captions.footer.description1}</p>
              <p>{captions.footer.description2}</p>
            </div>
            <div className="app-bottom-copyrights">
              <p>{captions.footer.copyrights}</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="app">
      {isLoading && renderLoading()}
      {error && !data && renderError(error)}
      {!error && !isLoading && renderContent(data)}
    </div>
  );
}

export default App;
