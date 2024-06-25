"use client";
import Link from "next/link";
import { fetchPokemonDetails } from "@/Utils/apis";
import { useRouter } from "next/navigation";

// export async function getServerSideProps({ params }) {
//   const pokemon = await fetchPokemonDetails(params.name);
//   return {
//     props: {
//       pokemon,
//     },
//   };
// }

export default function PokemonDetailPage({ name, pokemon }) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <Link href="/">
          <div className="text-blue-500">Home</div>
        </Link>
        <span className="mx-2"> &gt; </span>
        <span className="capitalize">{name}</span>
      </div>
      <div className="mt-4 w-80 ">
        <h1 className="text-3xl capitalize mb-2">{pokemon.name}</h1>
        <div className="p-10 bg-teal-500  h-80 rounded-">
          <img
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
            alt={pokemon.name}
            className="w-[100%] bg-transparent"
          />
        </div>
        <div className="p-5 bg-amber-500">
          <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
          <p>Stats:</p>
          <ul>
            {pokemon.stats.map((stat) => (
              <li
                key={stat.stat.name}
              >{`${stat.stat.name}: ${stat.base_stat}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
