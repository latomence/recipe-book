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
        <div className="recipe-edit-form">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="recipe-edit-title-input" 
                    placeholder="titre"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} 
                />
                <textarea 
                    id="description"
                    placeholder="description"
                    rows={10} 
                    className="recipe-edit-description-input" 
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <h2 className="recipe-ingredients-title">Ingredients</h2>
                <textarea
                    className="recipe-ingredient"
                    id="ingredients"
                    placeholder="ingredients"
                    value={ingredients}
                    onChange={(event) => setIngredients(event.target.value)}
                />
                <div className="recipe-edit-actions">
                    <button type="submit" className="recipe-edit-save-button">Save</button>
                    <button className="recipe-edit-cart-button">Add to shopping list</button>
                </div>
            </form>
        </div>
    );
}

export default RecipeDetail;    