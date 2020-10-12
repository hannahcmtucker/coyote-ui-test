import React from 'react';
import './inlineEdit.css';

const InlineEdit = ({ value, handleChange, handleSubmit }) => (
  <input
    className="inputreset"
    value={value}
    onChange={handleChange}
    onKeyDown={handleChange}
    onBlur={handleSubmit}
    aria-label="Editable text"
    autoComplete="off"
    autoCorrect="off"
    autoCapitalize="none"
    spellCheck="false"
  />
);

export default InlineEdit;
