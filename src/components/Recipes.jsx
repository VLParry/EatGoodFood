import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import RecipeCard from './RecipeCard'





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
 

      <Grid container spacing={2} 
      style={{
        color: 'darkgreen', 
        fontFamily: 'Helvetica-Bold', 
        fontSize: "25px",
        
        }}>
        {recipes.map(recipe => (
         <RecipeCard key={recipe.id} title={recipe.title} image={recipe.image} />
        ))}
      </Grid>
      
     
      
    </div>
  )
}

export default Recipes