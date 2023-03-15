import React, { useState } from "react";

function RecipeDetail({ recipe, updateRecipe }) {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const [ingredients, setIngredients] = useState(recipe.ingredients.join(", "));

    function handleSubmit(event) {
        event.preventDefault();
        const updatedRecipe = {
            ...recipe,
            title,
            description,
            ingredients: ingredients.split(","),

        };
        updateRecipe(updatedRecipe);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea
                id="ingredients"
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
            />
            <button type="submit">Update Recipe</button>
        </form>
    );
}

export default RecipeDetail;    