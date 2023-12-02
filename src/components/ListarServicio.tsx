import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../utils/Constans';

// contiene solo un campo llamado name de tipo string
interface Pokemon {
    name: string;
}

// Utiliza el hook useState para manejar el estado local del componente, 'pokemons' es un array que contiene los datos de los Pokémon que se obtienen de la API
const ListarServicio: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    // Utiliza el hook useEffect para realizar una solicitud a la API cuando el componente se monta
    useEffect(() => {
        // se define la función fetchPokemons que utiliza axios para hacer una solicitud GET a la URL de la API
        const fetchPokemons = async () => {
            try {
                // Cuando se recibe una respuesta exitosa (response.data), se actualiza el estado pokemons con los datos de los Pokémon obtenidos
                const response = await axios.get<any>(`${baseURL}/pokemon?limit=150&offset=0`);
                console.log('Respuesta de la API:', response.data); 

                //  Se verifica si la respuesta contiene un array de resultados (response.data.results) y, si existe, se asigna a pokemonsData
                const pokemonsData = response.data.results || [];
                setPokemons(pokemonsData);
            // Si ocurre un error durante la solicitud, se muestra un mensaje de error en la consola
            } catch (error) {
                console.error('Error al obtener los Pokémon:', error);
            }
        };

        fetchPokemons();
    }, []);

    return (
        <div>
          <h2>Listado de Pokémon</h2>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <p>{pokemon.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListarServicio;
