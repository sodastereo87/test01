import React, { useState } from 'react';

interface FormData {
  nombre: string;
  edad: number;
  correo: string;
}

interface FormCapturaProps {
  onSubmit: (data: FormData) => void;
}

const FormCaptura: React.FC<FormCapturaProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    edad: 0,
    correo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
