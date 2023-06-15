import { useEffect, useState } from 'react';
import ShowPokemons from './ShowPokemons';
const PokemonContainer = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const responseData = await response.json();
        const modifiedData = responseData.results.map((pokemon, index) => ({
          ...pokemon,
          imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
        setPokemonData(modifiedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='pokemons'>
      <ShowPokemons pokemonData={pokemonData}/>
    </section>
  );
};

export default PokemonContainer;
