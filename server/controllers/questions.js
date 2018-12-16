const router = require('express').Router();

const QuestionSchema = require('../models/question');

router.post('/question', (req, res) => {
  QuestionSchema.create(req.body, (err, question) => {
    if (err) return res.status(500).json(err);
    return res.json(question);
  });
});

module.exports = router;
