import React from "react";
import { Redirect } from "react-router-dom";

const Recipe = props => {
  // if recipe exist, run return details, otherwise return to homepage,have to put condition,otherwise if no data .recipe will error
  // useLocation hook returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.
  if (!props.location || !props.location.recipe) {
    return <Redirect to="/" />;
  }
  const { label, ingredients, calories, image } = props.location.recipe;
  return (
    <div className="recipe">
      <h1>{label}</h1>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
