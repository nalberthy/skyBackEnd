"use strict";

var _app = require("./app");

class Server {
  static start() {
    const PORT = process.env.PORT;
    const application = new _app.SetupApplication(PORT);
    application.start();
  }

}

Server.start();