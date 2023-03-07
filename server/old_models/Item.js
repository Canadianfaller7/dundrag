const { Schema } = require("mongoose");

const weaponSchema = new Schema({});

const itemSchema = new Schema({
  item_name: { type: String, required: true },
  item_description: { type: String, required: true },
});

module.exports = itemSchema;