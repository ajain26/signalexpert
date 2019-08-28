const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  services: { type: [] , required: true },
});

module.exports = mongoose.model('Services', postSchema);
