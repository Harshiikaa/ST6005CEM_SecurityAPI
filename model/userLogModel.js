const mongoose = require('mongoose');

const userLogSchema = new mongoose.Schema({
    userName: String,
    sessionId: String,
    url: String,
    method: String,
    timestamp: Date
});

const UserLog = mongoose.model('UserLog', userLogSchema);

module.exports = UserLog;
