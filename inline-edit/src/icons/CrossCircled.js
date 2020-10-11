import React from 'react';

const CrossCircled = ({ size = '1.5em' }) => (
  <svg
    className="baseSvg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="#dc3545"
    aria-hidden="true"
  >
    <path d="M12 1C5.95 1 1 5.95 1 12s4.95 11 11 11 11-4.95 11-11S18.05 1 12 1zm4.8 13.9l-1.9 1.9-2.9-2.88-2.9 2.89-1.9-1.92L10.07 12 7.2 9.1l1.92-1.9L12 10.07l2.9-2.89 1.9 1.92-2.87 2.9 2.89 2.9z" />
  </svg>
);

export default CrossCircled;
