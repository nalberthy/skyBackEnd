"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _user = require("../webservices/users/user.controller");

var _login = require("../webservices/login/login.controller");

var _routes = _interopRequireDefault(require("./routes.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const middleware = new _routes.default();
const router = (0, _express.Router)(); // routes public

exports.router = router;
router.post('/login', _login.authenticate);
router.post('/user/create', _user.userCreate); // middleware

router.use(middleware.checkAuthToken); // routes private

router.get('/user', _user.getUsers);
router.get('/user/:id', _user.getUserId);