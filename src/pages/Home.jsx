import React, { useState } from 'react';
import Form from '../components/organisms/Form';
import LinkedList from '../utils/LinkedList';

function Home ()  {
  const [linkedList] = useState(new LinkedList());
  const [listArray, setListArray] = useState([]);

  function handleFormSubmit  (data)  {
    linkedList.add(data);
    setListArray(linkedList.toArray());
  };

  return (
    <div className="app">
      <h1>Formulario</h1>
      <Form onFormSubmit={handleFormSubmit} />
      <div className="data-list">
        <h2>Información guardada</h2>
        <ul>
          {listArray.map((item, index) => (
            <li key={index}>{`Nombre: ${item.name}, Email: ${item.email}, Telefono: ${item.phone}, Cumpleaños: ${item.birthDate}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
