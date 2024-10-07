import { recipes } from "./data-q2.js";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>

      {recipes.map((recipe) => (
        <ul key={recipe.id}>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}
