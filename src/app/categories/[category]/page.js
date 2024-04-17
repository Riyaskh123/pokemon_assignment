"use client";
import { useQuery } from "@tanstack/react-query";
import Grid from "@/UI/Grid";
import Typography from "@/UI/Typography";
import PokemonCard from "@/components/pokemon/pokemonCard";
import { getRandomColor } from "@/Utils/randomColor";
import APICall from "@/service/APIService";
import { useParams, useRouter } from "next/navigation";
import Container from "@/UI/Container";
import { BaseURL } from "@/service/URLS";

export default function PokemonList() {
  const Router = useRouter()
  const params = useParams();
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await APICall(`${BaseURL}pokemon/?limit=100`),
    queryKey: [`pokemons${params.category}`],
  });

  if (isLoading) return "loading";
  if (isError) return <div>Sorry There was an Error</div>;
  return (
    <Container>
      <Typography variant="h2" style={{marginBottom:'10px'}}>Pokemons</Typography>
      <Grid >
        {
          data.results?.map((res, ind) => (
            <PokemonCard key={ind} values={res} category={params.category}
            style={{backgroundColor:getRandomColor(),cursor:'pointer'}}
            onClick={()=>{Router.push(`/categories/pokemons/${res.name}`, res, { shallow: true })}}/>
          ))
        }
      </Grid>
    </Container>
  );
}

