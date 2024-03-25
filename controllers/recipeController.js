// controllers/recipeController.js
const Recipe = require('../models/recipe');

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json({ recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json({ recipes });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json({ recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json({ recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Search recipes by keyword and/or category
exports.searchRecipes = async (req, res) => {
  try {
    const { keyword, category } = req.query;
    const query = {};
    if (keyword) {
      query.$text = { $search: keyword };
    }
    if (category) {
      query.categories = category;
    }
    const recipes = await Recipe.find(query);
    res.json({ recipes });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
