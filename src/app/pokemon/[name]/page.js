

import { fetchPokemonDetails } from '@/Utils/apis';
import PokemonDetailPage from '@/components/pokemonDetail';


export default async  function PokemonDetail({params}) {
    const pokemon = await fetchPokemonDetails(params.name);
  return (
    <>
    <PokemonDetailPage name={params.name} pokemon={pokemon}/>
    </>
  );
}
