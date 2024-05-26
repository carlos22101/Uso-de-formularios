import React, { useState } from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

function Form  ({ onFormSubmit })  {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', birthDate: '' });

  function handleChange  (e)  {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit  (e)  {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({ name: '', email: '', phone: '', birthDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField 
        label="Nombre" 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <FormField 
        label="Email" 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
      />
      <FormField 
        label="Telefono" 
        type="tel" 
        name="phone" 
        value={formData.phone} 
        onChange={handleChange} 
      />
      <FormField 
        label="Cumpleaños" 
        type="date" 
        name="birthDate" 
        value={formData.birthDate} 
        onChange={handleChange} 
      />
      <Button type="submit">Guardar</Button>
    </form>
  );
};

export default Form;
