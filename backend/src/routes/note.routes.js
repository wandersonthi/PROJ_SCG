const express = require('express');
const { createNote, getUserNotes } = require('../controllers/note.controller');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createNote);
router.get('/:userId', auth, getUserNotes);

module.exports = router;
