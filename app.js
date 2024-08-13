

// // importing important packages
// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./database/db");
// const cors = require('cors');
// const multiparty = require('connect-multiparty');
// const cloudinary = require('cloudinary');
// const https = require('https');
// const path = require('path');
// const fs = require('fs');

// const app = express();



// // dot env config
// dotenv.config();

// const corsPolicy = {
//     origin: true,
//     credentials: true,
//     optionSuccessStatus: 200

// }
// app.use(cors(corsPolicy))
// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));

// // multiplarty middle ware
// app.use(multiparty())
// connectDB();


// // cloudinary config
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });


// const sslServer = https.createServer(
//     {
//         key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
//         cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
//     }, app)
// sslServer.listen(3443, () => console.log('secure server on 3443 port'))



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
//     console.log(`Server is running on ${PORT}`);

// })

// module.exports = app;

// // importing important packages
// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./database/db");
// const cors = require('cors');
// const multiparty = require('connect-multiparty');
// const cloudinary = require('cloudinary');
// const https = require('https');
// const path = require('path');
// const fs = require('fs');

// const app = express();



// // dot env config
// dotenv.config();

// const corsPolicy = {
//     origin: true,
//     credentials: true,
//     optionSuccessStatus: 200

// }
// app.use(cors(corsPolicy))
// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));

// // multiplarty middle ware
// app.use(multiparty())
// connectDB();


// // cloudinary config
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

// // json middleware (to accept json data )
// app.use(express.json());

// // Route for homepage.
// app.get("/", (req, res) => {
//     res.send("Homepage.");
// });

// // API End points

// app.use('/api/user', require('./routes/userRoutes'))
// app.use('/api/product', require('./routes/productRoutes'))
// app.use('/api/category', require('./routes/categoryRoutes'))
// app.use('/api/favorite', require('./routes/favoriteRoutes'))
// app.use('/api/shoppingBag', require('./routes/shoppingBagRoutes'))
// app.use('/api/shippingInfo', require('./routes/shippingInfoRoutes'))
// app.use('/api/order', require('./routes/orderRoutes'))
// app.use('/api/rating', require('./routes/ratingRoutes'))



// module.exports = app;