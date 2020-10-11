import React from 'react';
import './loadingSpinner.css';
import VisuallyHidden from './VisuallyHidden';

const LoadingSpinner = ({ a11yText = 'loading' }) => {
  return (
    <div className="spinner" role="alert" aria-live="assertive">
      <VisuallyHidden>
        <p>{a11yText}</p>
      </VisuallyHidden>
    </div>
  );
};

export default LoadingSpinner;
