import React from 'react';

interface FormPintarProps {
  data: {
    nombre: string;
    edad: number;
    correo: string;
  };
}

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
