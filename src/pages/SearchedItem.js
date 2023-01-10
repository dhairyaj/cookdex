import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;

function SearchedItem() {

    const [searchedRecipies, setSearchedrecipies] = useState([]);

    let params = useParams();

    useEffect(() => {
        getSearchedRecipie(params.search);
    }, [params.search]);

    const getSearchedRecipie = async (name) => {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=12`;
        const apiData = await fetch(url);
        const recipies = await apiData.json();
        setSearchedrecipies(recipies.results);
    };
    return (
        <Grid>
            {searchedRecipies.map((recipie) => {
                return (
                    <Card key={recipie.id}>
                        <img src={recipie.image} alt={recipie.title} />
                        <h4>{recipie.title}</h4>
                    </Card>
                )
            })}
        </Grid>
    )
}

export default SearchedItem