import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Form from './Form';
import { Link, Route,  } from "react-router-dom";
import DisplayRecipe from './DisplayRecipe';



const Recipes = () => {
  const [recipes, setRecipes] = useState([])




  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((r) => r.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);
//want to make a link that will show full recipe and ingredients in a nested route
const fullRecipe = Object.keys(recipes).map((recipeID) => (
  <li key={recipeID}>
    <Link to={`/recipes/${recipeID}`}>{[recipeID]}</Link>
  </li>
))



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
      <Form faves={addToFaves} />
      <DisplayRecipe recipes={recipes} />
    </div>
  )
}

export default Recipes