const router = require('express').Router();

const PatientSchema = require('../models/patient');

router.get('/patient/:id', (req, res) => {
  PatientSchema.findById(req.params.id, (err, patient) => {
    if (err) return res.status(500).json(err);
    return res.json(patient);
  });
});

router.post('/patient', (req, res) => {
  PatientSchema.create(req.body, (err, patient) => {
    if (err) return res.status(500).json(err);
    return res.json(patient);
  });
});

module.exports = router;
