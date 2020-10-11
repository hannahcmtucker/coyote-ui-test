import React from 'react';
import './visuallyHidden.css';

const VisuallyHidden = ({ children }) => (
  <span className="visuallyhidden">{children}</span>
);

export default VisuallyHidden;
