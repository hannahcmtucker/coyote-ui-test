import React, { useState, useRef } from 'react';
import './app.css';
import StatusIndicator from './StatusIndicator';
import InlineEdit from './InlineEdit';
import fakeSubmit from '../utils/fakeSubmit';

function App() {
  const init = 'Hello World';
  const [value, setValue] = useState(init);
  const [status, setStatus] = useState(null);
  const prevValue = useRef(init);
  const [errMessage, setErrMessage] = useState(null);

  const handleSubmit = async () => {
    // value is unchanged, no need to submit
    if (prevValue.current === value) return;

    setStatus('loading');
    setErrMessage(null);

    try {
      await fakeSubmit(value);
      prevValue.current = value;
      setStatus('success');
    } catch (err) {
      setValue(prevValue.current);
      setStatus('error');
      setErrMessage(err.message);
    }
  };

  const handleChange = ({ target, key }) => {
    if (key === 'Enter') handleSubmit();
    setValue(target.value);
  };

  return (
    <main className="appwrapper">
      <div className="editwrapper">
        <InlineEdit
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <StatusIndicator status={status} />
      </div>
      <div role="alert" aria-live="assertive">
        {errMessage && <p className="errmessage">{errMessage}</p>}
      </div>
    </main>
  );
}

export default App;
