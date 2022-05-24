const mongoose = require("mongoose");

const PostSchema = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
};

module.exports = mongoose.model("Post", PostSchema);
