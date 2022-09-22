import {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const formStyles = {
  color: 'brown',
    width: '500px',
    textAlign: 'center'
}
const sectionStyles ={
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

const Form = () => {
const [newRecipes, setNewRecipes] = useState({
  title: "",
  ingredients: "",
  instructions: "",
  image: "",
  
})
//debugger
const navigate = useNavigate()

const handleChange = (e) => {
  const { name, value } = e.target
  setNewRecipes((previousData) => ({
    ...previousData,
    [name] : value,
  }));
}

const handleSubmit= (e)=> {
  e.preventDefault();
  fetch("http://localhost:3000/recipes", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
      "Accepts": "application.json"
    },
    body: JSON.stringify(newRecipes)
  })

   // debugger
  .then(() => navigate('/recipes'))
}

return (
    <section style={sectionStyles}>
       
            
          
      <h1>Add a New Recipe Here:</h1>
      
<form onSubmit={handleSubmit} style={formStyles}>
<div >

<label>
  Recipe Name:
  <input 
  type="text"
  style={{width: '500px'}}
  placeholder='What is your recipe called?'
  name="title"
  value={newRecipes.title}
  onChange={handleChange}
  />
</label>

</div>
<p>
<label>
  Ingredients:
  <input 
  type="text"
  style={{width: '500px'}}
  placeholder='What do we need to make your recipe?'
  name="ingredients"
  value={newRecipes.ingredients}
  onChange={handleChange}
  />
</label>
</p>
<p>
<label>
  Instructions:
  <input 
  type="text"
  style={{width: '500px'}}
  placeholder='How can we make this ourselves?'
  name="instructions"
  value={newRecipes.instructions}
  onChange={handleChange}
  />
</label>
</p>
<p>
<label>
  Image:
  <input 
  type="text"
  style={{width: '500px'}}
  placeholder='Do you have a picture of your food?'
  name="image"
  value={newRecipes.image}
  onChange={handleChange}
  />
</label>
</p>

<button type="submit" style={{color: "darkgreen", backgroundColor: "#86d46a", fontStyle: "oblique"}}>Add Your Recipe!</button>
      </form>
      
    </section>


  )
}

export default Form