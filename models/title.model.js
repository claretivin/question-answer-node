const mongoose = require("mongoose");
const { Schema } = mongoose;

const titleSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title required"],
    unique: true,
  },
  created_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("titleschema", titleSchema);
