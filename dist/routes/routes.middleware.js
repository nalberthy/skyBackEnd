"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _auth = require("../config/auth.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class of principal middlewares
 */
class Middleware {
  checkAuthToken = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (authorization) {
      const bearer = authorization.split(' ');

      if (bearer.length !== 2) {
        res.status(401).send({
          message: 'Token is missing'
        });
      }

      const [scheme, token] = bearer;

      if (!/^Bearer$/i.test(scheme)) {
        res.status(401).send({
          message: 'Token malformatted'
        });
      }

      _jsonwebtoken.default.verify(token, _auth.secret, (err, decoded) => {
        if (err) {
          res.status(401).send({
            message: this.verifyError(err)
          });
        }

        req.userId = decoded === null || decoded === void 0 ? void 0 : decoded.id;
        next();
      });
    }
  };
  verifyError = error => {
    const messageError = {
      'jwt expired': 'Session expired',
      'invalid signature': 'Unauthorized'
    };

    if (messageError[error.message]) {
      return messageError[error.message];
    }

    return 'No token valid provided';
  };
}

exports.default = Middleware;