import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Info, RecipeWrapper, StyledButton } from '../components/StyledItems';

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