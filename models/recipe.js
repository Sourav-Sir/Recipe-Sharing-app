// models/recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: [{
    type: String,
    required: true
  }],
  instructions: {
    type: String,
    required: true
  },
  categories: [{
    type: String,
    required: true
  }],
  photo: {
    type: String  // Store photo URL
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
