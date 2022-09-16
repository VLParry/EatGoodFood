import {useState, useEffect} from 'react';



const Form = ({ onAddRecipe }) => {
const [newRecipes, setNewRecipes] = useState({
  title: "",
  ingredients: "",
  instructions: "",
  image: "",
  
})
console.log(newRecipes)

function handleChange(e){
  const { name, value } = e.target
  setNewRecipes((newRecipes) => ({
    ...newRecipes,
    [name] : value,
  }));
}

function handleSubmit(e){
  e.preventDefault()
  fetch("http://localhost:3000/recipes",{
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(
      {
        "title" : newRecipes.title,
        "ingredients" : newRecipes.ingredients,
        "instructions" : newRecipes.instructions,
        "image" : newRecipes.image,
      
      }
    )
  })
  .then((r) => r.json())
  .then((addedRecipe) => onAddRecipe(addedRecipe))
}

return (
    <section>
      <h1>Add a New Recipe Here:</h1>
<form onSubmit={handleSubmit}>
<p>
<label>
  Recipe Name:
  <input 
  type="text"
  placeholder='What is your recipe called?'
  name="title"
  value={newRecipes.title}
  onChange={handleChange}
  />
</label>
</p>
<p>
<label>
  Ingredients:
  <input 
  type="text"
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
  placeholder='Do you have a picture of your food?'
  name="image"
  value={newRecipes.image}
  onChange={handleChange}
  />
</label>
</p>

<button type="submit" color="blue">Add Your Recipe!</button>
      </form>
    </section>


  )
}

export default Form