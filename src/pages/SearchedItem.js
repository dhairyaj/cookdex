import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Grid, RecipeCard } from '../components/StyledItems';

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
          <RecipeCard key={recipie.id}>
            <Link to={"/recipe/" + recipie.id}>
              <img src={recipie.image} alt={recipie.title} />
              <h4>{recipie.title}</h4>
            </Link>
          </RecipeCard>
        )
      })}
    </Grid>
  )
}

export default SearchedItem