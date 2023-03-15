import React from "react";

function RecipeList({ recipes, deleteRecipe, selectRecipe }) {
    return (
        <ul>
            {recipes.map((recipe) => (
                <li key={recipe.id}>
                    {recipe.title}
                    <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                    <button onClick={() => selectRecipe(recipe)}>Edit</button>
                </li>
            ))}
        </ul>
    );
}

export default RecipeList;
