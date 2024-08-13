const express = require('express');
const { getUserLogs } = require('../controllers/userLogController');
const { authGuardAdmin } = require('../middleware/authGuard');
const router = express.Router();

router.get('/logs', authGuardAdmin, getUserLogs);

module.exports = router;
