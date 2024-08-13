const UserLog = require('../model/userLogModel');

const getUserLogs = async (req, res) => {
    try {
        const logs = await UserLog.find().sort({ timestamp: -1 }); // Fetch logs and sort by timestamp
        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch logs' });
    }
};

module.exports = { getUserLogs };
