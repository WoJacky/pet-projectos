import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './styleRecipe.css';

const RecipeMain = () => {
    const APP_ID = "ae9cacd7";
    const APP_KEY = "70aef20fca3f8e082a952405036ecafc";
    const [search, setSearch] = useState('');
    const [recepes, setRecepies] = useState([]);
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecepies();
    }, [query]);
    const getRecepies = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecepies(data.hits);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }
    return (
        <div className="recipe-app">
            <form onSubmit={getSearch} className="search-form">
                <input type="text" className="search-bar" value={search} onChange={updateSearch} />
                <button type="submit" className="search-button"> SEARCH</button>
            </form>
            <div className="recipes">
                {recepes.map(recepe => (
                    <Recipe
                        key={recepe.recipe.label}
                        title={recepe.recipe.label}
                        calories={recepe.recipe.calories}
                        image={recepe.recipe.image}
                        ingredients={recepe.recipe.ingredients} />
                ))}
            </div>
        </div>
    );
};
export default RecipeMain;