import React, { useState } from 'react';

// describe la estructura de los datos que se van a capturar en el formulario
interface FormData {
  nombre: string;
  edad: number;
  correo: string;
}

// describe las propiedades que el componente FormCaptura espera recibir con una única propiedad llamada onSubmit
interface FormCapturaProps {
  onSubmit: (data: FormData) => void;
}

// toma las props definidas en FormCapturaProps
const FormCaptura: React.FC<FormCapturaProps> = ({ onSubmit }) => {
  // Utiliza el hook useState para manejar el estado local del formulario, formData es un objeto que contiene los valores indicados
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    edad: 0,
    correo: '',
  });

  // función que se ejecuta cada vez que hay un cambio en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // función que se activa cuando se envía el formulario y previene el comportamiento por defecto del formulario y llama a la función onSubmit
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Edad:
          <input type="number" name="edad" value={formData.edad} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Correo electrónico:
          <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Mostrar</button>
    </form>
  );
};

export default FormCaptura;
