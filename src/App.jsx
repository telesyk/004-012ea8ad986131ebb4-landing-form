import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-top">
          <div className="app-logotype">
            <img src="/src/assets/react.svg" alt="websote logotype" />
          </div>
          <div className="app-top-description">
            <p>
              The human-first, 100% no-code API for fully managed backend
              services 😻
            </p>
          </div>
          <form action="" className="app-form">
            <p className="app-form-top">Get on our updates list</p>
            <div className="app-form-fields">
              <select name="roleList" id="roleList" required>
                <option value="role">Role</option>
                <option value="Front end developer">Front end developer</option>
                <option value="Back end developer">Back end developer</option>
                <option value="Other">Other</option>
              </select>
              <input type="email" placeholder="Email" required />
              <button type="submit" onClick={() => setCount(prev => prev + 1)}>
                Notify me {count}
              </button>
            </div>
            <p className="app-form-bottom">
              <small>
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
              </small>
            </p>
          </form>
        </div>
        <div className="app-bottom">
          <div className="app-bottom-description">
            <p>
              We are working to simplify building premium web, mobile and IoT
              apps by taking the geek speak and maintenance out of the backend
              services required to deliver smart and engaging applications.
            </p>
            <p>
              By the way, this page is powered by our solution. If you are
              interested in a demo or would like to have a chat drop us a line
              at demo at includecore.com.
            </p>
          </div>
          <div className="app-bottom-copyrights">
            <p>© 2023 IncludeCore. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
