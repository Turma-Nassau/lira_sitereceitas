class RecipeController {
    constructor(recipes) {
      this.recipes = recipes;
    }
  
    getAllRecipes(req, res) {
      res.json(this.recipes);
    }
  
    getRecipeById(req, res) {
      const recipe = this.recipes.find((r) => r.id === parseInt(req.params.id));
      if (!recipe) {
        return res.status(404).send("Receita não encontrada.");
      }
      res.json(recipe);
    }
  
    createRecipe(req, res) {
      const { title, ingredients, instructions } = req.body;
      if (!title || !ingredients || !instructions) {
        return res.status(400).send("Título, ingredientes e instruções da receita são obrigatórios.");
      }
      const id = this.recipes.length + 1;
      const newRecipe = { id, title, ingredients, instructions };
      this.recipes.push(newRecipe);
      res.status(201).json(newRecipe);
    }
  
    updateRecipeById(req, res) {
      const { title, ingredients, instructions } = req.body;
      const recipe = this.recipes.find((r) => r.id === parseInt(req.params.id));
      if (!recipe) {
        return res.status(404).send("Receita não encontrada.");
      }
      recipe.title = title;
      recipe.ingredients = ingredients;
      recipe.instructions = instructions;
      res.json(recipe);
    }
  
    deleteRecipeById(req, res) {
      const recipeIndex = this.recipes.findIndex((r) => r.id === parseInt(req.params.id));
      if (recipeIndex === -1) {
        return res.status(404).send("Receita não encontrada.");
      }
      this.recipes.splice(recipeIndex, 1);
      res.sendStatus(204);
    }
  }
  
  module.exports = RecipeController;
  