const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema(
  {
    quantity: {
      type: String,
      trim: true
    },
    unit: {
      type: String,
      trim: true
    },
    item: {
      type: String,
      required: true,
      trim: true
    },
    notes: {
      type: String,
      trim: true
    }
  },
  { _id: false }
);

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      enum: ['Mains', 'Sides', 'Sweets', 'Basics', 'Unsorted'],
      default: 'Unsorted'
    },

    ingredients: {
      type: [ingredientSchema],
      default: []
    },

    instructions: {
      type: [String],
      default: []
    },

    notes: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Recipe', recipeSchema);
