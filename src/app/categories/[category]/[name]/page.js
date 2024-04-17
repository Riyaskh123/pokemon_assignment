"use client";
import { useQuery } from "@tanstack/react-query";
import Box from "@/UI/Box";
import Card from "@/UI/Card";
import Typography from "@/UI/Typography";
import APICall from "@/service/APIService";
import { useParams } from "next/navigation";
import Chart from "@/components/pokemon/pokemonDetails/chart";
import Stack from "@/UI/Stack";
import Container from "@/UI/Container";
import { useState } from "react";
import styled from "styled-components";
import LoadingPage from "@/components/LoadingPage";

export default function Home() {

  const [primeImage, setPrimeImage] = useState()
  const params = useParams()
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await APICall(`https://pokeapi.co/api/v2/pokemon/${params.name}`),
    queryKey: [`pokemonDetail${params.name}`],
  });

  if (isLoading) return <LoadingPage/>;
  if (isError) return <div>Sorry There was an Error</div>;

  const handleImageClick = (image) => {
    setPrimeImage(image)
  }
  return (
    <Container>
      <Typography variant="h2" style={{ marginBottom: '10px' }}>{data.name.toUpperCase()}</Typography>
      <Box style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box style={{ width: '200px', height: '200px', justifyContent: "center", alignItems: 'center' }}>
          <img width="100%" height={"100%"} src={primeImage ? primeImage : data.sprites.other.dream_world.front_default} />
        </Box>
        <Stack direction="row" spacing={15} >
          <Card onClick={() => handleImageClick(data.sprites.other.dream_world.front_default)} style={{ cursor: 'pointer' }}>
            <img width={"70px"} height={"70px"} src={data.sprites.other.dream_world.front_default} />
          </Card>
          <Card onClick={() => handleImageClick(data.sprites.other["official-artwork"].front_default)} style={{ cursor: 'pointer' }}>
            <img width={"70px"} height={"70px"} src={data.sprites.other["official-artwork"].front_default} />
          </Card >
          <Card onClick={() => handleImageClick(data.sprites.back_default)} style={{ cursor: 'pointer' }}>
            <img width={"70px"} height={"70px"} src={data.sprites.back_default} />
          </Card>
        </Stack>
      </Box>
      <ChartContainer>
        <Chart
          title={"Skill"}
          label={data.stats?.map((item) => (item.stat.name))}
          data={data.stats?.map((item) => (item.base_stat))}
        />
      </ChartContainer>
      <Stack spacing={20}>
        <Stack direction={"row"} spacing={20} style={{ alignItems: 'center' }}>
          <Typography variant="h6" style={{ color: '#982712' }}>Abilities </Typography>
          <Stack direction={"row"} spacing={10}>
            {
              data.abilities?.map((item) => <Card style={{ padding: '5px' }}>{item.ability.name}</Card>)
            }
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={20} style={{ alignItems: 'center' }}>
          <Typography variant="h6" style={{ color: '#982712' }}>Types </Typography>
          <Stack direction={"row"} spacing={10}>
            {
              data.types?.map((item) => <Card style={{ padding: '5px' }}>{item.type.name}</Card>)
            }
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={20} style={{ alignItems: 'center' }}>
          <Typography variant="h6" style={{ color: '#982712' }}>Height </Typography>
          <Stack direction={"row"} spacing={10}>
            <Card style={{ padding: '5px' }}>{data.height}</Card>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={20} style={{ alignItems: 'center' }}>
          <Typography variant="h6" style={{ color: '#982712' }}>Weight </Typography>
          <Stack direction={"row"} spacing={10}>
            <Card style={{ padding: '5px' }}>{data.weight}</Card>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

const ChartContainer = styled.div`
  padding-left: 100px;
  padding-right: 100px;

  @media (max-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 480px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
