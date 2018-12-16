const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: String,
  doctor: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Patient', PatientSchema);
