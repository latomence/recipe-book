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
        <form className="new-recipe-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)} 
                className="recipe-title-input" 
                placeholder="Add a new recipe..."
            />
            <button type="submit" className="recipe-create-button">Add</button>
        </form>
    );
}

export default RecipeForm;
