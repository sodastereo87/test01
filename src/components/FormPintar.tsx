import React from 'react';

// describe las propiedades que el componente FormPintar espera recibir. Contiene una sola propiedad llamada data, que es un objeto con los siguentes campos nombre, edad y correo.
interface FormPintarProps {
  data: {
    nombre: string;
    edad: number;
    correo: string;
  };
}

// muestra los datos capturados en un formato específico.
const FormPintar: React.FC<FormPintarProps> = ({ data }) => {
  return (
    <div>
      <h2>Datos Capturados:</h2>
      <p>Nombre: {data.nombre}</p>
      <p>Edad: {data.edad}</p>
      <p>Correo: {data.correo}</p>
    </div>
  );
};

export default FormPintar;
