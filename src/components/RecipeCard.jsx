import Grid from '@mui/material/Grid';

const RecipeCard = ({ title, image }) => {
 return  <Grid item xs={4}>
 {title}
 <img src={image} style={{width:"100px",display:"block"}} />
 
</Grid>
}

export default RecipeCard