import {useState, useEffect} from 'react';



const Form = ({ onAddRecipe }) => {
const [newRecipes, setNewRecipes] = useState({
  title: "",
  ingredients: "",
  instructions: "",
  image: "",
  correctIndex: 0,
})

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
        "correctIndex" : newRecipes.correctIndex
      }
    )
  })
  .then((r) => r.json())
  .then((addedRecipe) => onAddRecipe(addedRecipe))
}
  return (
    
<div> </div>
  )
}

export default Form