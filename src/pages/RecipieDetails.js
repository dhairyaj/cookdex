import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const RecipeWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  
  h2 {
    margin-bottom: 2rem;
  }

  h4{
    margin: 1rem 0;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    font-weight: 600;
  }

  ul{
    margin-top: 2rem;
  }
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 2rem;
  outline: none;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

function RecipieDetails() {

  let params = useParams();

  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState("instructions");

  const fetchRecipe = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const parsedData = await data.json();
    setRecipe(parsedData);
  };

  useEffect(() => {
    fetchRecipe();
  }, [params.id]);

  return (
    <RecipeWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <StyledButton className={active === "ingredients" ? "active" : ""} onClick={() => setActive("ingredients")}>Ingredients</StyledButton>
        <StyledButton className={active === "instructions" ? "active" : ""} onClick={() => setActive("instructions")}>Instructions</StyledButton>
        {active === "ingredients" && (
          <div>
            <ul>
              {recipe.extendedIngredients.map((item) =>
                <li key={item.id}>{item.original}</li>
              )}
            </ul>
          </div>
        )}
        {active === "instructions" && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h4>
            <h4 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h4>
          </div>
        )}
      </Info>
    </RecipeWrapper>
  )
}

export default RecipieDetails