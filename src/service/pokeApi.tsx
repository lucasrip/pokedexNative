import axios from "axios";


  export async function fetchPokemon (numberItems:number,perRequest:number,setPokemonList:any){
    const pokemonUrl = (id:number) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonPromises = [];
    const minItem = numberItems + 1;
    const maxItem = numberItems + perRequest;
    
    for(let i = minItem ; i <= maxItem; i++)
    {
      pokemonPromises.push(axios.get(pokemonUrl(i)).then(response => response.data))
    }

     await Promise.all(pokemonPromises)
    .then(pokemons =>setPokemonList((previous:any) =>[...previous,...pokemons])) 
  }
