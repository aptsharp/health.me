const router = require('express').Router();

router.use('/api', require('./controllers/doctors'));
router.use('/api', require('./controllers/messages'));
router.use('/api', require('./controllers/patients'));
router.use('/api', require('./controllers/questions'));

module.exports = router;
