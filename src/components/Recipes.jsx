import React, {useState, useEffect} from 'react'


const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((r) => r.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            {recipe.title} {recipe.image}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recipes