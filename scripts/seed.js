const mongoose = require('mongoose');
require('dotenv').config();

const Recipe = require('../app_api/models/recipe');

const seedRecipes = [
  {
    title: 'Thai Coconut Chili Chicken',
    category: 'Mains',
    ingredients: [
      { item: 'Chicken' },
      { item: 'Coconut milk' },
      { item: 'Chili sauce' }
    ],
    instructions: [],
    notes: []
  },
  {
    title: 'Beef Stew',
    category: 'Mains',
    ingredients: [
      { item: 'Beef' },
      { item: 'Potatoes' },
      { item: 'Carrots' },
      { item: 'Beef broth' }
    ],
    instructions: [],
    notes: []
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to Recipe Box database.');

    await Recipe.deleteMany({
      title: { $in: seedRecipes.map(recipe => recipe.title) }
    });

    await Recipe.create(seedRecipes);

    console.log('Recipe Box seed complete.');
  } catch (err) {
    console.error('Seed error:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedDatabase();
