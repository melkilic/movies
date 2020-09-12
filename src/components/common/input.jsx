/** @format */

import React, { Component } from "react";

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        autoFocus
        onChange={onChange}
        id={name}
        type="text"
        name={name}
        className="form-control"
      />
      {/* if the error is truthy, */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
