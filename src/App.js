import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
// import Recipes from "./Recipes";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const app_id = "a337db65";
  const api_key = "f7d91ea463667f4d882d3626ce3822c9";

  // useEffect similar componentDidMount, 2nd [] parameters empty only run once before api request; [sth] means only run if any changes
  // same as search if use useEffect;if[sth], means every time click sth even one letter, go to request api,  but hit is limited; only finish typing, request data from api
  useEffect(() => {
    recipesDetails();
  }, [query]);
  // query,only run onSummit button

  const recipesDetails = async () => {
    const api_url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${api_key}`;
    const response = await fetch(api_url);
    const data = await response.json();
    // console.log(data);
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  // this function for only summit search button then request can get the data; otherwise even one letter request one time api
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    // after user search, the input form back to "empty string"
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Welcome to Meal Heaven Restaurant</h1>
      <form className="search_form" onSubmit={getSearch}>
        <input
          className="search_input"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search_button" type="submit">
          Search
        </button>
      </form>
      <section>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
