const router = require('express').Router()
const favoriteController = require("../controllers/favoriteController")
const { authGuard } = require('../middleware/authGuard');


router.post('/addFavorite', authGuard, favoriteController.toggleFavorite)
router.get('/getFavoritesByUserID/:id', authGuard, favoriteController.getFavoritesByUserID)

module.exports = router;