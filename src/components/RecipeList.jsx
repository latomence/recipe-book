import React from "react";

function RecipeList({ recipes, deleteRecipe, selectRecipe }) {
    return (
        <div className="recipe-book">
                {recipes.map((recipe) => (
                    <div className="recipe" key={recipe.id}>
                        <div className="recipe-title">{recipe.title}</div>
                        <div className="recipe-actions">
                            <button onClick={() => selectRecipe(recipe)} className="recipe-edit-button">Edit</button>
                            <button onClick={() => deleteRecipe(recipe.id)} className="recipe-delete-button">Delete</button>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default RecipeList;
