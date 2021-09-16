"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userCreate = exports.getUserId = exports.getUsers = void 0;

var _user = require("./user.utils");

const getUsers = async (req, res, next) => {
  (0, _user.getUser)(req, res, next);
};

exports.getUsers = getUsers;

const getUserId = async (req, res, next) => {
  (0, _user.getUser)(req, res, next);
};

exports.getUserId = getUserId;

const userCreate = async (req, res, next) => {
  (0, _user.createUser)(req, res, next);
};

exports.userCreate = userCreate;