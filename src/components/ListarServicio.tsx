import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../utils/Constans'; // Ajusta la ruta según la ubicación de tu archivo Constants.ts

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  // Otras propiedades del servicio...
}

const ListarServicio: React.FC = () => {
  const [servicios, setServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await axios.get<Servicio[]>(`${baseURL}/servicios`);
        setServicios(response.data);
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchServicios();
  }, []);

  return (
    <div>
      <h2>Listado de Servicios</h2>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
            {/* Mostrar otras propiedades del servicio si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarServicio;
