// importing important packages
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const cors = require('cors');
const multiparty = require('connect-multiparty');
const cloudinary = require('cloudinary');
const session = require('express-session');  // <-- Import express-session
const app = express();
const helmet = require('helmet');
app.use(helmet());
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);
const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });
app.use(csrfProtection);

// dot env config
dotenv.config();

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
  secret: process.env.SESSION_SECRET,  // <-- Use the session secret from .env
  resave: false,  // <-- Prevents resaving session if nothing has changed
  saveUninitialized: false,  // <-- Only saves a session if something is stored in it
  cookie: {
    secure: false,  // <-- Set to true if using HTTPS
    maxAge: 1000 * 60 * 60 * 24  // <-- 1 day, set as needed
  }
}));

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
  console.log(`Server is running on ${PORT}`);
});

module.exports = app;



// // importing important packages
// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./database/db");
// const cors = require('cors');
// const multiparty = require('connect-multiparty')
// const cloudinary = require('cloudinary');
// const app = express();



// // dot env config
// dotenv.config();

// const corsPolicy = {
//   origin: true,
//   credentials: true,
//   optionSuccessStatus: 200

// }
// app.use(cors(corsPolicy))
// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));

// // multiplarty middle ware
// app.use(multiparty())
// connectDB();


// // cloudinary config
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// });

// // json middleware (to accept json data )
// app.use(express.json());

// // define port
// const PORT = process.env.PORT;


// // API End points

// app.use('/api/user', require('./routes/userRoutes'))
// app.use('/api/product', require('./routes/productRoutes'))
// app.use('/api/category', require('./routes/categoryRoutes'))
// app.use('/api/favorite', require('./routes/favoriteRoutes'))
// app.use('/api/shoppingBag', require('./routes/shoppingBagRoutes'))
// app.use('/api/shippingInfo', require('./routes/shippingInfoRoutes'))
// app.use('/api/order', require('./routes/orderRoutes'))
// app.use('/api/rating', require('./routes/ratingRoutes'))



// //run the server
// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);

// })

// module.exports = app;


// const app = require("./app");
// const port = process.env.PORT;
// const fs = require('fs');
// const key = fs.readFileSync('./cert/decrypt.key');
// const cert = fs.readFileSync('./cert/local.crt');


// const https = require('https');
// const server = https.createServer({ key, cert }, app);


// server.listen(port, () => {
//   console.log(`Server is running at port ${port}`);
// });