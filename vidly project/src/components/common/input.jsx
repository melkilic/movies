/** @format */

import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} className="form-control" id={name} name={name} />
      {error && (
        <div className="alert alert-danger " role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
