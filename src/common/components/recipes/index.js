import React, { useEffect, useState } from "react";
import Card from "../card";
import "./recipes.css";
import { useNavigate } from "react-router";

function Recipes() {
  const [recipes, setRecipes] = useState({});
  const [filteredRecipes, setFilteredRecipes] = useState({});
  const navigate = useNavigate()
  console.log("recipes**", recipes.recipes);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setRecipes(res);
        setFilteredRecipes(res);
      });
  }, []);

  const handleFilter = () => {
    setRecipes({
      ...filteredRecipes,
      recipes: filteredRecipes.recipes.filter((el) => el.rating > 4.5),
    });
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="rating"
          name="rating"
          value="> 3"
          onChange={() => handleFilter()}
        ></input>
        <label for="rating">greater than 3</label>
      </div>
      <div className="recipesContainer">
        {recipes.recipes?.map((el, i) => {
          return (
            <div key={i} onClick={() => {
              navigate('/card-details/' + el.name + '/' + el.id)
            }}>
              <Card el={el} index={i} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Recipes;
