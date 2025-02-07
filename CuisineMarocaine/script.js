import { addRecipeToDB, getRecipesFromDB, deleteRecipeFromDB } from "./db.js";

document.addEventListener("DOMContentLoaded", () => {
  loadRecipes();
});

document.getElementById("add-recipe").addEventListener("click", () => {
  const name = document.getElementById("recipe-name").value.trim();
  const ingredients = document
    .getElementById("recipe-ingredients")
    .value.trim();

  if (name && ingredients) {
    const newRecipe = { name, ingredients: ingredients.split(",") };
    addRecipeToDB(newRecipe, () => {
      document.getElementById("recipe-name").value = "";
      document.getElementById("recipe-ingredients").value = "";
      loadRecipes();
    });
  } else {
    alert("Veuillez remplir les champs.");
  }
});

function loadRecipes() {
  getRecipesFromDB((recipes) => {
    const list = document.getElementById("recipe-list");
    list.innerHTML = ""; // Réinitialise la liste avant de recharger

    recipes.forEach((recipe) => {
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <span>
          <strong>${recipe.name}</strong>: ${recipe.ingredients.join(", ")}
        </span>
        <button class="btn btn-danger btn-sm delete-recipe" data-id="${
          recipe.id
        }">Supprimer</button>
      `;
      list.appendChild(li);
    });

    // Ajouter les listeners pour les boutons de suppression
    document.querySelectorAll(".delete-recipe").forEach((button) => {
      button.addEventListener("click", (event) => {
        const id = Number(event.target.getAttribute("data-id"));
        deleteRecipeFromDB(id, loadRecipes);
      });
    });
  });
}
