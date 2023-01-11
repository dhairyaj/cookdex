import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { Wrapper, Card, Gradient } from './StyledItems';

function Vegetarian() {

  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getPopularRecipies();
  }, []);

  const getPopularRecipies = async () => {

    const check = localStorage.getItem("vegetarian");
    if (check) {
      setVegetarian(JSON.parse(check));
    } else {
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`
      const apiData = await fetch(url);
      const data = await apiData.json();
      localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
      setVegetarian(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem"
        }}>
          {vegetarian.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

export default Vegetarian