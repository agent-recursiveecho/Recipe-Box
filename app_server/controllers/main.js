const Recipe = require('../../app_api/models/recipe');

const index = async (req, res) => {
  try {
    const mains = await Recipe.find({ category: 'Mains' })
      .sort({ title: 1 })
      .lean();

    res.render('index', {
      recipes: mains
    });
  } catch (err) {
    console.error('Error loading recipes:', err.message);
    res.status(500).send('Unable to load recipes.');
  }
};

const recipe = async (req, res) => {
  try {
    const selectedRecipe = await Recipe.findById(req.params.id).lean();

    if (!selectedRecipe) {
      return res.status(404).send('Recipe not found.');
    }

    res.render('recipe', {
      recipe: selectedRecipe
    });
  } catch (err) {
    console.error('Error loading recipe:', err.message);
    res.status(500).send('Unable to load recipe.');
  }
};

module.exports = {
  index,
  recipe
};
