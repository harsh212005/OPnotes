const express = require('express');
const { registerUser,authUser,updatUserProfile } = require('../controllers/userControllers');
const {protect} = require("../middlewares/authMiddleware");

const router = express.Router()

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').post(protect,updatUserProfile);

module.exports = router;