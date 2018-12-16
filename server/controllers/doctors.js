const router = require('express').Router();

const DoctorSchema = require('../models/doctor');

router.get('/doctors', (req, res) => {
  DoctorSchema.find({}, (err, doctors) => {
    if (err) return res.status(500).json(err);
    return res.json(doctors);
  });
});

router.post('/doctor', (req, res) => {
  console.log(req);
  DoctorSchema.create(req.body, (err, doctor) => {
    if (err) return res.status(500).json(err);
    return res.json(doctor);
  });
});

module.exports = router;
