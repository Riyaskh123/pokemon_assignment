import Grid from '@/UI/Grid';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import PokemonCard from '../pokemon/pokemonCard';

export default function SearchList({ value }) {
    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await APICall('https://pokeapi.co/api/v2/pokemon/?limit=100'),
        queryKey: [`pokemons`],
    });

    if (isLoading) return "loading";
    if (isError) return <div>Sorry There was an Error</div>;
    
    return (
        <Grid>
            {
                data.result?.map((item,ind) => {
                    <PokemonCard key={ind} values={item}/>
                })
            }
        </Grid>
    )
}
