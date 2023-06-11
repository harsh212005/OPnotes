const express = require('express');
const { getNotes } = require('../controllers/noteControllers');
const {createNot} = require('../controllers/noteControllers');
const {getNoteById} =  require('../controllers/noteControllers');
const {UpdateNote} = require('../controllers/noteControllers');
const {DeleteNote} = require('../controllers/noteControllers');

const {protect} = require("../middlewares/authMiddleware");



const router = express.Router()

router.route('/').get(protect,getNotes);
router.route("/create").post(protect,createNot);
// router.route('create').post()
router.route('/:id').get(getNoteById).put(protect,UpdateNote).delete(protect,DeleteNote);
module.exports = router;