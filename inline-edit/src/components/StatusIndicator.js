import React from 'react';
import CheckmarkCircled from '../icons/CheckmarkCircled';
import CrossCircled from '../icons/CrossCircled';
import LoadingSpinner from './LoadingSpinner';
import VisuallyHidden from './VisuallyHidden';

const StatusIndicator = ({ status }) => {
  return (
    <div role="alert" aria-live="assertive">
      <StatusIcon status={status} />
    </div>
  );
};

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'loading':
      return <Loading />;
    case 'success':
      return <Success />;
    case 'error':
      return <CrossCircled />;
    default:
      return null;
  }
};

const Loading = () => (
  <>
    <LoadingSpinner />
    <VisuallyHidden>Loading</VisuallyHidden>
  </>
);

const Success = () => (
  <>
    <CheckmarkCircled />
    <VisuallyHidden>Successfully submitted</VisuallyHidden>
  </>
);

export default StatusIndicator;
