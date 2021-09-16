"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = new _mongoose.Schema({
  firstName: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Array
  }
}, {
  timestamps: true
});
UserSchema.pre('save', async function (next) {
  const hash = await _bcrypt.default.hash(this.password, 10);
  this.password = hash;
  next();
});

var _default = (0, _mongoose.model)('User', UserSchema);

exports.default = _default;