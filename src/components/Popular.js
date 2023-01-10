import React, { useEffect, useState } from 'react'

function Popular() {

    const [popular, SetPopular] = useState([]);

    useEffect(() => {
        getPopularRecipies();
    }, []);

    const getPopularRecipies = async () => {
        const apiData = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await apiData.json();
        SetPopular(data.recipes);
    };

  return (
    <div>
      {popular.map((recipe) => {
        return(
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Popular