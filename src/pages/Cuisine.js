import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Grid, CuisineCard } from '../components/StyledItems';

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisineRecipies = async (name) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`;
    const apiData = await fetch(url);
    const recipies = await apiData.json();
    setCuisine(recipies.results);
  };

  useEffect(() => {
    getCuisineRecipies(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((recipie) => {
        return (
          <CuisineCard key={recipie.id}>
            <Link to={"/recipe/" + recipie.id}>
              <img src={recipie.image} alt={recipie.title} />
              <h4>{recipie.title}</h4>
            </Link>
          </CuisineCard>
        )
      })}
    </Grid>
  )
}

export default Cuisine