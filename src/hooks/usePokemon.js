// hooks/usePokemon.js
import { useState, useEffect } from 'react';
import { fetchPokemonTypes, fetchPokemonTypes2, fetchPokemons } from '../Utils/apis';

export function usePokemon() {
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [filterType, setFilterType] = useState([]);
  

  useEffect(() => {
    async function loadData() {
      const typesData = await fetchPokemonTypes();
      setTypes(typesData.results);

      const pokemonsData = await fetchPokemons();
      setPokemons(pokemonsData.results);
      setFilteredPokemons(pokemonsData.results);
    }
    loadData();
  }, []);


  useEffect(() => {
    let filtered = pokemons;
    if (selectedType) {
      const getTypeData = async (selectedType) => {
        const data = await fetchPokemonTypes2(selectedType)
        setFilterType(data?.pokemon?.flat(Infinity))
      }
       filtered = filterType.map(item => ({
        name: item.pokemon.name,
        url: item.pokemon.url
        }));  
      getTypeData(selectedType)
    }
    if (searchTerm) {
      filtered = filtered.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredPokemons(filtered);
  }, [searchTerm, selectedType, pokemons,filterType]);

  return {
    types,
    filteredPokemons,
    searchTerm,
    selectedType,
    setSearchTerm,
    setSelectedType
  };
}
