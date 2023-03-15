import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import './App.css'
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function addRecipe(recipe) {
    setRecipes([...recipes, recipe]);
  }

  function deleteRecipe(id) {
    const newRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(newRecipes);
  }

  function selectRecipe(recipe) {
    setSelectedRecipe(recipe);
  }

  function updateRecipe(updatedRecipe) {
    const newRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipes(newRecipes);
    setSelectedRecipe(null);
  }

  return (
    <div className="main">
      <h1 className="main-title">Recipe Book</h1>

      {/* Recipe creation */}
      {selectedRecipe ? (
        <RecipeDetail recipe={selectedRecipe} updateRecipe={updateRecipe} />
      ) : (
        <>
          <RecipeForm addRecipe={addRecipe} />
          <RecipeList
            recipes={recipes}
            deleteRecipe={deleteRecipe}
            selectRecipe={selectRecipe}
          />
        </>
      )}
    </div>
  );
}

export default App;