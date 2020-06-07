const express = require('express');
const router = express.Router();

// @route      GET api/contacts
// @desc        Get users contacts
// @access      private
router.get('/', (req, res) => {
  res.send('get all contacts');
});

// @route      POST api/contacts
// @desc        Add new contacts
// @access      private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route      PUT api/contacts/:id
// @desc        update contact
// @access      private
router.put('/:id', (req, res) => {
  res.send('update contact');
});

// @route      DELETE api/contacts/:id
// @desc        delete contact
// @access      private
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
