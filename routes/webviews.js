'use strict';

const config = require('../config');
const express = require('express');

const router = express.Router();


router.get('/webview', function (req, resp) {
    resp.render('webview-page');
});



module.exports = router;