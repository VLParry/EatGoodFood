import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Form from './Form';





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
          <Grid item xs={4} key={recipe.id}>
            {recipe.title}
            <img src={recipe.image} style={{width:"100px",display:"block"}} />
            
          </Grid>
        ))}
      </Grid>
     
      
    </div>
  )
}

export default Recipes