/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import SelectNative from './components/SelectNative';

const OPTIONS = [
  { value: 'full-stack developer', label: 'Full-stack developer' },
  { value: 'front-end developer', label: 'Front-end developer' },
  { value: 'back-end developer', label: 'Back-end developer' },
  { value: 'design role', label: 'Design role' },
  { value: 'product role', label: 'Product role' },
  { value: 'other', label: 'Other' },
];

const CAPTIONS = {
  logo: {
    src: '/src/assets/logotype.svg',
    text: 'websote logotype',
  },
  form: {
    description:
      'The human-first, 100% no-code API for fully managed backend services 😻',
    topText: 'Get on our updates list',
    successResponse: 'Done. You can unsubscribe any time via the email.',
  },
  footer: {
    description1:
      'We are working to simplify building premium web, mobile and IoT apps by taking the geek speak and maintenance out of the backend services required to deliver smart and engaging applications.',
    description2:
      'By the way, this page is powered by our solution. If you are interested in a demo or would like to have a chat drop us a line at demo at includecore.com.',
    copyrights: '© 2023 IncludeCore. All rights reserved.',
  },
};

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [emailValue, setEmailValue] = useState('');
  const [isSuccessResponse, setIsSuccessResponse] = useState(null);

  const checkValidation = data => {
    /**
     * Check data for validation
     *
     * write [code] here
     *
     * return Boolean
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

  return (
    <div className="app">
      <div className="app-top">
        <div className="app-container">
          <div className="app-logotype">
            <img src={CAPTIONS.logo.src} alt={CAPTIONS.logo.text} />
          </div>
          {!isSuccessResponse ? (
            <>
              <p className="app-top-description">{CAPTIONS.form.description}</p>
              <form onSubmit={handleFormSubmit} className="app-form form">
                <p className="form-text-top">{CAPTIONS.form.topText}</p>
                <div className="form-main">
                  <div className="form-controls">
                    {isMobile ? (
                      <div className="form-control-panel">
                        <SelectNative options={OPTIONS} />
                      </div>
                    ) : (
                      <div className="form-control-panel">
                        <Select
                          className="form-select"
                          classNamePrefix="form-select"
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={OPTIONS}
                        />
                      </div>
                    )}
                    <div className="form-control-panel">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
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
                    Notify me
                  </button>
                </div>
              </form>
            </>
          ) : (
            <p className={classNames('app-top-description', 'is-success')}>
              {CAPTIONS.form.successResponse}
            </p>
          )}
        </div>
      </div>
      <div className="app-bottom">
        <div className="app-container">
          <div className="app-bottom-description">
            <p>{CAPTIONS.footer.description1}</p>
            <p>{CAPTIONS.footer.description2}</p>
          </div>
          <div className="app-bottom-copyrights">
            <p>{CAPTIONS.footer.copyrights}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
