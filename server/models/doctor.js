const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: String,
  crm: String
});

module.exports = mongoose.model('Doctor', DoctorSchema);
