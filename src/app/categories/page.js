"use client";
import { useQuery } from "@tanstack/react-query";
import getCategories from "@/service/getCategories";
import Card from "@/UI/Card";
import Grid from "@/UI/Grid";
import Typography from "@/UI/Typography";
import { useRouter } from "next/navigation";
import Container from "@/UI/Container";
import Stack from "@/UI/Stack";
import SearchComponent from "@/UI/SearchInput";
import { useState } from "react";
import styled from "styled-components";
import SearchList from "@/components/categories/searchList";
import LoadingPage from "@/components/LoadingPage";

export default function Category() {

  const [isSearch, setIsSearch] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const Router = useRouter()

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCategories(),
    queryKey: ["categories"],
  });

  if (isLoading) return <LoadingPage />;
  if (isError) return <div>Sorry There was an Error</div>;

  const handleCategoriesClick = (item) => {
    Router.push(`/categories/${item.name}`, item, { shallow: true });
  }
  const onSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSearchBlur = () => {
    if (searchValue.length < 3) {
      setIsSearch(false)
    }
  }
  return (
    <Container>
      <Stack direction={"row"} style={{ justifyContent: 'space-between' }}>
        <Typography variant="h3" style={{ marginBottom: '10px' }}>Categories</Typography>
        <SearchComponent placeholder={"Search Pokemon"}
          onChange={onSearchChange}
          onFocus={() => { setIsSearch(true) }}
          onBlur={handleSearchBlur} 
          />
        {
          isSearch && <SearchContainer><SearchList value={searchValue} /></SearchContainer>
        }
      </Stack>

      <Grid style={{ marginTop: '20px' }}>
        {
          data.results?.map((res, ind) => (
            <Card onClick={() => { handleCategoriesClick(res) }} style={{ cursor: 'pointer', padding: '10px' }} key={ind}>
              <Typography variant="h5" style={{ color: '#546765' }}>{res.name.toUpperCase()}</Typography>
            </Card>
          ))
        }
      </Grid>
    </Container>
  );
}

const SearchContainer = styled.div`
  position:absolute;
  top:60px;
  left:0;
  width:100%;
  z-index:10;
  height: calc(100vh - 70px);
  background-color:#fff;
`

