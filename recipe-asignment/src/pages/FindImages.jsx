//! uncontrolled component: This is an uncontrolled component as it does not manage any form input states.
import React, { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import TodoHeader from "../components/TodoHeader";

// Memoizing FindImages component as it's a pure component and to prevent unnecessary re-renders if parent component re-renders.
const MemoizedFindImages = React.memo(FindImages);
// Memoizing Footer component as it's likely a pure component and doesn't receive props, so it will always render the same output.
const MemoizedFooter = React.memo(Footer);

function FindImages() {
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      const recipes = response?.data.recipes;
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setRecipe(recipes[randomIndex]);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  const backPage = () => {
    window.location.href = "/todo";
  };
  

  return (
    <div>
      <TodoHeader />
      <div style={{display:'flex',  alignItems:'center', flexDirection:'column', gap:'20px', height:'100vh', width:'100%', overflow: 'auto'}}>
        <h1>Find Random Recipe</h1>
        <button class="cancel-button style-button" onClick={fetchRecipe}>Find Recipe</button>

        {recipe && (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent:'center', alignItems:'center' }}>
            <h2>{recipe.name}</h2>
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{ maxWidth: "300px", borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            />
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>Difficulty: {recipe.difficulty}</p>
          </div>
        )}
        <button onClick={backPage} class="cancel-button style-button" style={{marginBottom:'20px'}}>Back</button>
      </div>
      <MemoizedFooter />
    </div>
  );
}

// Exporting the memoized component instead of the original FindImages component.
export default MemoizedFindImages;
