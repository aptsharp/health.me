const router = require('express').Router();

const MessageSchema = require('../models/message');

router.get('/messages/patient/:id', (req, res) => {
  MessageSchema.find({ patient: req.params.id })
    .sort('createdAt')
    .exec((err, messages) => {
    if (err) return res.status(500).json(err);
    return res.json(messages);
  });
});

router.post('/message', (req, res) => {
  MessageSchema.create(req.body, (err, message) => {
    if (err) return res.status(500).json(err);
    return res.json(message);
  });
});

module.exports = router;
