// importing important packages
const express = require("express");
const dotenv = require("dotenv");
require('dotenv').config(); // Load environment variables from .env file

const connectDB = require("./database/db");
const cors = require('cors');
const multiparty = require('connect-multiparty');
const cloudinary = require('cloudinary');
const session = require('express-session');  // <-- Import express-session
const app = express();
const helmet = require('helmet');
const logger = require("./config/logger");
const cookieParser = require('cookie-parser');
// Apply cookie-parser middleware
const https = require('https');
const path = require('path');
const fs = require('fs');
const logUserActivity = require('./middleware/logUserActivity');
const key = fs.readFileSync('./cert/decrypt.key');
const cert = fs.readFileSync('./cert/local.crt');
const server = https.createServer({ key, cert }, app);

const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(cookieParser());

app.use(helmet());

app.use(limiter);


// Other middlewares like session, body parser, etc.
app.use(logUserActivity);
// const csurf = require('csurf');
// const csrfProtection = csurf({ cookie: true });
// app.use(csrfProtection);

// dot env config
dotenv.config();

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
  }, app)
sslServer.listen(3443, () => console.log('secure server on 3443 port'))



// CORS policy
const corsPolicy = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200
};
app.use(cors(corsPolicy));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24
  }
}));

app.use((req, res, next) => {
  logger.info(req.body);
  let oldSend = res.send;
  res.send = function (data) {
    logger.info(JSON.parse(data));
    oldSend.apply(res, arguments);
  }
  next();
})

// multiplarty middleware 
app.use(multiparty());
connectDB();

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// json middleware (to accept json data)
app.use(express.json());

// define port
const PORT = process.env.PORT;

// API End points
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/product', require('./routes/productRoutes'));
app.use('/api/category', require('./routes/categoryRoutes'));
app.use('/api/favorite', require('./routes/favoriteRoutes'));
app.use('/api/shoppingBag', require('./routes/shoppingBagRoutes'));
app.use('/api/shippingInfo', require('./routes/shippingInfoRoutes'));
app.use('/api/order', require('./routes/orderRoutes'));
app.use('/api/rating', require('./routes/ratingRoutes'));

// run the server
app.listen(PORT, () => {
  logger.error(`Server is running on ${PORT}`);
});

module.exports = app;

