const mongoose = require('mongoose');

const gifteeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gift: { type: String, required: true },
  nice: Boolean,
});

const Giftee = mongoose.model('Giftee', gifteeSchema);

module.exports = Giftee;
