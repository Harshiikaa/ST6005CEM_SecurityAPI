const logger = require('../config/logger');

const logUserActivity = (req, res, next) => {
    const log = {
        userName: req.session?.user?.email || 'Guest',
        sessionId: req.cookies ? req.cookies["connect.sid"] || 'No Session' : 'No Session',
        url: req.originalUrl,
        method: req.method,
    };

    logger.info(log);

    next();
};

module.exports = logUserActivity;


// const logger = require('../config/logger');

// const logUserActivity = (req, res, next) => {
//     const log = {
//         userName: req.session?.user?.email || 'Guest',
//         sessionId: req.cookies["connect.sid"] || 'No Session',
//         url: req.originalUrl,
//         method: req.method,
//     };

//     logger.info(log);

//     next();
// };

// module.exports = logUserActivity;
