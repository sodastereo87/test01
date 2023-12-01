import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../utils/Constans';

interface Pokemon {
    name: string;
    // Otras propiedades del Pokémon...
}

const ListarServicio: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get<any>(`${baseURL}/pokemon?limit=150&offset=0`);
                console.log('Respuesta de la API:', response.data); // Verifica la estructura de la respuesta

                const pokemonsData = response.data.results || [];
                setPokemons(pokemonsData);
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
                        {/* Mostrar otras propiedades del Pokémon si es necesario */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListarServicio;
