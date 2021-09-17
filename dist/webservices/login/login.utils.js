"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = exports.authUser = void 0;

var _User = _interopRequireDefault(require("../../schemas/User"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _auth = require("../../config/auth.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateToken = (params = {}) => {
  return _jsonwebtoken.default.sign(params, _auth.secret, {
    expiresIn: 1800
  });
};

exports.generateToken = generateToken;

const authUser = async (req, res, next) => {
  const {
    email,
    password
  } = req.body;
  const user = await _User.default.findOne({
    email
  }).select('+password');

  if (!user) {
    return res.status(400).send({
      message: 'User not found'
    });
  }

  if (!(await _bcrypt.default.compare(password, user.password))) {
    return res.status(400).send({
      message: 'Invalid password'
    });
  }

  user.password = undefined;
  return res.send({
    user,
    token: generateToken({
      id: user.id
    })
  });
};

exports.authUser = authUser;