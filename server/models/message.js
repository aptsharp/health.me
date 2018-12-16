const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: String,
  patient: mongoose.Schema.Types.ObjectId,
  sender: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);
