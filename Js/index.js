let recipeForm = document.getElementById('recipe-form');

let recipeName = document.getElementById('recipe-name');
let ingredients = document.getElementById('ingredients');
let steps = document.getElementById('steps');

let displayArea = document.getElementById('display-area');
let imageUrl = document.getElementById("imageUrl")

let recipes = [];

recipeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let enteredRecipeName = recipeName.value;
    let enteredIngredients = ingredients.value;
    let enteredSteps = steps.value;
    let enteredImageURL = imageUrl.value;

    let newRecipe = {
        name: enteredRecipeName,
        ingredients: enteredIngredients,
        steps: enteredSteps,
        imageUrl:enteredImageURL
    };

    

    recipes.push(newRecipe);   
    
    localStorage.setItem('recipes', JSON.stringify(recipes));

    if (localStorage.getItem('recipes')) {
        recipes = JSON.parse(localStorage.getItem('recipes'));
        // Display the loaded recipes on the page
         displayRecipe(newRecipe);

    } 

    console.log(recipes);

    enteredRecipeName = "";
    enteredIngredients = "";
    enteredSteps = "";


});


window.addEventListener('load', function() {
    if (localStorage.getItem('recipes')) {
        recipes = JSON.parse(localStorage.getItem('recipes'));
        // Display all recipes from localStorage
        recipes.forEach(recipe => displayRecipe(recipe));
    }
});



function displayRecipe(recipe,index) {
    // create a div for the new recipe
    let recipeDiv = document.createElement('div');
    recipeDiv.setAttribute("id", "newRecipeAdded");

    let addedRecipeDiv = document.getElementById("newRecipeAdded");

    // add more code here to include the recipe info
    recipeDiv.innerHTML = `<h2>${recipe.name} </h2>` ;
    if (recipe.imageUrl !== ""){
        recipeDiv.innerHTML += `<img src= ${recipe.imageUrl} ><br>`

    }
    recipeDiv.innerHTML += `<h3>${recipe.ingredients} </h3>`;
    recipeDiv.innerHTML += `<h4>${recipe.steps} </h4>` ;
    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    
    // add an event handler, as an inline function
    deleteButton.onclick = function() {
         
        deleteRecipe(index);
    };

    recipeDiv.appendChild(deleteButton);

    // add the new recipe div to the display area
    displayArea.appendChild(recipeDiv);

}



function deleteRecipe(index) {
    // Remove recipe from the array recipes
    recipes.splice(index, 1);

    // Refresh the Display
    displayArea.innerHTML = ""; 
    
    recipes.forEach((item, i)=>{
   
        displayRecipe(item,i)

    });

    localStorage.setItem('recipes', JSON.stringify(recipes));

}



/*
let recipeForm = document.getElementById('recipe-form');
let recipeName = document.getElementById('recipe-name');
let ingredients = document.getElementById('ingredients');
let steps = document.getElementById('steps');
let imageUrl = document.getElementById("imageUrl")
let displayArea = document.getElementById('display-area');
let recipes = [];

recipeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let enteredRecipeName = recipeName.value;
    let enteredIngredients = ingredients.value;
    let enteredSteps = steps.value;
    let enteredImageURL = imageUrl.value;

    let newRecipe = {
        name: enteredRecipeName,
        ingredients: enteredIngredients,
        steps: enteredSteps,
        imageUrl: enteredImageURL
    };

    recipes.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    // Display the newly added recipe
    displayRecipe(newRecipe);
});

// Load recipes from localStorage when the page loads
window.addEventListener('load', function() {
    if (localStorage.getItem('recipes')) {
        recipes = JSON.parse(localStorage.getItem('recipes'));
        // Display all recipes from localStorage
        recipes.forEach(recipe => displayRecipe(recipe));
    }
});

function displayRecipe(recipe) {
    // create a div for the new recipe
    let recipeDiv = document.createElement('div');
    recipeDiv.setAttribute("id", "newRecipeAdded");

    // add more code here to include the recipe info
    recipeDiv.innerHTML = `<h2>${recipe.name} </h2>`;
    if (recipe.imageUrl !== "") {
        recipeDiv.innerHTML += `<img src= ${recipe.imageUrl} ><br>`;
    }
    recipeDiv.innerHTML += `<h3>${recipe.ingredients} </h3>`;
    recipeDiv.innerHTML += `<h4>${recipe.steps} </h4>`;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    // add an event handler, as an inline function
    deleteButton.onclick = function() {
        // Find the index of the recipe in the recipes array
        let index = recipes.indexOf(recipe);
        // Remove the recipe from the array
        recipes.splice(index, 1);
        // Update localStorage
        localStorage.setItem('recipes', JSON.stringify(recipes));
        // Refresh the Display
        displayArea.innerHTML = "";
        // Display all remaining recipes
        recipes.forEach(recipe => displayRecipe(recipe));
    };
    recipeDiv.appendChild(deleteButton);

    // add the new recipe div to the display area
    displayArea.appendChild(recipeDiv);
}

*/