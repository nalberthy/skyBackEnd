"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.getUser = void 0;

var _User = _interopRequireDefault(require("../../schemas/User"));

var _login = require("../login/login.utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      const users = await _User.default.find(id);
      users.password = undefined;
      res.json(users);
    } else {
      const user = await _User.default.findById(req.params.id);
      user.password = undefined;
      res.json(user);
    }
  } catch (error) {
    res.status(400).send({
      message: error.message
    });
  }
};

exports.getUser = getUser;

const createUser = async (req, res, next) => {
  const {
    email
  } = req.body;

  try {
    if (await _User.default.findOne({
      email
    })) {
      res.status(400).send({
        message: 'User already exists'
      });
    } else {
      const user = await _User.default.create(req.body);
      res.json({
        user,
        token: (0, _login.generateToken)({
          id: user.id
        })
      });
    }
  } catch (error) {
    res.status(400).send({
      message: 'Registration failed',
      error: error.message
    });
  }
};

exports.createUser = createUser;