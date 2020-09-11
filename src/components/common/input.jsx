/** @format */

import React, { Component } from "react";

const Input = ({ name, label, value, onChange }) => {
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
    </div>
  );
};

export default Input;
props;
