// utils/api.js
export async function fetchPokemonTypes() {
    const response = await fetch(`https://pokeapi.co/api/v2/type`);
    return response.json();
  }
  
  export async function fetchPokemonTypes2(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${name}`);
    return response.json();
  }
  
  export async function fetchPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    return response.json();
  }
  
  export async function fetchPokemonDetails(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.json();
  }
  