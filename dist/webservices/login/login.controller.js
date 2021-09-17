"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = void 0;

var _login = require("./login.utils");

const authenticate = async (req, res, next) => {
  (0, _login.authUser)(req, res, next);
};

exports.authenticate = authenticate;