"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _routes = require("./routes.controllers");

const router = (0, _express.Router)();
router.use('/api/', _routes.router);
var _default = router;
exports.default = _default;