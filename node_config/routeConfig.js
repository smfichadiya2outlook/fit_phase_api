var express = require('express');

var _account = 'account';
var _accountController = require(`../src/${_account}/${_account}Controller`);

var router = express.Router();
router.route(`/${_account}/signup`).post(_accountController.signup);
router.route(`/${_account}/login`).post(_accountController.login);

module.exports = router;