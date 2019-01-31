'use strict';

const config = require('../config');
const express = require('express');

const router = express.Router();


router.get('/webview', function (req, res) {
res.json({
  message: err.message,
  error: err
});
    res.render('webview-page');
});



module.exports = router;