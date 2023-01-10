import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width: 100%;
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
          <Card key={recipie.id}>
            <Link to={"/recipe/" + recipie.id}>
              <img src={recipie.image} alt={recipie.title} />
              <h4>{recipie.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

export default Cuisine