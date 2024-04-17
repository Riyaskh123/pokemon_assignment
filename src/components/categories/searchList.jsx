import Grid from '@/UI/Grid';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import PokemonCard from '../pokemon/pokemonCard';
import LoadingPage from '../LoadingPage';
import APICall from '@/service/APIService';
import { getRandomColor } from '@/Utils/randomColor';
import { useRouter } from 'next/navigation';

export default function SearchList({ value }) {
    const Router = useRouter()
    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await APICall('https://pokeapi.co/api/v2/pokemon/?limit=100'),
        queryKey: [`pokemonsList`],
    });

    if (isLoading) return <LoadingPage />;
    if (isError) return <div>Sorry There was an Error</div>;

    const filterValue = data.results?.filter(item => {
        if (value.length > 2) {
            return (item.name.toLowerCase().includes(value.toLowerCase())) 
        }
    }
    )

    return (
        <Grid>
            {
                filterValue.map((item, ind) => (
                    <PokemonCard key={ind} values={item}
                        style={{ backgroundColor: getRandomColor(), cursor: 'pointer' }}
                        onClick={() => { Router.push(`/categories/pokemons/${item.name}`, item, { shallow: true }) }}
                    />
                ))
            }
        </Grid>
    )
}
