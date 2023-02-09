/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';
import Select from 'react-select';
import SelectNative from './SelectNative';
import logotype from '../assets/logotype.svg';

function Content({
  data,
  optionValue,
  emailValue,
  isLoaded,
  isSuccessResponse,
  handleEmailChange,
  handleSelectChange,
  handleFormSubmit,
}) {
  const [classLoaded, setClassLoaded] = useState('');
  const { options, captions } = data;

  let delay;

  clearTimeout(delay);

  if (isLoaded) {
    delay = setTimeout(() => {
      setClassLoaded('is-loaded');
    }, 500);
  }

  return (
    <>
      <div className={classNames('app-top', classLoaded)}>
        <div className="app-container">
          <div className="app-logotype">
            <img src={logotype} alt={captions.logo.text} />
          </div>
          {!isSuccessResponse ? (
            <>
              <p className="app-top-description">{captions.form.description}</p>
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
                          defaultValue={optionValue}
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
                        onChange={handleEmailChange}
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
      <div className={classNames('app-bottom', classLoaded)}>
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
}

Content.propTypes = {
  data: PropTypes.shape().isRequired,
  emailValue: PropTypes.string.isRequired,
  optionValue: PropTypes.shape(),
  isLoaded: PropTypes.bool,
  isSuccessResponse: PropTypes.bool,
  handleEmailChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

Content.defaultProps = {
  isLoaded: false,
  isSuccessResponse: null,
  optionValue: null,
};

export default Content;
