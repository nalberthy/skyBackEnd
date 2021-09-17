"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetupApplication = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

class SetupApplication {
  constructor(port = 3000, app = (0, _express.default)()) {
    this.port = port;
    this.app = app;
    this.portServer = this.port;
    this.middlewares();
    this.database();
    this.routes();
  }

  middlewares() {
    this.app.use(_express.default.json());
    this.app.use((0, _cors.default)());
  }

  database() {
    const mongoURI = process.env.MONGO_URI;

    _mongoose.default.connect(mongoURI, {}, () => console.log('Connected to database'));
  }

  routes() {
    this.app.use(_routes.default);
  }

  start() {
    this.server = this.app.listen(this.portServer, () => {
      console.log(`Server running on port ${this.portServer}`);
    });
  }

}

exports.SetupApplication = SetupApplication;