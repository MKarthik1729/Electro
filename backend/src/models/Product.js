const mongoose = require('mongoose');

// Define the schema for your data
const dataSchema = new mongoose.Schema({
  file: { type: Buffer, required: true }, // Image file (stored as a Buffer)
  cost: { type: Number, required: true }, // Cost of the item
  title: { type: String, required: true }, // Title of the item
  description: { type: String, required: true }, // Description of the item
  quantity: { type: Number, required: true }, // Quantity of the item
});

// Create a model from the schema
const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
