import Card from '@/UI/Card'
import Typography from '@/UI/Typography'
import APICall from '@/service/APIService';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import styled from 'styled-components'
import PokemonCardSkelton from '../skeletons/pokemonCardSkelton';

export default function PokemonCard({ values, category, ...props }) {
    const [onHover, setOnhover] = useState(false)
    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await APICall(values.url),
        queryKey: [`pokemonDetails${values.name}`],
    });

    if (isLoading) return <PokemonCardSkelton />;

    if (isError) return <div>Sorry There was an Error</div>;
    if (category) {
        if (data.types.some(value => value.type.name === category)) {
            return (
                <Card {...props}
                    onMouseOver={() => { setOnhover(true) }}
                    onMouseLeave={() => { setOnhover(false) }}
                >
                    <img alt={data.name} width={'120px'} height={"120px"}
                        src={onHover ? `${data.sprites.other.dream_world.front_default}` : `${data.sprites.other.home.front_default}`} />
                    <CardFooter>
                        <Typography variant='h4'>{data.name.toUpperCase()}</Typography>
                    </CardFooter>
                </Card>
            )
        }
    } else {
        return (
            <Card {...props}
                onMouseOver={() => { setOnhover(true) }}
                onMouseLeave={() => { setOnhover(false) }}
            >
                <img alt={data.name} width={'120px'} height={"120px"}
                    src={onHover ? `${data.sprites.other.dream_world.front_default}` : `${data.sprites.other.home.front_default}`} />
                <CardFooter>
                    <Typography variant='h4'>{data.name.toUpperCase()}</Typography>
                </CardFooter>
            </Card>
        )
    }
}

const CardFooter = styled.div`
    background-color: #eee9;
    display:flex;
    flex-direction : column;
    align-items:center;
    width: 100%;
    color : #345630;
`