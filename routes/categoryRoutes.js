const router = require('express').Router();
const categoryController = require("../controllers/categoryController");
const { authGuardAdmin } = require('../middleware/authGuard');


// Create Category API
router.post('/createCategory', categoryController.createCategory)

// Get all Categories API
router.get("/getCategories", categoryController.getAllCategories)

router.delete("/deleteCategory/:id", categoryController.deleteCategory)


module.exports = router;