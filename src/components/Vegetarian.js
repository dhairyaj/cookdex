import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 5;
    left: 50%;
    bottom: 5%;
    transform: translate(-50%, -5%);
    color: white;
    width: 90%;
    text-align: center;
    font-weight: 800;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
`;

function Vegetarian() {

  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getPopularRecipies();
  }, []);

  const getPopularRecipies = async () => {

    const check = localStorage.getItem("vegetarian");
    if(check) {
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
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
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