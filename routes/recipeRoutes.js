// routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/recipes', recipeController.createRecipe);
router.get('/recipes', recipeController.getAllRecipes);
router.get('/recipes/:id', recipeController.getRecipeById);
router.put('/recipes/:id', recipeController.updateRecipe);
router.delete('/recipes/:id', recipeController.deleteRecipe);
router.get('/search', recipeController.searchRecipes);

module.exports = router;
