import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="main">
      <h1 className="main-title">Recipe Book</h1>

      {/* Recipe creation */}
      <form className="new-recipe-form">
        <input type="text" className="recipe-title-input" placeholder="Add a new recipe..."/>
        <button className="recipe-create-button">Add</button>
      </form>

      
    </div>
  )
}

export default App
