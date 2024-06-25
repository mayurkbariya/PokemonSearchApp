// pages/index.js
"use client";
import { usePokemon } from "@/hooks/usePokemon";
import Link from "next/link";

export default function HomePage() {
  const {
    types,
    filteredPokemons,
    searchTerm,
    selectedType,
    setSearchTerm,
    setSelectedType,
  } = usePokemon();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border p-2 mr-4"
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokémon"
          className="border p-2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemons.map((pokemon) => (
          // <Link>
            <div className="border p-4 flex flex-col items-center">
              <img
                src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                alt={pokemon.name}
                className="w-32 h-32"
              />
              <div className="flex mt-2 items-center">
                <h3 className="text-lg mr-2 capitalize">{pokemon.name}</h3>
              </div>
              <div className="text-lg capitalize mt-2 text-blue-600"><Link  key={pokemon.name} href={`/pokemon/${pokemon.name}`}>Details →</Link></div>
            </div>
     
        ))}
      </div>
    </div>
  );
}
