import React from 'react';
import Input from '../atoms/Input';

function FormField  ({ label, type, name, value, onChange })  {
  return (
    <div className="form-field">
      <label>{label}</label>
      <Input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
};

export default FormField;
