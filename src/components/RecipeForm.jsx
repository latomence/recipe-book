import React, { useState } from "react";

function RecipeForm({ addRecipe }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const recipe = {
            id: Date.now(),
            title,
            description,
            ingredients: ingredients.split(","),
        };
        addRecipe(recipe);
        setTitle("");
        setDescription("");
        setIngredients("");
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
            <button type="submit">Add Recipe</button>
        </form>
    );
}

export default RecipeForm;
