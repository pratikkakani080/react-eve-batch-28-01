import React, { useEffect, useState } from "react";
import Card from "../card";
import "./recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState({});
  console.log("recipes**", recipes.recipes  );

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setRecipes(res);
      });
  }, []);

  return <div className="recipesContainer">
    { 
        recipes.recipes?.map((el, i) => {
            return (
                <div key={i}>
                    <Card el={el} />
                </div>
            )
        })
    }
  </div>;
}

export default Recipes;
