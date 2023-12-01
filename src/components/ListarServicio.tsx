import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../utils/Constans';

interface Servicio {
    id: number;
    name: string;
    descripcion: string;
    // Otras propiedades del servicio...
}

const ListarServicio: React.FC = () => {
    const [servicios, setServicios] = useState<Servicio[]>([]);

    useEffect(() => {
        const fetchServicios = async () => {
            try {
                const response = await axios.get<any>(`${baseURL}/servicios`);
                console.log('Respuesta de la API:', response.data); // Verifica la estructura de la respuesta

                const serviciosData = Array.isArray(response.data.servicios) ? response.data.servicios : [];
                setServicios(serviciosData);
            } catch (error) {
                console.error('Error al obtener los servicios:', error);
            }
        };

        fetchServicios();
    }, []);

    return (
        <div>
            <h2>Listado de Servicios</h2>
            {servicios.length === 0 ? (
                <p>No hay servicios disponibles</p>
            ) : (
                <ul>
                    {servicios.map((servicio) => (
                        <li key={servicio.id}>
                            <h3>{servicio.name}</h3>
                            <p>{servicio.descripcion}</p>
                            {/* Mostrar otras propiedades del servicio si es necesario */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListarServicio;
