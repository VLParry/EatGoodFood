import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Favorites from './Favorites';
import { Link, Route,  } from "react-router-dom";
import DisplayRecipe from './DisplayRecipe';



const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  const [favorites, setFavorites] = useState([])



  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((r) => r.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

const fullRecipe = Object.keys(recipes).map((recipeID) => (
  <li key={recipeID}>
    <Link to={`/recipes/${recipeID}`}>{[recipeID]}</Link>
  </li>
))

  const addToFaves = (recipe) => {
    if(!favorites.includes(recipe)){
      const updateFaves = [...favorites, recipe]
      setFavorites(updateFaves)
    }
  }

  return (
    <div>
      <Grid container spacing={2}>
        {recipes.map(recipe => (
          <Grid item xs={4} key={recipe.id}>
            {recipe.title}
            <img src={recipe.image} style={{width:"100px",display:"block"}} />
            
          </Grid>
        ))}
      </Grid>
      <Favorites faves={addToFaves} />
      <DisplayRecipe recipes={recipes} />
    </div>
  )
}

export default Recipes