import React from 'react';

const CheckmarkCircled = ({ size = '1.5em' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="#00e1ae"
    aria-hidden="true"
    data-testid="checkmarksvg"
  >
    <path d="M22 12a10.01 10.01 0 01-20 0 10.01 10.01 0 0120 0zM9.73 14.94l-3.08-3.17a.4.4 0 00-.57 0l-.59.59a.4.4 0 000 .56l3.67 3.76a.8.8 0 001.15 0l8.02-8.08a.4.4 0 000-.56l-.6-.6a.4.4 0 00-.56 0l-7.44 7.5z" />
  </svg>
);

export default CheckmarkCircled;
